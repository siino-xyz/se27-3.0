import { rgb, sprinkles } from "@styles";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const tag = recipe({
  base: [
    sprinkles({
      paddingX: "small",
      paddingY: "smallest",
      borderRadius: "xs",
      fontWeight: "bold",
      fontSize: "sm",
      lineHeight: "none",
      letterSpacing: "wide",
    }),
  ],

  variants: {
    bg: {
      category: { background: `rgb(${rgb.brand})` },
      tags: { background: `rgb(${rgb.fg2})` },
    },
    colour: {
      initial: { color: `rgb(${rgb.brand})` },
      reverse: { color: `rgb(${rgb.bg})` },
    },
  },
  defaultVariants: {
    bg: "category",
    colour: "initial",
  },
});

export type TagVariants = RecipeVariants<typeof tag>;
