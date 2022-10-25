import React from "react";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { getContents } from "@libs";
import { IBlog, ICategory, ITag } from "@types";
import { MIN_LIMIT } from "@libs";

export const getStaticProps: GetStaticProps = async () => {
  const { blogs, tags, categories, pager } = await getContents(MIN_LIMIT);
  return {
    props: {
      blogs,
    },
  };
};

type BlogIndexPageProps = {
  blogs: IBlog[];
};

const blogIndexPage: NextPage<BlogIndexPageProps> = ({ blogs }) => {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blogIndexPage;
