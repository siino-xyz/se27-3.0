import { borderRadius, rgb, space, sprinkles } from "@styles";
import { style } from "@vanilla-extract/css";

const borderWidth = 2.5;

export const styles = {
  cards: style([
    {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 0.9fr))",
      gridGap: space.small,
      justifyContent: "center",
    },
    sprinkles({}),
  ]),
  card: sprinkles({
    display: "flex",
    flexDirection: "column",
  }),
  imageWrapper: style([
    {
      borderTop: `${borderWidth}px solid rgb(${rgb.brand})`,
      borderLeft: `${borderWidth}px solid rgb(${rgb.brand})`,
      borderRight: `${borderWidth}px solid rgb(${rgb.brand})`,
    },
  ]),
  title: style([
    {
      background: `rgb(${rgb.brand})`,
      color: `rgb(${rgb.bg})`,
    },
    sprinkles({
      fontSize: "lg",
      fontWeight: "bold",
      paddingX: "xsmall",
      paddingBottom: "small",
      paddingTop: "small",
    }),
  ]),
};
