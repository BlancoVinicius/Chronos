import type React from 'react';
import styles from './button.module.css';
type DefaultbuttonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function Defaultbutton({
  icon,
  color = 'green',
  ...rest
}: DefaultbuttonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...rest}>
        {icon}
      </button>
    </>
  );
}
