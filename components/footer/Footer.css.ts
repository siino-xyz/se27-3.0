import { rgb, sprinkles } from "@styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  container: style([
    {
      background: `rgb(${rgb.black})`,
    },
    sprinkles({
      width: "full",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: { mobile: "xlarge", tablet: "xlarge", desktop: "xlarge" },
      paddingBottom: { mobile: "xlarge", tablet: "xlarge", desktop: "xlarge" },
      marginTop: { mobile: "xlarge", tablet: "xlarge", desktop: "xlarge" },
    }),
  ]),
  nav: sprinkles({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: { mobile: "column", tablet: "row" },
    gap: { mobile: "small", tablet: "large" },
    width: "full",
    justifyContent: "center",
    fontFamily: "initial",
    textAlign: "center",
    fontSize: "lg",
    fontWeight: "normal",
  }),
  navItem: style({
    color: `rgb(${rgb.white})`,
  }),
  myTwitterLink: style({}),
  copylight: style({}),
};
