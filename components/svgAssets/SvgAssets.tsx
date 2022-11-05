import DARKMODE_TOGGLE_ICON from "../../public/svg/icon_darkmode.svg";
import LIGHTMODE_TOGGLE_ICON from "../../public/svg/icon_lightmode.svg";
import SE27_BLOG_LOGO from "../../public/svg/logo_se27-blog.svg";
import HOME_LOGO from "../../public/svg/logo_home.svg";
import TWITTER_ICON from "../../public/svg/icon_myTwitter.svg";
import { SvgRecipe, svgRecipe } from "./SvgAssets.css";

type svgTypes = {} & SvgRecipe;

export const IconDarkMode = () => {
  return (
    <DARKMODE_TOGGLE_ICON
      className={svgRecipe({
        sizes: "themeToggleIcon",
        color: "initial",
      })}
    />
  );
};
export const IconLightMode = () => {
  return (
    <LIGHTMODE_TOGGLE_ICON
      className={svgRecipe({
        sizes: "themeToggleIcon",
        color: "initial",
      })}
    />
  );
};
export const Se27BlogLogo = () => {
  return (
    <SE27_BLOG_LOGO
      className={svgRecipe({
        sizes: "blogHeaderLogo",
        color: "initial",
      })}
    />
  );
};
export const HomeLogo = ({ color }: svgTypes) => {
  return (
    <HOME_LOGO
      className={svgRecipe({
        sizes: "homeLogo",
        color,
      })}
    />
  );
};
export const TwitterIcon = () => {
  return (
    <TWITTER_ICON
      className={svgRecipe({
        sizes: "twitterIcon",
        color: "initial",
      })}
    />
  );
};
