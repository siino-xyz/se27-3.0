import { sprinkles } from "@styles";
import { style } from "@vanilla-extract/css";

export const styles = {
  icons: sprinkles({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "large",
    paddingTop: "medium",
  }),
};
