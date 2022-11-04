import React, { ReactElement, ReactNode } from "react";
import { GetStaticProps } from "next";
import { getContents } from "@libs";
import { IBlog } from "@types";
import { MIN_LIMIT } from "@libs";
import { PostCard } from "@components";
import { NextPageWithLayout } from "@pages/_app";
import { MainLayout } from "@layout/MainLayout";
import { contentMaxWidth, sprinkles } from "@styles";
import classNames from "classnames";

type BlogIndexPageProps = {
  blogs: IBlog[];
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

const blogIndexPage: NextPageWithLayout<BlogIndexPageProps> = ({ blogs }) => {
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
      <Heading2 text="記事一覧" />
      <PostCard blogs={blogs} />
    </div>
  );
};

blogIndexPage.getLayout = function getLayout(blogIndexPage: ReactElement) {
  return <MainLayout headerType={false}>{blogIndexPage}</MainLayout>;
};

export default blogIndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const { blogs, tags, categories, pager } = await getContents(MIN_LIMIT);
  return {
    props: {
      blogs,
    },
  };
};
