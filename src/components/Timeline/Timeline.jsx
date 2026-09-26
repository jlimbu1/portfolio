import React, { useState } from 'react';
import { educationData, experienceData, projectData } from '../../data/timelineData';
import styles from './Timeline.module.scss';

const Timeline = () => {
  const [activeId, setActiveId] = useState(null);

  const entries = [...educationData, ...experienceData, ...projectData];

  const getIconForType = (type) => {
    switch (type) {
      case 'education':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14L19 9L12 4L5 9L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'experience':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'project':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'education':
        return 'Education';
      case 'experience':
        return 'Experience';
      case 'project':
        return 'Project';
      default:
        return type;
    }
  };

  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.timelineTitle}>Career Timeline</h2>
      <div className={styles.timelineLine}></div>
      <div className={styles.timelineNodes}>
        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className={`${styles.timelineNode} ${index % 2 === 0 ? styles.left : styles.right} ${
              activeId === entry.id ? styles.active : ''
            }`}
            onClick={() => setActiveId(activeId === entry.id ? null : entry.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveId(activeId === entry.id ? null : entry.id);
              }
            }}
          >
            <div className={styles.timelineConnector}></div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineBadge}>
                {getIconForType(entry.type)}
                <span>{getTypeLabel(entry.type)}</span>
              </div>
              <div className={styles.timelineDate}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{entry.date}</span>
              </div>
              <h3 className={styles.timelineCardTitle}>{entry.title}</h3>
              <div className={styles.timelineCardSubtitle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{entry.institution || entry.organization}</span>
              </div>
              <p className={styles.timelineCardDescription}>{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
