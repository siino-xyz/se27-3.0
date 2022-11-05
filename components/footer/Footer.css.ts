import { rgb, sprinkles } from "@styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  container: style([
    {
      background: `rgb(${rgb.black})`,
      borderTop: `2px dashed rgb(${rgb.white})`,
    },
    sprinkles({
      width: "full",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: { mobile: "xlarge", tablet: "xlarge", desktop: "xlarge" },
      paddingBottom: { mobile: "small", tablet: "xlarge", desktop: "xlarge" },
      marginTop: { mobile: "xlarge", tablet: "xlarge", desktop: "xlarge" },
    }),
  ]),
  navWrapper: sprinkles({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "large",
    justifyContent: "center",
    marginTop: "xlarge",
  }),
  nav: sprinkles({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: { mobile: "large", tablet: "large" },
    paddingY: "small",
    height: "full",
  }),
  navMenuList: style([
    {
      color: `rgb(${rgb.white})`,
    },
    sprinkles({
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      gap: "small",
    }),
  ]),
  navMenuItem: style([
    sprinkles({
      fontFamily: "emblem",
    }),
  ]),
  divider: style({
    width: "1px",
    height: "100%",
    background: `rgb(${rgb.white})`,
  }),
  myTwitterLink: sprinkles({
    padding: "small",
    marginTop: "large",
  }),
  copylight: style([
    {
      color: `rgb(${rgb.gray3})`,
    },
    sprinkles({
      paddingTop: "large",
      fontSize: "sm",
      letterSpacing: "wide",
    }),
  ]),
};
