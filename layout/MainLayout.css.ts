import { sprinkles } from "@styles";
import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const styles = {
  main: style([
    {
      flex: 1,
    },
    sprinkles({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginX: "auto",
    }),
  ]),
  wrapper: style([
    {
      minHeight: "100vh",
      width: "100%",
    },
    sprinkles({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginX: "auto",
    }),
  ]),
};

export const customMaxWidth = recipe({
  variants: {
    maxWidth: {
      blog: sprinkles({ maxWidth: "large" }),
      services: sprinkles({ maxWidth: "full" }),
    },
  },
});

export type CustomMaxWidth = RecipeVariants<typeof customMaxWidth>;
