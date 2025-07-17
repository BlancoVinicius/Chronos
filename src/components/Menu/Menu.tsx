import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

import styles from './Menu.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storedTheme = localStorage.getItem('theme');
    return (storedTheme as AvailableThemes) || 'dark';
  });

  const nextTheme = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // return () => {
    //   // ... posso retorna uma função e serve para limpar o estado quando o componente for desmontado
    // };
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='/' aria-label='Home' title='Home'>
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Histórico'
        title='Historico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configuracoes'
        title='Configuracoes'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Tema'
        title='Tema'
        onClick={e => {
          e.preventDefault();
          setTheme(theme => (theme === 'dark' ? 'light' : 'dark'));
        }}
      >
        {nextTheme[theme]}
      </a>
    </nav>
  );
}
