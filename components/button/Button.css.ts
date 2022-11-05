import { rgb, sprinkles } from "@styles";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const buttonStyleVariants = recipe({
  base: {},
  variants: {
    baseStyle: {
      initial: [
        sprinkles({
          borderRadius: "md",
          paddingX: "large",
          paddingY: "small",
          fontFamily: "emblem",
          marginTop: "medium",
        }),
      ],
    },
    fontSize: {
      initial: sprinkles({
        fontSize: { mobile: "lg" },
      }),
      small: sprinkles({
        fontSize: { mobile: "sm", tablet: "sm", desktop: "sm" },
      }),
      large: sprinkles({
        fontSize: { mobile: "xl", tablet: "xl", desktop: "xl" },
      }),
    },
    fontWeight: {
      initial: sprinkles({
        fontWeight: "normal",
      }),
      bold: sprinkles({
        fontWeight: "bold",
      }),
    },
    bgcolour: {
      initial: {
        background: `rgb(${rgb.brand})`,
      },
      reverse: {
        background: `rgb(${rgb.bg})`,
      },
      black: {
        background: `rgb(${rgb.black})`,
      },
      white: {
        background: `rgb(${rgb.white})`,
      },
      none: {
        background: "none",
      },
    },
    textcolour: {
      initial: {
        color: `rgb(${rgb.bg})`,
      },
      reverse: {
        color: `rgb(${rgb.brand})`,
      },
      black: {
        color: `rgb(${rgb.black})`,
      },
      white: {
        color: `rgb(${rgb.white})`,
      },
      none: {
        color: "none",
      },
    },
  },
  defaultVariants: {
    baseStyle: "initial",
    bgcolour: "initial",
    textcolour: "initial",
    fontSize: "initial",
    fontWeight: "initial",
  },
});

export type ButtonStyleVariantsTypes = RecipeVariants<
  typeof buttonStyleVariants
>;
