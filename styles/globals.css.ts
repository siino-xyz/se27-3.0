import { style, globalStyle, globalFontFace } from "@vanilla-extract/css";
import "styles/preflight.css";

globalStyle("html", {
  fontSize: "16px",
});

globalFontFace("kiChoJIS", {
  fontDisplay: "swap",
  src: "url(/fonts/KikaiChokokuJISMd.woff) format('woff')",
});

globalFontFace("MOBO", {
  fontDisplay: "swap",
  src: "url(/fonts/MOBO.woff) format('woff')",
});
