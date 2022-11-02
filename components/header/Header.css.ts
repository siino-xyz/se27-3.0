import { rgb } from "@styles";
import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const header = style([
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "sticky",
    top: "0",
    left: "0",
    background: `rgba(${rgb.glassBg} / 0.5)`,
    backdropFilter: "blur(5px)",
  },
  sprinkles({
    width: "full",
    paddingX: { mobile: "small", tablet: "medium", desktop: "large" },
    paddingY: "small",
    zIndex: "5",
  }),
]);

export const linkLogo = style([
  {
    cursor: "pointer",
  },
]);
