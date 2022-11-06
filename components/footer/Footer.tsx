import { Button } from "@components";
import {
  HomeLogo,
  Se27BlogLogo,
  TwitterIcon,
} from "@components/svgAssets/SvgAssets";
import {
  Crosshair2Icon,
  KeyboardIcon,
  ArchiveIcon,
  DesktopIcon,
} from "@radix-ui/react-icons";
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
            <HomeLogo color="white" hoverd="hover" />
          </Link>
          <ul className={styles.navMenuList}>
            <Link href="/" className={styles.navMenuItem}>
              <Crosshair2Icon />
              <li>サービス</li>
            </Link>
            <Link href="/" className={styles.navMenuItem}>
              <KeyboardIcon />
              <li>技術スタック</li>
            </Link>
            <Link href="/" className={styles.navMenuItem}>
              <ArchiveIcon />
              <li>作ったもの</li>
            </Link>
            <Link href="/" className={styles.navMenuItem}>
              <DesktopIcon />
              <li>制作実績</li>
            </Link>
          </ul>
        </nav>
        <span className={styles.divider} />
        <nav className={styles.nav}>
          <Link href={`/blog/page/1`}>
            <Se27BlogLogo color="white" hoverd="hover" />
          </Link>
          <ul className={styles.navMenuList}></ul>
        </nav>
      </div>

      <span className={styles.copylight}>©se27 2022</span>
    </footer>
  );
};
