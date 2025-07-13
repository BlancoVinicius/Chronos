// import type React from 'react';
import styles from './Footer.module.css';

// type FooterProps = {
//   children: React.ReactNode;
// };
export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica pomodoro</a>
      <a href=''>Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
