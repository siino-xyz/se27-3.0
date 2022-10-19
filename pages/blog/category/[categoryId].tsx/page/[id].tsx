import React from "react";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { getBlogs, getCategories, getContents } from "@libs";
import { IBlog, ICategory, ITag } from "@types";

type CategoryPageProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  tags: ITag[];
  pager?: [];
  selectedCategory: ICategory;
};

const categoryPage: NextPage<CategoryPageProps> = ({
  currentPage,
  blogs,
  categories,
  tags,
  selectedCategory,
}) => {
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

export default categoryPage;

// export const getAllCategoryPagePaths = async() => {
//   const { contents: category } = await getCategories();

//   const paths = await Promise.all(
//     category.map((category) => {
//       getBlogs({ filters: `category[equals]${category.id}` , limit: 1}).then({  });
//     })
//   )
// }

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const page: any = context.params?.id || "1";
  const categoryId = context.params?.categoryId;
  const articleFilter =
    categoryId !== undefined ? `category[equals]${categoryId}` : undefined;

  const { blogs, categories, tags, pager } = await getContents(
    page,
    articleFilter
  );

  const selectedCategory =
    categoryId !== undefined
      ? categories.find((content) => content.id === categoryId)
      : undefined;

  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      categories,
      tags,
      pager,
      selectedCategory,
    },
  };
};
