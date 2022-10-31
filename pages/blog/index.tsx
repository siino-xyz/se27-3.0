import React, { ReactElement } from "react";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { getContents } from "@libs";
import { IBlog } from "@types";
import { MIN_LIMIT } from "@libs";
import { PostCard } from "@components";
import { NextPageWithLayout } from "@pages/_app";
import { MainLayout } from "@layout/mainLayout";

type BlogIndexPageProps = {
  blogs: IBlog[];
};

const blogIndexPage: NextPageWithLayout<BlogIndexPageProps> = ({ blogs }) => {
  return (
    <div>
      <PostCard blogs={blogs} />
    </div>
  );
};

blogIndexPage.getLayout = function getLayout(blogIndexPage: ReactElement) {
  return <MainLayout>{blogIndexPage}</MainLayout>;
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
