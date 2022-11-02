import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

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
      width: "100%",
      aspectRatio: "3/1",
    },
  ]),
  content: style([
    {
      objectFit: "cover",
    },
  ]),
};

export const blogImageRecipe = recipe({
  variants: {
    radius: {
      none: sprinkles({ borderRadius: "none" }),
      xs: sprinkles({ borderRadius: "xs" }),
    },
  },
  defaultVariants: {
    radius: "xs",
  },
});

export type BlogImageRecipe = RecipeVariants<typeof blogImageRecipe>;
