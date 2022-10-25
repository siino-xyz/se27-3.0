import { BlogImage } from "@components";
import { client, getBlogById, getContents } from "@libs";
import { IBlog } from "@types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { blogs } = await getContents();
  const id: any = params?.id;
  const article = await getBlogById(id);

  return {
    props: {
      blogs,
      article,
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

type PostPageProps = {
  blogs: IBlog[];
  article: IBlog;
};

const postPage: NextPage<PostPageProps> = ({ article, blogs }) => {
  return (
    <div>
      <BlogImage src={article.eyeCatch.url} alt={"alt"} />
      <h1>{article.title}</h1>
    </div>
  );
};

export default postPage;
