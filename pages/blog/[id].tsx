import { BlogImage, Meta, Options, ShareIcons } from "@components";
import { MainLayout } from "@layout";
import { client, getBlogById, getContents } from "@libs";
import { NextPageWithLayout } from "@pages/_app";
import { IBlog, ICategory, ITag } from "@types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactElement } from "react";
import parse from "html-react-parser";
import { blogPageStyles, contentMaxWidth } from "@styles";
const cheerio = require("cheerio");
import hljs from "highlight.js";
import "highlight.js/styles/base16/black-metal.css";
import classNames from "classnames";

type PostPageProps = {
  blogs: IBlog[];
  blog: IBlog;
  categories: ICategory[];
  tags: ITag[];
  highlightedBody: string;
};

const postPage: NextPageWithLayout<PostPageProps> = ({
  blog,
  highlightedBody,
}) => {
  const shareUrl = `http://localhost:3000/blog/${blog.id}`;
  const shareTitle = `${blog.title}`;

  return (
    <div
      className={classNames(
        blogPageStyles.container,
        contentMaxWidth({
          maxWidth: "blog",
        })
      )}
    >
      {/* <BlogImage src={blog.eyeCatch.url} alt={"alt"} /> */}
      <div className={blogPageStyles.header}>
        <h1 className={blogPageStyles.title}>{blog.title}</h1>
        <Meta
          isDetail={true}
          category={blog.category}
          tags={blog.tag}
          createdAt={blog.createdAt}
        />
      </div>
      <div className={blogPageStyles.contentContainer}>
        <div className={blogPageStyles.textcontent}>
          {parse(highlightedBody, Options)}
        </div>
        <ShareIcons url={shareUrl} title={shareTitle} />
      </div>
    </div>
  );
};

postPage.getLayout = function getLayout(postPage: ReactElement) {
  return <MainLayout headerType={false}>{postPage}</MainLayout>;
};

export default postPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { blogs, categories, tags } = await getContents();
  const id: any = params?.id;
  const blog = await getBlogById(id);
  const $ = cheerio.load(blog.body);

  $("pre code").each((_: Number, elm: any) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
    $(elm).addClass(blogPageStyles.codeBlock);
  });

  return {
    props: {
      blogs,
      blog,
      categories,
      tags,
      highlightedBody: $("body").html(),
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
