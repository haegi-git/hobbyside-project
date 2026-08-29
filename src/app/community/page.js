import Link from "next/link";
import { feedPosts, hobbies } from "@/lib/mock-data";
import styles from "./community.module.css";

export const metadata = {
  title: "커뮤니티",
};

export default function CommunityPage() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Community</p>
          <h1 className={styles.title}>취미 커뮤니티</h1>
          <p className={styles.lead}>
            매니아층의 질문, 팁, 후기를 한곳에서 모아보세요.
          </p>
        </div>
        <button type="button" className={styles.writeBtn}>
          글 쓰기
        </button>
      </div>

      <section className={styles.chips} aria-label="취미 카테고리">
        <div className={styles.chipRow}>
          <button type="button" className={styles.chipActive}>
            전체
          </button>
          {hobbies.map((hobby) => (
            <Link
              key={hobby.slug}
              href={`/community?hobby=${hobby.slug}`}
              className={styles.chip}
            >
              {hobby.name}
            </Link>
          ))}
        </div>
      </section>

      <div className={styles.layout}>
        <section aria-label="최근 글">
          <h2 className={styles.feedTitle}>최근 이야기</h2>
          <ul className={styles.feed}>
            {feedPosts.map((post) => (
              <li key={post.id} className={styles.feedItem}>
                <button type="button" className={styles.post}>
                  <div className={styles.postMeta}>
                    <span>{post.hobby}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.time}>{post.time}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <p className={styles.postAuthor}>{post.author}</p>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <aside className={styles.aside}>
          <div className={styles.popular}>
            <h2 className={styles.popularTitle}>인기 취미</h2>
            <ul className={styles.popularList}>
              {hobbies.slice(0, 4).map((hobby, index) => (
                <li key={hobby.slug}>
                  <Link
                    href={`/community?hobby=${hobby.slug}`}
                    className={styles.popularItem}
                  >
                    <span className={styles.rank}>{index + 1}</span>
                    <span>
                      <span className={styles.popularName}>{hobby.name}</span>
                      <span className={styles.popularMeta}>{hobby.members}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.promo}>
            <p className={styles.promoLabel}>Private</p>
            <p className={styles.promoText}>연습 기록은 일기장에 남겨두세요</p>
            <Link href="/diary" className={styles.promoLink}>
              일기장으로 →
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
