import { ICategory, ITag } from "@types";
import dayjs from "dayjs";
import Link from "next/link";

type PostMetaProps = {
  category?: ICategory;
  tags?: ITag[];
  createdAt?: string;
};

export const Meta = ({ category, tags, createdAt }: PostMetaProps) => {
  const dateFormat = dayjs(createdAt).locale("ja").format("YYYY/MM/DD");

  return (
    <div>
      <Link href={`/blog/category/${category?.id}/page/1`}>
        <span>Category: {category?.name}</span>
      </Link>
      <ul>
        {tags?.map((tag, index) => (
          <li key={index}>
            <Link href={`/blog/tags/${tag.id}/page/1`}>
              <span>Tag: {tag.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <span>Date: {dateFormat}</span>
    </div>
  );
};
