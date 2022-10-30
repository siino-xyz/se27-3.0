import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const styles = {
  wrapper: style([
    sprinkles({
      position: "relative",
      textAlign: "center",
      marginX: "auto",
      paddingY: "large",
    }),
    {
      maxWidth: "100%",
      aspectRatio: "3/1",
    },
  ]),
  content: style({
    objectFit: "cover",
  }),
};
