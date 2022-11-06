import { TermLink } from "@components/termlink/TermLink";
import { Time } from "@components/time/Time";
import { ICategory, ITag } from "@types";
import classNames from "classnames";
import dayjs from "dayjs";
import { styles } from "./Meta.css";

type PostMetaProps = {
  category?: ICategory;
  tags?: ITag[];
  createdAt?: string;
  isDetail?: boolean;
};

const Tags = ({ tags }: PostMetaProps) => {
  return (
    <>
      {tags == undefined ? (
        <span className={styles.errortext}>タグ未指定</span>
      ) : (
        <ul className={styles.tags}>
          {tags?.map((tag, index) => (
            <li key={tag.id}>
              <TermLink
                hashTag={true}
                href={`/blog/tags/${tag.id}/page/1`}
                background="primary"
                colour="reverse"
                content={tag?.name}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const Category = ({ category }: PostMetaProps) => {
  return (
    <>
      {category == undefined ? (
        <span className={styles.errortext}>{"[カテゴリ未指定]"}</span>
      ) : (
        <TermLink
          hashTag={false}
          href={`/blog/category/${category?.id}/page/1`}
          background="secoudary"
          colour="reverse"
          content={category?.name}
        />
      )}
    </>
  );
};

export const Meta = ({
  createdAt,
  isDetail,
  category,
  tags,
}: PostMetaProps) => {
  const dateFormat = dayjs(createdAt).locale("ja").format("YYYY/MM/DD");

  return (
    <>
      {isDetail ? (
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <span className={styles.label}>Category:</span>
            <Category category={category} />
          </div>
          <div className={styles.contentWrapper}>
            <span className={styles.label}>Tags:</span>
            <Tags tags={tags} />
          </div>
          <div className={styles.contentWrapper}>
            <span className={styles.label}>Posted on:</span>
            <Time dateTime={createdAt} className={styles.date}>
              {dateFormat}
            </Time>
          </div>
        </div>
      ) : (
        <div className={styles.withcard}>
          <div className={styles.terms}>
            <Category category={category} />
            <Tags tags={tags} />
          </div>
          <div className={styles.datewrapper}>
            <Time
              dateTime={createdAt}
              className={classNames(styles.date, styles.dateforCard)}
            >
              {dateFormat}
            </Time>
          </div>
        </div>
      )}
    </>
  );
};
