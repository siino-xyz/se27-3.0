import { BlogImage } from "@components";
import { MainLayout } from "@layout/MainLayout";
import { client, getBlogById, getContents } from "@libs";
import { NextPageWithLayout } from "@pages/_app";
import { IBlog, ICategory, ITag } from "@types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ReactElement } from "react";
import { sanitizeHtml } from "@libs";

type PostPageProps = {
  blogs: IBlog[];
  sanitizedHtml: string;
  article: IBlog;
  categories: ICategory[];
  tags: ITag[];
};

const postPage: NextPageWithLayout<PostPageProps> = ({
  article,
  sanitizedHtml,
  categories,
  tags,
}) => {
  return (
    <div>
      <BlogImage src={article.eyeCatch.url} alt={"alt"} />
      <h1>{article.title}</h1>
      {/* <PostMeta tags={article.tag} /> */}
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
  const article = await getBlogById(id);
  const sanitizedHtml = sanitizeHtml(article.body);

  return {
    props: {
      blogs,
      article,
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
