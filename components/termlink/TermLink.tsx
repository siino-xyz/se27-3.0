import { ICategory, ITag } from "@types";
import Link from "next/link";
import React from "react";
import { tag, TagVariants } from "./TermLink.css";

type TagProps = {
  content?: string;
  href: string;
  hashTag: boolean;
} & TagVariants;

export const TermLink = ({
  content,
  background,
  colour,
  href,
  hashTag,
}: TagProps) => {
  return (
    <Link href={href}>
      <span
        className={tag({
          background,
          colour,
        })}
      >
        {hashTag ? "#" : null}
        {content}
      </span>
    </Link>
  );
};
