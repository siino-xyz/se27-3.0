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
    marginTop: "large",
    marginBottom: "large",
    fontFamily: "heading",
    fontSize: { mobile: "2xl", tablet: "3xl", desktop: "4xl" },
    lineHeight: [7],
  }),
  textcontent: sprinkles({
    paddingTop: "xlarge",
    paddingBottom: "medium",
    paddingX: { mobile: "small", tablet: "large", desktop: "xlarge" },
  }),
  header: sprinkles({ paddingX: "xsmall" }),
};
