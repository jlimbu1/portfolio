import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCode, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import st from '../styles/App.module.scss';
import Accordion from '../components/Accordion';
import useScrollReveal from '../hooks/useScrollReveal';
import { projects } from '../data/portfolioData';
import { useHighlight } from '../data/HighlightContext';
import { getTargetsForSkill } from '../data/skillTargets';

function Projects() {
    const [ref, visible] = useScrollReveal();
    const { activeSkillKey } = useHighlight();

    // Newest first by approximate recency.
    const sorted = [...projects].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

    const items = sorted.map((proj) => {
        const targets = activeSkillKey ? getTargetsForSkill(activeSkillKey) : [];
        const highlighted = targets.includes(proj.id);
        return { ...proj, highlighted };
    });

    const renderHeader = (entry) => (
        <div className={st.entryHeader}>
            <div className={st.entryMeta}>
                <span className={st.entryCompany}>
                    <FontAwesomeIcon icon={faCode} className={st.icon} /> {entry.tech}
                </span>
            </div>
            <h3 className={st.entryTitle}>{entry.title}</h3>
        </div>
    );

    const renderBody = (entry) => (
        <div>
            <p className={st.entryDescription}>
                <FontAwesomeIcon icon={faArrowRight} className={st.icon} /> {entry.description}
            </p>
            {entry.link && (
                <p className={st.entryLink}>
                    <FontAwesomeIcon icon={faLink} className={st.icon} />{' '}
                    <a href={entry.link} target="_blank" rel="noreferrer noopener">
                        {entry.linkLabel}
                    </a>
                </p>
            )}
        </div>
    );

    return (
        <div id="projects" className={st.container}>
            <div ref={ref} className={`${st.reveal} ${visible ? st.visible : ''}`}>
                <h2>Projects</h2>
                <Accordion items={items} renderHeader={renderHeader} renderBody={renderBody} />
            </div>
        </div>
    );
}

export default Projects;
