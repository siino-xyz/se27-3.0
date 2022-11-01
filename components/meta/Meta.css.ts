import { sprinkles } from "@styles";

export const styles = {
  tags: sprinkles({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "small",
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
  }),
  container: sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "small",
    width: "full",
  }),
};
