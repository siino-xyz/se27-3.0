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
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <BlogImage src={blog.eyeCatch.url} alt={"alt"} />
          </Link>
          <h2>{blog.title}</h2>
          <Meta
            category={blog.category}
            tags={blog.tag}
            createdAt={blog.createdAt}
          />
        </li>
      ))}
    </ul>
  );
};
