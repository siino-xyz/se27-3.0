import { style } from "@vanilla-extract/css";
import {
  text,
  heading_large,
  heading_medium,
  heading_small,
} from "@styles/text.css";
import { fonts } from "@styles";

export const styles = {
  paragraph: style([{}, text]),
  heading2: style([
    {
      color: "red",
      fontFamily: fonts.heading,
    },
    heading_large,
  ]),
  heading3: style([
    {
      color: "green",
      fontFamily: fonts.heading,
    },
    heading_medium,
  ]),
  heading4: style([
    {
      color: "purple",
      fontFamily: fonts.heading,
    },
    heading_small,
  ]),
};
