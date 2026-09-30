import React from 'react';
import st from '../styles/App.module.scss';
import useScrollReveal from '../hooks/useScrollReveal';
import { skillGroups } from '../data/portfolioData';
import { getTargetsForSkill } from '../data/skillTargets';
import { useHighlight } from '../data/HighlightContext';

const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

function Chip({ skill, tone, active, onMouseEnter, onMouseLeave, onClick }) {
    const hasTargets = skill.targets && skill.targets.length > 0;
    return (
        <li
            className={`${tone ? st[`tone_${tone}`] : ''} ${active ? st.chipActive : ''} ${hasTargets ? '' : st.noAction}`}
            onMouseEnter={hasTargets ? onMouseEnter : undefined}
            onMouseLeave={hasTargets ? onMouseLeave : undefined}
            onClick={hasTargets ? onClick : undefined}
            title={hasTargets ? `Highlight where I used ${skill.label}` : ''}
            tabIndex={hasTargets ? 0 : undefined}
            onKeyDown={(e) => {
                if (hasTargets && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            {skill.icon && <i className={skill.icon}></i>}
            <span className={st.chipLabel}>{skill.label}</span>
            {skill.years && <span className={st.chipDuration}>{skill.years}</span>}
        </li>
    );
}

function Skills() {
    const [ref, visible] = useScrollReveal();
    const { activeSkillKey, setActiveSkill, clearActiveSkill } = useHighlight();

    const handleEnter = (skill) => setActiveSkill(skill);
    const handleLeave = () => clearActiveSkill();
    const handleClick = (skill) => {
        const targets = getTargetsForSkill(skill.key);
        if (targets.length > 0) {
            scrollTo(targets[0]);
        }
    };

    return (
        <div id="skills" className={st.container}>
            <div ref={ref} className={`${st.reveal} ${visible ? st.visible : ''}`}>
                <h2>Skills</h2>
                <p className={st.skillsIntro}>
                    Grouped by where I actually used them. Hover or click a skill to highlight every
                    related work, project, or education entry.
                </p>

                {skillGroups.map((group) => (
                    <div key={group.key} className={st.skills}>
                        <h4 className={st.skillsGroupHeading}>
                            <span className={st[group.dotClass]}></span> {group.label}
                        </h4>
                        <ul>
                            {group.skills.map((skill) => (
                                <Chip
                                    key={skill.key}
                                    skill={skill}
                                    tone={group.key === 'lang' ? undefined : group.key}
                                    active={activeSkillKey === skill.key}
                                    onMouseEnter={() => handleEnter(skill)}
                                    onMouseLeave={handleLeave}
                                    onClick={() => handleClick(skill)}
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
