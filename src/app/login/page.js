import Link from "next/link";
import styles from "./login.module.css";

export const metadata = {
  title: "로그인",
};

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <p className={styles.brand}>Hobbyside</p>
        <h1 className={styles.title}>로그인</h1>
        <p className={styles.lead}>
          구글 또는 카카오로 간편하게 시작하세요. 처음 로그인하면 계정이
          만들어집니다.
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.google} disabled>
            <GoogleIcon />
            Google로 계속하기
          </button>
          <button type="button" className={styles.kakao} disabled>
            <KakaoIcon />
            카카오로 계속하기
          </button>
        </div>

        <p className={styles.note}>
          OAuth 연동은 곧 연결됩니다. 지금은 화면만 준비되어 있어요.
        </p>

        <Link href="/" className={styles.back}>
          ← 홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
      />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 3C6.48 3 2 6.58 2 10.95c0 2.78 1.84 5.22 4.6 6.62-.15.55-.54 1.98-.62 2.29-.08.36.13.35.28.26.12-.08 1.94-1.32 2.73-1.86.96.14 1.97.21 3.01.21 5.52 0 10-3.58 10-7.95S17.52 3 12 3Z"
      />
    </svg>
  );
}
