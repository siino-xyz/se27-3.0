import { style } from "@vanilla-extract/css";

export const toggleStyle = style([
  {
    ":hover": {
      background: "#aaa",
    },
  },
]);

export const dataStateOn = style([
  {
    background: "#000",
  },
]);
