import DARKMODE_TOGGLE_ICON from "../../public/svg/icon_darkmode.svg";
import LIGHTMODE_TOGGLE_ICON from "../../public/svg/icon_lightmode.svg";
import SE27_BLOG_LOGO from "../../public/svg/logo_se27-blog.svg";
import { blogHeaderLogo, themeToggleIcon } from "./SvgAssets.css";

export const IconDarkMode = () => {
  return <DARKMODE_TOGGLE_ICON className={themeToggleIcon} />;
};
export const IconLightMode = () => {
  return <LIGHTMODE_TOGGLE_ICON className={themeToggleIcon} />;
};
export const Se27BlogLogo = () => {
  return <SE27_BLOG_LOGO className={blogHeaderLogo} />;
};
