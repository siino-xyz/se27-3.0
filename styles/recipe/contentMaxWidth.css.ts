import { sprinkles } from "@styles/sprinkles.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const contentMaxWidth = recipe({
  base: {
    width: "100%",
  },
  variants: {
    maxWidth: {
      blog: sprinkles({ maxWidth: "large" }),
      services: sprinkles({ maxWidth: "full" }),
    },
  },
});

export type ContentMaxWidth = RecipeVariants<typeof contentMaxWidth>;
