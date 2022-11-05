import { Button } from "@components";
import {
  HomeLogo,
  Se27BlogLogo,
  TwitterIcon,
} from "@components/svgAssets/SvgAssets";
import Link from "next/link";
import { styles } from "./Footer.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <Link href="/contact">
        <Button bgcolour="white" textcolour="black">
          ご依頼/問合せ
        </Button>
      </Link>
      <a
        href={"https://twitter.com/siino_SE_27"}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.myTwitterLink}
      >
        <TwitterIcon />
      </a>
      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <Link href="/">
            <HomeLogo color="white" />
          </Link>
          <ul className={styles.navMenuList}>
            <Link href="/" className={styles.navMenuItem}>
              <li>サービス</li>
            </Link>
            <Link href="/" className={styles.navMenuItem}>
              <li>技術スタック</li>
            </Link>
            <Link href="/" className={styles.navMenuItem}>
              <li>つくったもの</li>
            </Link>
            <Link href="/" className={styles.navMenuItem}>
              <li>制作実績</li>
            </Link>
          </ul>
        </nav>
        <span className={styles.divider} />
        <nav className={styles.nav}>
          <Link href="/blog">
            <Se27BlogLogo color="white" />
          </Link>
          <ul className={styles.navMenuList}>
            <Link href="/" className={styles.navMenuItem}>
              <li>新着記事</li>
            </Link>
            <Link href="/" className={styles.navMenuItem}>
              <li>カテゴリ</li>
            </Link>
            <Link href="/" className={styles.navMenuItem}>
              <li>タグ</li>
            </Link>
          </ul>
        </nav>
      </div>

      <span className={styles.copylight}>©se27 2022</span>
    </footer>
  );
};
