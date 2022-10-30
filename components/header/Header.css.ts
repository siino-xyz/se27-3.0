import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const header = style([
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sprinkles({
    paddingX: { mobile: "small", tablet: "medium", desktop: "large" },
    paddingY: "small",
  }),
]);

export const linkLogo = style([
  {
    cursor: "pointer",
  },
]);
