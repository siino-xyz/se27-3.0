import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import "styles/preflight.css";
import { rgb } from "./variables.css";
import "./theme.css";
import { Zen_Kaku_Gothic_Antique } from "@next/font/google";

globalStyle("body", {
  fontSize: "16px",
  color: `rgb(${rgb.brand})`,
  background: `rgb(${rgb.bg})`,
});

globalStyle("#__next", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

globalFontFace("kiChoJIS", {
  fontDisplay: "swap",
  src: "url(/fonts/KikaiChokokuJISMd.woff) format('woff')",
});

globalFontFace("MOBO", {
  fontDisplay: "swap",
  src: "url(/fonts/MOBO.woff) format('woff')",
});
