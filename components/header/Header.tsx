import { ColorModeToggle } from "@components/colorModeToggle/ColorModeToggle";
import { Se27BlogLogo } from "@components/svgAssets/SvgAssets";
import { header } from "./Header.css";

export const Header = () => {
  return (
    <header className={header}>
      <Se27BlogLogo />
      <ColorModeToggle />
    </header>
  );
};
