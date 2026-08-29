import Link from "next/link";
import { hobbies } from "@/lib/mock-data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroWash} aria-hidden />
        <div className={styles.heroGlow} aria-hidden />
        <div className={`${styles.heroOrb} anim-pulse-soft`} aria-hidden />

        <div className={`${styles.floatCard} anim-drift`} aria-hidden>
          <div className={styles.floatCardInner} />
          <div className={styles.floatLine} />
          <div className={styles.floatLineShort} />
        </div>
        <div className={`${styles.floatCardSmall} anim-drift`} aria-hidden>
          <div className={styles.floatCardSmallInner} />
        </div>

        <div className={styles.heroContent}>
          <p className={`${styles.brand} anim-rise`}>Hobbyside</p>
          <h1 className={`${styles.headline} anim-rise anim-rise-delay-1`}>
            취향이 모이는 자리
          </h1>
          <p className={`${styles.lead} anim-rise anim-rise-delay-2`}>
            깊은 취미의 이야기를 나누고, 나만의 비밀 기록은 조용히 남겨두세요.
          </p>
          <div className={`${styles.ctaRow} anim-rise anim-rise-delay-3`}>
            <Link href="/community" className={styles.btnPrimary}>
              커뮤니티 둘러보기
            </Link>
            <Link href="/diary" className={styles.btnGhost}>
              내 일기장 열기
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>두 가지 공간</p>
        <h2 className={styles.sectionTitle}>
          나누고 싶은 것과, 나만 간직할 것을 나눕니다
        </h2>
        <p className={styles.sectionText}>
          커뮤니티에서는 매니아층의 정보와 경험을 공유하고, 일기장에서는 누구에게도
          보이지 않는 기록을 쌓아요.
        </p>

        <div className={styles.pathGrid}>
          <Link href="/community" className={styles.pathDark}>
            <p className={styles.pathLabel}>Community</p>
            <h3 className={styles.pathTitleDark}>취미 커뮤니티</h3>
            <p className={styles.pathBodyDark}>
              필름, 클라이밍, 바이닐처럼 취향이 깊은 사람들의 팁과 이야기를
              모읍니다.
            </p>
            <span className={styles.pathActionSand}>입장하기 →</span>
          </Link>

          <Link href="/diary" className={styles.pathLight}>
            <p className={styles.pathLabelWine}>Private diary</p>
            <h3 className={styles.pathTitleLight}>비밀 일기장</h3>
            <p className={styles.pathBodyLight}>
              연습 기록, 장비 메모, 오늘의 감정까지. 나만 볼 수 있는 조용한
              공간입니다.
            </p>
            <span className={styles.pathActionAccent}>기록 열기 →</span>
          </Link>
        </div>
      </section>

      <section className={styles.band}>
        <div className={styles.section}>
          <p className={styles.eyebrow}>Niche hobbies</p>
          <h2 className={styles.sectionTitle}>매니아층이 모이는 취미부터</h2>
          <p className={styles.sectionText}>
            얕은 관심보다, 오래 파고드는 취향을 위한 공간이에요.
          </p>

          <ul className={styles.hobbyGrid}>
            {hobbies.map((hobby) => (
              <li key={hobby.slug}>
                <Link
                  href={`/community?hobby=${hobby.slug}`}
                  className={styles.hobbyCard}
                >
                  <div>
                    <div
                      className={styles.hobbySwatch}
                      style={{ background: hobby.tone }}
                      aria-hidden
                    />
                    <h3 className={styles.hobbyName}>{hobby.name}</h3>
                    <p className={styles.hobbyBlurb}>{hobby.blurb}</p>
                  </div>
                  <p className={styles.hobbyMeta}>{hobby.members} members</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.ctaBanner}>
          <div className={styles.ctaOrb} aria-hidden />
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>취향을 나누고, 기록은 남겨두세요</h2>
            <p className={styles.ctaText}>
              Hobbyside는 웹앱으로도 편하게 쓰도록 반응형으로 설계되어 있어요.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/community" className={styles.btnAccent}>
                지금 시작하기
              </Link>
              <Link href="/diary" className={styles.btnOutline}>
                비밀 공간 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
