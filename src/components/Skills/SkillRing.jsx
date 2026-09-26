import React from 'react';
import styles from './SkillRing.module.scss';

// SVG icons for common programming skills (simple line icons)
const skillIcons = {
  'React': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(120 12 12)" />
    </svg>
  ),
  'JavaScript': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 15L7 9M7 9L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'HTML & CSS': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3L6 20L12 22L18 20L20 3H4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 8L15 8M8 12L16 12M9.5 16L12 16.5L14.5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  'Node.js': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  'Python': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C8 3 7 4.5 7 6V8H12V9H7C4 9 3 10.5 3 13C3 15.5 4 17 7 17H9V14C9 12 10 11 12 11H16C18 11 19 10 19 8V6C19 4 18 3 16 3H12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 21C16 21 17 19.5 17 18V16H12V15H17C20 15 21 13.5 21 11C21 8.5 20 7 17 7H15V10C15 12 14 13 12 13H8C6 13 5 14 5 16V18C5 20 6 21 8 21H12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  'Git': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M6 8.5L6 15.5M8.5 6L15.5 6" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  'Responsive Design': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 20L10 16H14L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8L6 10L8 12M12 8L12 12M16 8L14 10L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'SQL': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="2" />
      <path d="M4 5V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V5" stroke="currentColor" strokeWidth="2" />
      <path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  'TypeScript': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 13L10.5 7L14 13M8.5 11H12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 13L16 16L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Testing (Jest/React Testing Library)': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3V7M15 3V7M4 11H20M5 6H19C20.1046 6 21 6.89543 21 8V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15L10 17L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'REST APIs': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12H20M8 6L8 18M16 6L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  'Agile/Scrum': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 3V8M12 16V21M3 12H8M16 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

const SkillRing = ({ name, proficiency }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (proficiency / 100) * circumference;
  const icon = skillIcons[name] || (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className={styles.skillRing}>
      <div className={styles.ringContainer}>
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle
            className={styles.circleBg}
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#d1d5db"
            strokeWidth="6"
          />
          <circle
            className={styles.circleProgress}
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#2f6f4f"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
          <text x="60" y="50" textAnchor="middle" className={styles.percentage}>
            {proficiency}%
          </text>
          <g transform="translate(50, 60)">
            <g className={styles.iconWrapper} color="#2f6f4f">
              {icon}
            </g>
          </g>
        </svg>
      </div>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default SkillRing;
