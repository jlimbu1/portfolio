import { skillGroups } from './portfolioData';

// Build a lookup: skill key -> list of entry ids it targets.
const skillTargetMap = skillGroups.reduce((acc, group) => {
    group.skills.forEach((skill) => {
        if (skill.targets) {
            acc[skill.key] = skill.targets;
        }
    });
    return acc;
}, {});

// Returns the list of entry ids highlighted for a given skill key.
export function getTargetsForSkill(skillKey) {
    return skillTargetMap[skillKey] || [];
}

// Returns whether an entry id is targeted by a skill key.
export function isEntryTargeted(entryId, skillKey) {
    return getTargetsForSkill(skillKey).includes(entryId);
}
