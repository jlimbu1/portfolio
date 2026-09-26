import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBuilding } from '@fortawesome/free-solid-svg-icons'
import st from '../styles/App.module.scss'
import Accordion from '../components/Accordion'
import useScrollReveal from '../hooks/useScrollReveal'
import { experiences } from '../data/portfolioData'
import { useHighlight } from '../data/HighlightContext'
import { getTargetsForSkill } from '../data/skillTargets'

function Exps() {
    const [ref, visible] = useScrollReveal();
    const { activeSkillKey } = useHighlight();

    // Sort newest first (chronological / reverse-chronological)
    const sorted = [...experiences].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

    const items = sorted.map((exp) => {
        const targets = activeSkillKey ? getTargetsForSkill(activeSkillKey) : [];
        const highlighted = targets.includes(exp.id);
        return {
            ...exp,
            highlighted,
        };
    });

    const renderHeader = (entry) => (
        <div className={st.entryHeader}>
            <div className={st.entryMeta}>
                <span className={st.entryCompany}>
                    <FontAwesomeIcon icon={faBuilding} className={st.icon} /> {entry.company}
                </span>
                <span className={st.entryDate}>{entry.date}</span>
            </div>
            <h3 className={st.entryTitle}>{entry.role}</h3>
        </div>
    );

    const renderBody = (entry) => (
        <ul className={st.bullets}>
            {entry.bullets.map((b, i) => (
                <li key={i}>
                    <FontAwesomeIcon icon={faArrowRight} className={st.icon} /> {b}
                </li>
            ))}
        </ul>
    );

    return (
        <div id='experiences' className={st.container}>
            <div ref={ref} className={`${st.reveal} ${visible ? st.visible : ''}`}>
                <h2>Experience</h2>
                <Accordion items={items} renderHeader={renderHeader} renderBody={renderBody} />
            </div>
        </div>
    )
}

export default Exps;
