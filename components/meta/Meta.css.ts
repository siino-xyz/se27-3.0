import { borderRadius, rgb, sprinkles } from "@styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  tags: sprinkles({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "xsmall",
  }),
  label: sprinkles({
    fontSize: "sm",
    fontWeight: "bold",
  }),
  contentWrapper: sprinkles({
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: "small",
  }),
  date: sprinkles({
    fontSize: "sm",
    fontWeight: "bold",
    letterSpacing: "wide",
  }),
  container: sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "small",
    width: "full",
  }),
  withcard: style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  }),
  terms: style([
    {
      maxWidth: "65%",
      background: `rgb(${rgb.brand})`,
      borderBottomLeftRadius: borderRadius.xs,
      borderBottomRightRadius: borderRadius.xs,
    },
    sprinkles({
      paddingX: "xsmall",
      paddingBottom: "small",
      display: "flex",
      flexDirection: "column",
      gap: "xsmall",
    }),
  ]),
  datewrapper: style([
    {
      background: `rgb(${rgb.brand})`,
      textAlign: "right",
      borderBottomLeftRadius: borderRadius.xs,
      borderBottomRightRadius: borderRadius.xs,
      maxWidth: "25%",
    },
    sprinkles({
      paddingX: "xsmall",
      paddingBottom: "xsmall",
    }),
  ]),
  dateforCard: style({
    color: `rgb(${rgb.bg})`,
  }),
  errortext: style([
    {
      color: `rgb(${rgb.bg})`,
    },
    sprinkles({
      lineHeight: "none",
      fontSize: "sm",
    }),
  ]),
};
