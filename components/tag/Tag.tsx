import { ICategory, ITag } from "@types";
import React from "react";
import { tag, TagVariants } from "./Tag.css";

type TagProps = {
  content?: string;
} & TagVariants;

export const Tag = ({ content, bg, colour }: TagProps) => {
  return (
    <span
      className={tag({
        bg,
        colour,
      })}
    >
      {content}
    </span>
  );
};
