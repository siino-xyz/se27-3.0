import React, { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getBlogsByFliter, getContents, PARPAGE_LIMIT } from "@libs";
import { IBlog } from "@types";
import { Pagination, PostCard } from "@components";
import { NextPageWithLayout } from "@pages/_app";
import { MainLayout } from "@layout/MainLayout";
import { contentMaxWidth, sprinkles } from "@styles";
import classNames from "classnames";

type BlogIndexPageProps = {
  blogs: IBlog[];
  pager: [];
  currentPage: number;
};

type Heading2Props = {
  text: string;
};
const Heading2 = ({ text }: Heading2Props) => {
  return (
    <h2
      className={sprinkles({
        fontSize: { mobile: "3xl", tablet: "4xl", desktop: "4xl" },
        fontFamily: "emblem",
        marginBottom: "large",
        marginTop: "xlarge",
      })}
    >
      {text}
    </h2>
  );
};

const blogIndexPage: NextPageWithLayout<BlogIndexPageProps> = ({
  blogs,
  pager,
  currentPage,
}) => {
  return (
    <div
      className={classNames(
        contentMaxWidth({
          maxWidth: "blog",
        }),
        sprinkles({
          paddingX: { mobile: "small", tablet: "medium", desktop: "none" },
        })
      )}
    >
      <Heading2 text="新着記事" />
      <PostCard blogs={blogs} />
      <ul>
        {blogs.length > 0 && (
          <Pagination pagination={pager} currentPage={currentPage} />
        )}
      </ul>
    </div>
  );
};

blogIndexPage.getLayout = function getLayout(blogIndexPage: ReactElement) {
  return <MainLayout headerType={false}>{blogIndexPage}</MainLayout>;
};

export default blogIndexPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page: any = params?.blogIndex || "1";
  const { blogs, categories, tags, pager } = await getContents(page);
  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      categories,
      tags,
      pager,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { pager } = await getBlogsByFliter(PARPAGE_LIMIT, 1);
  const paths = pager.map((page) => {
    return { params: { blogIndex: (page + 1).toString() } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
