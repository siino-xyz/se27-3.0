import { sprinkles } from "@styles";

export const styles = {
  paragraph: sprinkles({
    fontFamily: "initial",
    fontSize: { mobile: "sm", tablet: "base", desktop: "base" },
    lineHeight: [7],
    marginBottom: "large",
    paddingX: "xsmall",
  }),
  heading2: sprinkles({
    marginTop: "small",
    marginBottom: "medium",
    fontFamily: "heading",
    fontSize: { mobile: "2xl", tablet: "3xl", desktop: "3xl" },
    lineHeight: [7],
  }),
  heading3: sprinkles({
    marginTop: "small",
    marginBottom: "small",
    fontFamily: "heading",
    fontSize: { mobile: "xl", tablet: "2xl", desktop: "2xl" },
    lineHeight: [7],
  }),
  heading4: sprinkles({
    marginTop: "small",
    marginBottom: "small",
    fontFamily: "heading",
    fontSize: { mobile: "lg", tablet: "xl", desktop: "xl" },
    lineHeight: [7],
  }),
};
