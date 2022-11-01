import { BlogImage, Meta, Options } from "@components";
import { MainLayout } from "@layout";
import { client, getBlogById, getContents } from "@libs";
import { NextPageWithLayout } from "@pages/_app";
import { IBlog, ICategory, ITag } from "@types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactElement } from "react";
import parse from "html-react-parser";
import { blogPageStyles } from "@styles";

type PostPageProps = {
  blogs: IBlog[];
  blog: IBlog;
  categories: ICategory[];
  tags: ITag[];
};

const postPage: NextPageWithLayout<PostPageProps> = ({ blog }) => {
  return (
    <div className={blogPageStyles.container}>
      <BlogImage src={blog.eyeCatch.url} alt={"alt"} />
      <div className={blogPageStyles.header}>
        <h1 className={blogPageStyles.title}>{blog.title}</h1>
        <Meta
          category={blog.category}
          tags={blog.tag}
          createdAt={blog.createdAt}
        />
      </div>
      <div className={blogPageStyles.textcontent}>
        {parse(blog.body, Options)}
      </div>
    </div>
  );
};

postPage.getLayout = function getLayout(postPage: ReactElement) {
  return <MainLayout maxWidth="blog">{postPage}</MainLayout>;
};

export default postPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { blogs, categories, tags } = await getContents();
  const id: any = params?.id;
  const blog = await getBlogById(id);

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
