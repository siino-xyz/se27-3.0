import { rgb } from "@styles";
import { style } from "@vanilla-extract/css";

export const themeToggleIcon = style([
  {
    width: 32,
    height: 32,
    fill: `rgb(${rgb.brand})`,
  },
]);

export const blogHeaderLogo = style([
  {
    width: 94,
    height: 43,
    fill: `rgb(${rgb.brand})`,
  },
]);

export const homeLogo = style({
  width: 94,
  height: 26,
  fill: `rgb(${rgb.brand})`,
});
