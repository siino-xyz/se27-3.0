import { rgb, sprinkles } from "@styles";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const svgRecipe = recipe({
  variants: {
    sizes: {
      themeToggleIcon: {
        width: 32,
        height: 32,
      },
      blogHeaderLogo: {
        width: 94,
        height: 43,
      },
      homeLogo: {
        width: 94,
        height: 26,
      },
      twitterIcon: {
        width: 40,
        height: 30,
      },
    },
    color: {
      initial: {
        fill: `rgb(${rgb.brand})`,
      },
      twitter: {
        fill: `rgb(${rgb.twitter})`,
      },
      black: {
        fill: `rgb(${rgb.black})`,
      },
      white: {
        fill: `rgb(${rgb.white})`,
      },
    },
    hoverd: {
      none: {},
      hover: [
        sprinkles({
          transition: "initial",
        }),
        {
          ":hover": {
            fill: `rgb(${rgb.secoundary})`,
          },
        },
      ],
    },
  },
  defaultVariants: {
    hoverd: "none",
  },
});

export type SvgRecipe = RecipeVariants<typeof svgRecipe>;
