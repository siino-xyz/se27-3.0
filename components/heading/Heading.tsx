import { ElementType } from "react";
import { HeadingRecipe, headingRecipe } from "./Heading.css";

type HeadingProps = {
  as: ElementType<
    | JSX.IntrinsicElements["h1"]
    | JSX.IntrinsicElements["h2"]
    | JSX.IntrinsicElements["h3"]
    | JSX.IntrinsicElements["h4"]
  >;
  text: string;
} & HeadingRecipe;

export const Heading = ({
  as: Component,
  text,
  headings,
  aligns,
}: HeadingProps) => {
  return (
    <Component
      className={headingRecipe({
        headings,
        aligns,
      })}
    >
      {text}
    </Component>
  );
};
