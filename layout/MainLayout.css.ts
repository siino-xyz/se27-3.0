import { style } from "@vanilla-extract/css";

export const styles = {
  main: style({
    flex: 1,
  }),
  wrapper: style({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  }),
};
