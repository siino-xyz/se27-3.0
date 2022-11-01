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
    marginTop: "small",
    marginBottom: "medium",
    fontFamily: "heading",
    fontSize: { mobile: "2xl", tablet: "3xl", desktop: "3xl" },
    lineHeight: [7],
  }),
  textcontent: sprinkles({
    paddingTop: "large",
    paddingBottom: "medium",
    paddingX: { mobile: "small", tablet: "large", desktop: "xlarge" },
  }),
  header: sprinkles({ paddingX: "xsmall" }),
};
