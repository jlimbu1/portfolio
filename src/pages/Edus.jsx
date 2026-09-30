import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGraduationCap, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import st from '../styles/App.module.scss';
import Accordion from '../components/Accordion';
import useScrollReveal from '../hooks/useScrollReveal';
import { educations } from '../data/portfolioData';
import { useHighlight } from '../data/HighlightContext';
import { getTargetsForSkill } from '../data/skillTargets';

function Edus() {
    const [ref, visible] = useScrollReveal();
    const { activeSkillKey } = useHighlight();

    // Newest first: HKUST (2019-2022) then CCCU (2017-2019)
    const sorted = [...educations].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

    const items = sorted.map((edu) => {
        const targets = activeSkillKey ? getTargetsForSkill(activeSkillKey) : [];
        const highlighted = targets.includes(edu.id);
        return { ...edu, highlighted };
    });

    const renderHeader = (entry) => (
        <div className={st.entryHeader}>
            <div className={st.entryMeta}>
                <span className={st.entryCompany}>
                    <FontAwesomeIcon icon={faGraduationCap} className={st.icon} /> {entry.degree}
                </span>
                <span className={st.entryDate}>
                    <FontAwesomeIcon icon={faCalendarDays} className={st.icon} /> {entry.date}
                </span>
            </div>
            <h3 className={st.entryTitle}>{entry.institutionFull}</h3>
        </div>
    );

    const renderBody = (entry) => (
        <div>
            <h4 className={st.coursesHeading}>Relevant Courses</h4>
            <ul className={st.bullets}>
                {entry.courses.map((c, i) => (
                    <li key={i}>
                        <FontAwesomeIcon icon={faBook} className={st.icon} /> {c}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div id="educations" className={st.container}>
            <div ref={ref} className={`${st.reveal} ${visible ? st.visible : ''}`}>
                <h2>Education</h2>
                <Accordion items={items} renderHeader={renderHeader} renderBody={renderBody} />
            </div>
        </div>
    );
}

export default Edus;
