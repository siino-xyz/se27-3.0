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
      <Link href={home ? "/" : "/blog/page/1"} className={linkLogo}>
        {home ? <HomeLogo color="initial" /> : <Se27BlogLogo color="initial" />}
      </Link>
      <ColorModeToggle />
    </header>
  );
};
