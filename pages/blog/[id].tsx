import { BlogImage, Meta, Options } from "@components";
import { MainLayout } from "@layout";
import { client, getBlogById, getContents } from "@libs";
import { NextPageWithLayout } from "@pages/_app";
import { IBlog, ICategory, ITag } from "@types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactElement } from "react";
import { styles } from "../../styles/pages/blog/article.css";
import parse from "html-react-parser";

type PostPageProps = {
  blogs: IBlog[];
  blog: IBlog;
  categories: ICategory[];
  tags: ITag[];
};

const postPage: NextPageWithLayout<PostPageProps> = ({
  blog,
  categories,
  tags,
}) => {
  return (
    <div>
      <BlogImage src={blog.eyeCatch.url} alt={"alt"} />
      <div>
        <h1 className={styles.blogTitle}>{blog.title}</h1>
        <Meta
          category={blog.category}
          tags={blog.tag}
          createdAt={blog.createdAt}
        />
      </div>
      <div>{parse(blog.body, Options)}</div>
    </div>
  );
};

postPage.getLayout = function getLayout(postPage: ReactElement) {
  return <MainLayout>{postPage}</MainLayout>;
};

export default postPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { blogs, categories, tags } = await getContents();
  const id: any = params?.id;
  const blog = await getBlogById(id);
  // const sanitizedHtml = sanitizeHtml(blog.body);

  return {
    props: {
      blogs,
      blog,
      categories,
      tags,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};
