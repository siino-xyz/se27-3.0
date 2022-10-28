import { ColorModeToggle } from "@components/colorModeToggle/ColorModeToggle";
import { header } from "./Header.css";
import { HomeLogo, Se27BlogLogo } from "@components/svgAssets/SvgAssets";
import { ReactElement } from "react";

type HeaderProps = {
  home: boolean;
};
export const Header = ({ home }: HeaderProps) => {
  return (
    <header className={header}>
      {home ? <HomeLogo /> : <Se27BlogLogo />}
      <ColorModeToggle />
    </header>
  );
};
