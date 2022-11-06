import { rgb, space, sprinkles } from "@styles";
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
    justifyContent: "flex-start",
    gap: { mobile: "large", tablet: "large" },
    paddingY: "small",
    height: "full",
  }),
  navMenuList: style([
    sprinkles({
      display: "flex",
      flexDirection: "column",
      // justifyContent: "flex-start",
      gap: "small",
    }),
  ]),
  navMenuItem: style([
    sprinkles({
      fontFamily: "emblem",
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      gap: "xsmall",
      transition: "initial",
    }),
    {
      color: `rgb(${rgb.white})`,
      ":hover": {
        color: `rgb(${rgb.primary})`,
      },
    },
  ]),
  divider: style({
    width: "1px",
    height: "100%",
    background: `rgb(${rgb.white})`,
    marginRight: 20,
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
