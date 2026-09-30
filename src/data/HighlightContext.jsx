import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const HighlightContext = createContext(null);

// Tracks the currently active skill so entries across all sections can highlight in sync.
export function HighlightProvider({ children }) {
    const [activeSkillKey, setActiveSkillKey] = useState(null);

    // Precompute the set of entry ids that a given skill highlights.
    const setActiveSkill = useCallback((skill) => {
        setActiveSkillKey(skill ? skill.key : null);
    }, []);

    const clearActiveSkill = useCallback(() => setActiveSkillKey(null), []);

    const value = useMemo(
        () => ({
            activeSkillKey,
            setActiveSkill,
            clearActiveSkill,
        }),
        [activeSkillKey, setActiveSkill, clearActiveSkill],
    );

    return <HighlightContext.Provider value={value}>{children}</HighlightContext.Provider>;
}

export function useHighlight() {
    const ctx = useContext(HighlightContext);
    if (!ctx) throw new Error('useHighlight must be used within HighlightProvider');
    return ctx;
}
