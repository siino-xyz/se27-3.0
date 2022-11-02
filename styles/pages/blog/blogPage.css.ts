import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const blogPageStyles = {
  container: sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "full",
  }),
  title: sprinkles({
    marginBottom: "large",
    fontFamily: "heading",
    fontSize: { mobile: "2xl", tablet: "3xl", desktop: "4xl" },
    lineHeight: [7],
  }),
  textcontent: sprinkles({
    paddingTop: "xlarge",
    paddingBottom: "medium",
    width: "full",
  }),
  contentContainer: sprinkles({
    paddingX: { mobile: "small", tablet: "large", desktop: "xlarge" },
  }),
  codeBlock: sprinkles({
    borderRadius: "sm",
    marginY: { mobile: "large", tablet: "large", desktop: "large" },
  }),
  header: sprinkles({
    paddingX: "xsmall",
    marginTop: { mobile: "small", tablet: "small", desktop: "large" },
  }),
  linkIcons: sprinkles({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "large",
  }),
};
