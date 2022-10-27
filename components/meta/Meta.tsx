import { ICategory, ITag } from "@types";
import dayjs from "dayjs";

type PostMetaProps = {
  category?: ICategory;
  tags?: ITag[];
  createdAt?: string;
};

export const PostMeta = ({ category, tags, createdAt }: PostMetaProps) => {
  return (
    <div>
      <ul>
        {tags?.map((tag) => (
          <li key={tag.id}>
            <span>{tag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
