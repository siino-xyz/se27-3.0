import { HomeLogo, TwitterIcon } from "@components/svgAssets/SvgAssets";
import Link from "next/link";
import { styles } from "./Footer.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navItem}>
          SE27 Top
        </Link>
        <Link href="/blog" className={styles.navItem}>
          Blog Top
        </Link>
        <Link href="/contact" className={styles.navItem}>
          Contact
        </Link>
      </nav>
      <a
        href={"https://twitter.com/siino_SE_27"}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.myTwitterLink}
      >
        <TwitterIcon />
      </a>
      <HomeLogo color="white" />
      <span className={styles.copylight}>©se27 2022</span>
    </footer>
  );
};
