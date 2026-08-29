import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>Hobbyside</p>
          <p className={styles.copy}>
            깊은 취미를 나누고, 나만의 기록은 조용히 남겨두는 공간.
          </p>
        </div>
        <div className={styles.links}>
          <Link href="/community">커뮤니티</Link>
          <Link href="/diary">일기장</Link>
        </div>
      </div>
    </footer>
  );
}
