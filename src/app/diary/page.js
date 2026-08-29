import { diaryEntries } from "@/lib/mock-data";
import styles from "./diary.module.css";

export const metadata = {
  title: "일기장",
};

export default function DiaryPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroOrb} aria-hidden />
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            나만 볼 수 있는 공간
          </div>
          <h1 className={styles.title}>비밀 일기장</h1>
          <p className={styles.lead}>
            세션 기록, 장비 메모, 오늘의 감정까지. 커뮤니티와는 완전히 분리된
            개인 공간입니다.
          </p>
          <button type="button" className={styles.writeBtn}>
            새 기록 쓰기
          </button>
        </div>
      </div>

      <section className={styles.listSection} aria-label="내 기록">
        <div className={styles.listHeader}>
          <h2 className={styles.listTitle}>최근 기록</h2>
          <p className={styles.listCount}>{diaryEntries.length}개의 기록</p>
        </div>

        <ul className={styles.list}>
          {diaryEntries.map((entry) => (
            <li key={entry.id}>
              <button type="button" className={styles.entry}>
                <div className={styles.meta}>
                  <span className={styles.date}>{entry.date}</span>
                  <span className={styles.mood}>{entry.mood}</span>
                  {entry.private ? (
                    <span className={styles.private}>비공개</span>
                  ) : null}
                </div>
                <h3 className={styles.entryTitle}>{entry.title}</h3>
                <p className={styles.preview}>{entry.preview}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.prompt}>
        <p className={styles.promptTitle}>오늘의 한 줄도 남겨보세요</p>
        <p className={styles.promptText}>
          짧은 메모부터 긴 회고까지, 형식에 구애받지 않아도 괜찮아요.
        </p>
        <button type="button" className={styles.promptBtn}>
          빠른 메모
        </button>
      </section>
    </main>
  );
}
