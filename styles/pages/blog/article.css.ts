import { style } from "@vanilla-extract/css";
import { text, heading_large } from "@styles/text.css";

export const styles = {
  blogTitle: style([
    {
      color: "red",
    },
    heading_large,
  ]),
  paragraph: style([
    {
      color: "blue",
    },
    text,
  ]),
  heading2: style([
    {
      color: "red",
    },
  ]),
  heading3: style([
    {
      color: "green",
      fontSize: 50,
    },
  ]),
  heading4: style([
    {
      color: "gray",
    },
  ]),
};
