import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import "styles/preflight.css";
import { rgb } from "./variables.css";
import "./theme.css";

globalStyle("body", {
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
