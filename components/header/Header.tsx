import { ColorModeToggle } from "@components/colorModeToggle/ColorModeToggle";
import { header, linkLogo } from "./Header.css";
import { HomeLogo, Se27BlogLogo } from "@components/svgAssets/SvgAssets";
import Link from "next/link";

type HeaderProps = {
  home: boolean;
};
export const Header = ({ home }: HeaderProps) => {
  return (
    <header className={header}>
      <Link href={home ? "/" : "/blog"} className={linkLogo}>
        <a>{home ? <HomeLogo /> : <Se27BlogLogo />}</a>
      </Link>
      <ColorModeToggle />
    </header>
  );
};
