import { style } from "@vanilla-extract/css";

export const styles = {
  wrapper: style({
    minHeight: "100vh",
    position: "relative",
    width: "100%",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
  }),
  main: style({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  }),
};
