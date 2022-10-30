import React, { ReactElement } from "react";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { getContents } from "@libs";
import { IBlog, ICategory, ITag } from "@types";
import { MIN_LIMIT } from "@libs";
import { BlogImage, Meta, PostCard } from "@components";
import Link from "next/link";
import { NextPageWithLayout } from "@pages/_app";
import { MainLayout } from "@layout/MainLayout";

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
