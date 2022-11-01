import { ICategory, ITag } from "@types";
import React from "react";
import { tag, TagVariants } from "./Tag.css";

type TagProps = {
  content?: string;
} & TagVariants;

export const Tag = ({ content, background, colour }: TagProps) => {
  return (
    <span
      className={tag({
        background,
        colour,
      })}
    >
      {content}
    </span>
  );
};
