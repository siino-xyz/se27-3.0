import { rgb } from "@styles";
import { style } from "@vanilla-extract/css";

export const footer = style([
  {
    width: "100%",
    maxWidth: "100%",
    height: "50px",
    background: `rgb(${rgb.error})`,
  },
]);
