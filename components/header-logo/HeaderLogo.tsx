import { HomeLogo, Se27BlogLogo } from "@components/svgAssets/SvgAssets";
import { ReactElement } from "react";

type HeaderLogoProps = {
  home: ReactElement;
};

export const HeaderLogo = ({ home }: HeaderLogoProps) => {
  return <>{home ? <HomeLogo /> : <Se27BlogLogo />}</>;
};
