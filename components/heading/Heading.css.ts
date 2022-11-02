import { sprinkles } from "@styles";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const headingRecipe = recipe({
  base: sprinkles({
    fontFamily: "heading",
  }),
  variants: {
    headings: {
      h1: sprinkles({
        marginTop: "small",
        marginBottom: "medium",
        fontSize: { mobile: "2xl", tablet: "3xl", desktop: "3xl" },
        lineHeight: [7],
      }),
      h2: sprinkles({
        marginTop: "small",
        marginBottom: "medium",
        fontSize: { mobile: "2xl", tablet: "3xl", desktop: "3xl" },
        lineHeight: [7],
      }),
      h3: sprinkles({
        marginTop: "small",
        marginBottom: "small",
        fontSize: { mobile: "xl", tablet: "2xl", desktop: "2xl" },
        lineHeight: [7],
      }),
      h4: sprinkles({
        marginTop: "small",
        marginBottom: "small",
        fontSize: { mobile: "lg", tablet: "xl", desktop: "xl" },
        lineHeight: [7],
      }),
    },
    aligns: {
      left: sprinkles({ textAlign: "left" }),
      right: sprinkles({ textAlign: "right" }),
      center: sprinkles({ textAlign: "center" }),
    },
  },
  defaultVariants: {
    aligns: "left",
  },
});

export type HeadingRecipe = RecipeVariants<typeof headingRecipe>;
