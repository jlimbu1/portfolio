import React from 'react';
import styles from './Abouts.module.scss';

const Abouts = () => (
  <section id="about" className={styles.about}>
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <svg
          viewBox="0 0 200 200"
          className={styles.profileImage}
          role="img"
          aria-label="Profile avatar"
        >
          <rect width="200" height="200" fill="#e8e6e1" />
          <circle cx="100" cy="80" r="40" fill="#c9c6be" />
          <path d="M40 200C40 155 67 130 100 130C133 130 160 155 160 200Z" fill="#c9c6be" />
        </svg>
      </div>
      <div className={styles.text}>
        <h2>About Me</h2>
        <p>Hello! I am a software engineer with a passion for building great products...</p>
        <p>I specialize in full-stack development, 3D configurators, and scalable web applications.</p>
      </div>
    </div>
  </section>
);

export default Abouts;
