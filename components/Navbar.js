
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { isLoggedIn, logout } from '../lib/auth';
import { useRouter } from 'next/router';
import { useLanguage } from '../lib/useLanguage';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { t, lang, switchLang } = useLanguage();

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
          <Link href="/">{t("home")}</Link>
          <Link href="/about">{t("about")}</Link>
          <Link href="/owners">{t("owners")}</Link>
          {isLoggedIn() ? (
            <a
              href="#"
              onClick={() => {
                logout();
                router.push('/login');
              }}
            >
              {t("logout")}
            </a>
          ) : (
            <Link href="/login">{t("login")}</Link>
          )}
          <button 
            style={{background:"none", border:"none", color:"white", cursor:"pointer"}}
            onClick={() => switchLang(lang === "en" ? "es" : "en")}>
            {lang === "en" ? "Español" : "English"}
          </button>
        </div>
      </div>
    </nav>
  );
}
