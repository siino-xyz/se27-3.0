import { ICategory, ITag } from "@types";
import dayjs from "dayjs";

type PostMetaProps = {
  category?: ICategory;
  tags?: ITag[];
  createdAt?: string;
};

export const Meta = ({ category, tags, createdAt }: PostMetaProps) => {
  const dateFormat = dayjs(createdAt).locale("ja").format("YYYY/MM/DD");

  return (
    <div>
      <ul>
        <li>
          <span>Category: {category?.name}</span>
        </li>
      </ul>
      <ul>
        {tags?.map((tag) => (
          <li key={tag.id}>
            <span>Tag: {tag.name}</span>
          </li>
        ))}
      </ul>
      <span>Date: {dateFormat}</span>
    </div>
  );
};
