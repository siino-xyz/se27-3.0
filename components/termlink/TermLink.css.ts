import { rgb, sprinkles } from "@styles";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const tag = recipe({
  base: [
    sprinkles({
      paddingX: "xsmall",
      paddingBottom: "smallest",
      borderRadius: "xs",
      fontWeight: "bold",
      fontSize: "sm",
      lineHeight: "none",
      letterSpacing: "normal",
    }),
  ],

  variants: {
    background: {
      initial: { background: `rgb(${rgb.brand})` },
      primary: { background: `rgb(${rgb.primary})` },
      secoudary: { background: `rgb(${rgb.secoundary})` },
      borderd: { border: `1px solid rgb(${rgb.brand})` },
    },
    colour: {
      initial: { color: `rgb(${rgb.brand})` },
      reverse: { color: `rgb(${rgb.bg})` },
    },
  },
  defaultVariants: {
    background: "initial",
    colour: "initial",
  },
});

export type TagVariants = RecipeVariants<typeof tag>;
