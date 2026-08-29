"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileNav.module.css";

const tabs = [
  {
    href: "/community",
    label: "커뮤니티",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon} fill="none" aria-hidden>
        <path
          d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.5 19c.4-2.6 2.5-4 4.5-4s4.1 1.4 4.5 4M10.5 19c.4-2.6 2.5-4 4.5-4s4.1 1.4 4.5 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "/",
    label: "홈",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon} fill="none" aria-hidden>
        <path
          d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/diary",
    label: "일기장",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon} fill="none" aria-hidden>
        <path
          d="M7 3.5h9.5A2.5 2.5 0 0 1 19 6v14.5L14.5 18H7A2.5 2.5 0 0 1 4.5 15.5v-10A2 2 0 0 1 6.5 3.5H7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 8h6M8.5 11.5h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="하단 메뉴">
      <ul className={styles.list}>
        {tabs.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname === tab.href || pathname.startsWith(`${tab.href}/`);

          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={active ? styles.tabActive : styles.tab}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
