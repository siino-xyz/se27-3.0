import { getBlogs, getCategories, getContents, PARPAGE_LIMIT } from "@libs";
import { IBlog, ICategory, ITag } from "@types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

type CategoryPageProps = {
  blogs: IBlog[];
  categories: ICategory[];
  tags: ITag[];
  pager: number;
  currentPage: number;
  selectedCategory: string;
};

const categoryPage: NextPage<CategoryPageProps> = ({
  blogs,
  categories,
  tags,
}) => {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h1>{blog.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default categoryPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageNum: any = params?.pageNum || "1";

  const categoryId = params?.categoryId as string;

  const articleFilter =
    categoryId !== undefined ? `category[equals]${categoryId}` : undefined;

  const { blogs, tags, categories, pager } = await getContents(
    pageNum,
    articleFilter
  );

  const selectedCategory =
    categoryId !== undefined
      ? categories.find((category) => category.id === categoryId)
      : undefined;

  return {
    props: {
      currentPage: parseInt(pageNum),
      blogs,
      categories,
      tags,
      pager,
      selectedCategory,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { contents: category } = await getCategories();
  const getPaths = await Promise.all(
    category.map((category) =>
      getBlogs({ filters: `category[equals]${category.id}`, limit: 1 }).then(
        ({ totalCount }) => {
          return [...Array(Math.ceil(totalCount / PARPAGE_LIMIT)).keys()].map(
            (num) => ({
              params: {
                pageNum: (num + 1).toString(),
                categoryId: category.id,
              },
            })
          );
        }
      )
    )
  );
  const paths = getPaths.flat();

  return {
    paths,
    fallback: false,
  };
};
