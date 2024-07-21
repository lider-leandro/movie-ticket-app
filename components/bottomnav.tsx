// components/BottomNav.js

import Link from 'next/link';
import styles from './BottomNav.module.css';

const BottomNav = () => {
  return (
    <div className={styles.bottomNav}>
      <Link href="/">
        
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        
      </Link>
      <Link href="../components/Prueba.tsx">
        
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        
      </Link>
      <Link href="/tickets">
        
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M22 10h-1V6h-4V5h-4V4h-4v1H6v4H5v4h1v4h4v1h4v-1h4v-4h1v-4zM6 16H5v-4h1v4zm12 1h-4v-1h-4v1H6v-4H5v-4h1V6h4V5h4v1h4v4h1v4h-1v4z" />
          </svg>
        
      </Link>
    </div>
  );
};

export default BottomNav;
