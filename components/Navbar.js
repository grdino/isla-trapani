import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { isLoggedIn, logout } from '../lib/auth';
import { useRouter } from 'next/router';
import { useLanguage } from '../lib/useLanguage';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { t, lang, switchLang } = useLanguage();
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login state on client only
  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src="/it-logo-trans.png" className={styles.logo} />
        <span className={styles.title}>Isla Trapani</span>
      </div>

      <div className={styles.right}>
        {/* Single language toggle: left of menu (desktop) and left of hamburger (mobile) */}
        <button
          className={styles.langToggle}
          onClick={() => switchLang(lang === "en" ? "es" : "en")}
          aria-label="Switch language"
        >
          {lang === "en" ? "Español" : "English"}
        </button>

        {/* Hamburger (mobile) */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Menu links */}
        <div className={`${styles.menu} ${open ? styles.show : ''}`}>
          <Link href="/">{t("home")}</Link>
          <Link href="/about">{t("about")}</Link>
          <Link href="/owners">{t("owners")}</Link>
          {loggedIn ? (
            <a
              href="#"
              onClick={() => {
                logout();
                setLoggedIn(false);
                router.push('/login');
              }}
            >
              {t("logout")}
            </a>
          ) : (
            <Link href="/login">{t("login")}</Link>
          )}
          {/* Language toggle removed from inside the menu */}
        </div>
      </div>
    </nav>
  );
}
