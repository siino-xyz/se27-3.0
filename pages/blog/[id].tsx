import { BlogImage, Meta } from "@components";
import { MainLayout } from "@layout/MainLayout";
import { client, getBlogById, getContents } from "@libs";
import { NextPageWithLayout } from "@pages/_app";
import { IBlog, ICategory, ITag } from "@types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactElement } from "react";
import { sanitizeHtml } from "@libs";

type PostPageProps = {
  blogs: IBlog[];
  sanitizedHtml: string;
  blog: IBlog;
  categories: ICategory[];
  tags: ITag[];
};

const postPage: NextPageWithLayout<PostPageProps> = ({
  blog,
  sanitizedHtml,
  categories,
  tags,
}) => {
  return (
    <div>
      <BlogImage src={blog.eyeCatch.url} alt={"alt"} />
      <h1>{blog.title}</h1>
      <Meta
        category={blog.category}
        tags={blog.tag}
        createdAt={blog.createdAt}
      />
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </div>
  );
};

postPage.getLayout = function getLayout(postPage: ReactElement) {
  return <MainLayout>{postPage}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { blogs, categories, tags } = await getContents();
  const id: any = params?.id;
  const blog = await getBlogById(id);
  const sanitizedHtml = sanitizeHtml(blog.body);
  return {
    props: {
      blogs,
      blog,
      sanitizedHtml,
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

export default postPage;
