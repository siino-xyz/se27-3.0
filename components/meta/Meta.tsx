import { Tag } from "@components/tag/Tag";
import { ICategory, ITag } from "@types";
import dayjs from "dayjs";
import Link from "next/link";
import { styles } from "./Meta.css";

type PostMetaProps = {
  category?: ICategory;
  tags?: ITag[];
  createdAt?: string;
};

export const Meta = ({ category, tags, createdAt }: PostMetaProps) => {
  const dateFormat = dayjs(createdAt).locale("ja").format("YYYY/MM/DD");

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <span className={styles.label}>Category:</span>
        <Link href={`/blog/category/${category?.id}/page/1`}>
          <Tag bg="category" colour="reverse" content={category?.name} />
        </Link>
      </div>

      <div className={styles.contentWrapper}>
        <span className={styles.label}>Tags:</span>
        <ul className={styles.tags}>
          {tags?.map((tag, index) => (
            <li key={index}>
              <Link href={`/blog/tags/${tag.id}/page/1`}>
                <Tag bg="tags" content={tag?.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contentWrapper}>
        <span className={styles.label}>Posted:</span>
        <span className={styles.date}>{dateFormat}</span>
      </div>
    </div>
  );
};
