import { BlogImage } from "@components/blogImage/BlogImage";
import { Meta } from "@components/meta/Meta";
import { IBlog } from "@types";
import Link from "next/link";
import { styles } from "./PostCard.css";

type PostCardType = {
  blogs: IBlog[];
};

export const PostCard = ({ blogs }: PostCardType) => {
  return (
    <ul className={styles.cards}>
      {blogs.map((blog) => (
        <li className={styles.card} key={blog.id}>
          <Link href={`/blog/${blog.id}`} className={styles.imageWrapper}>
            <BlogImage radius="none" src={blog.eyeCatch.url} alt={"alt"} />
          </Link>
          <Link href={`/blog/${blog.id}`}>
            <h2 className={styles.title}>{blog.title}</h2>
          </Link>
          <Meta
            isDetail={false}
            category={blog.category}
            tags={blog.tag}
            createdAt={blog.createdAt}
          />
        </li>
      ))}
    </ul>
  );
};
