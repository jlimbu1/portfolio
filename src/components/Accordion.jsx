import React, { useState } from 'react';
import st from './Accordion.module.scss';

// Reusable collapsible accordion list. Each item expands on click.
// Each item can be "highlighted" when a matching skill is active.
function Accordion({ items, renderHeader, renderBody, onToggle }) {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        const next = openId === id ? null : id;
        setOpenId(next);
        if (onToggle) onToggle(id, next);
    };

    return (
        <div className={st.accordion}>
            {items.map((item) => {
                const isOpen = openId === item.id;
                const isHighlighted = item.highlighted;
                return (
                    <div
                        key={item.id}
                        id={item.id}
                        className={`${st.item} ${isOpen ? st.open : ''} ${isHighlighted ? st.highlighted : ''}`}
                    >
                        <button
                            type="button"
                            className={st.header}
                            onClick={() => handleToggle(item.id)}
                            aria-expanded={isOpen}
                            aria-controls={`${item.id}-body`}
                        >
                            <span className={st.headerContent}>{renderHeader(item)}</span>
                            <span className={st.chevron} aria-hidden="true">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </span>
                        </button>
                        <div
                            id={`${item.id}-body`}
                            className={st.body}
                            role="region"
                            hidden={!isOpen}
                        >
                            <div className={st.bodyInner}>{renderBody(item)}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Accordion;
