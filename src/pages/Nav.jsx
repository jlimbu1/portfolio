import React, { useState } from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#timeline', label: 'Timeline' },
  ];

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.container}>
        <a href="#about" className={styles.logo} onClick={closeMenu}>
          Portfolio
        </a>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
