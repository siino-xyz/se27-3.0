import { globalStyle, globalFontFace, style } from "@vanilla-extract/css";
import "styles/preflight.css";
import { rgb } from "./variables.css";
import "./theme.css";

globalStyle("body", {
  color: `rgb(${rgb.brand})`,
  background: `rgb(${rgb.bg})`,
  transition: "all .3s ease",
});

globalStyle("#__next", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});
