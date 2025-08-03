
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { isLoggedIn, logout } from '../lib/auth';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src="/it-logo-trans.png" className={styles.logo} />
        <span className={styles.title}>Isla Trapani</span>
      </div>
      <div className={styles.right}>
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
        <div className={`${styles.menu} ${open ? styles.show : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/owners">Owners</Link>
          {isLoggedIn() ? (
            <a
              href="#"
              onClick={() => {
                logout();
                router.push('/login');
              }}
            >
              Logout
            </a>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
