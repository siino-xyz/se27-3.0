import { globalFontFace, style } from "@vanilla-extract/css";
import { fonts } from "@styles/variables.css";

export const text = style([
  {
    fontFamily: fonts.initial,
    fontWeight: "700",
    fontSize: "3rem",
  },
]);
