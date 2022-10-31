import { style } from "@vanilla-extract/css";
import { fonts } from "@styles";

export const styles = {
  paragraph: style([{}]),
  heading2: style([
    {
      color: "red",
      fontFamily: fonts.heading,
    },
  ]),
  heading3: style([
    {
      color: "green",
      fontFamily: fonts.heading,
    },
  ]),
  heading4: style([
    {
      color: "purple",
      fontFamily: fonts.heading,
    },
  ]),
};
