import { style } from "@vanilla-extract/css";
import { heading_large } from "@styles/text.css";

export const styles = {
  blogTitle: style([
    {
      color: "red",
    },
    heading_large,
  ]),
};
