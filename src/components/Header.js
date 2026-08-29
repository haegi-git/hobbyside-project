"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const links = [
  { href: "/community", label: "커뮤니티" },
  { href: "/diary", label: "일기장" },
];

export default function Header() {
  const pathname = usePathname();
  const onLogin = pathname === "/login";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Hobbyside
        </Link>

        <div className={styles.actions}>
          <nav className={styles.nav} aria-label="주요 메뉴">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? styles.linkActive : styles.link}
                >
                  {link.label}
                  {active ? <span className={styles.underline} /> : null}
                </Link>
              );
            })}
            <Link href="/diary" className={styles.cta}>
              내 기록 열기
            </Link>
          </nav>

          {!onLogin ? (
            <Link href="/login" className={styles.login}>
              로그인
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
