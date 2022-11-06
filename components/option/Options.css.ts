import { sprinkles } from "@styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  paragraph: sprinkles({
    fontFamily: "initial",
    fontSize: { mobile: "sm", tablet: "base", desktop: "base" },
    lineHeight: { mobile: "7", tablet: "8", desktop: "9" },
    marginBottom: "xxlarge",
    paddingX: "xsmall",
    letterSpacing: "wide",
  }),
  heading2: sprinkles({
    marginTop: "small",
    marginBottom: "medium",
    fontWeight: "bold",
    fontSize: { mobile: "2xl", tablet: "3xl", desktop: "3xl" },
    lineHeight: "7",
  }),
  heading3: sprinkles({
    marginTop: "small",
    marginBottom: "small",
    fontWeight: "bold",
    fontSize: { mobile: "xl", tablet: "2xl", desktop: "2xl" },
    lineHeight: "7",
  }),
  heading4: sprinkles({
    marginTop: "small",
    marginBottom: "small",
    fontWeight: "bold",
    fontSize: { mobile: "lg", tablet: "xl", desktop: "xl" },
    lineHeight: "7",
  }),
  lists: style([
    {
      listStyle: "disc !important",
    },
    sprinkles({
      paddingLeft: "large",
    }),
  ]),
  ollists: style([
    {
      listStyle: "decimal !important",
    },
    sprinkles({
      paddingLeft: "large",
    }),
  ]),
  listItem: style([{}]),
};
