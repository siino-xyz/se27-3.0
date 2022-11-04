import { Pagination, PostCard } from "@components";
import { MainLayout } from "@layout/MainLayout";
import { getBlogs, getCategories, getContents, PARPAGE_LIMIT } from "@libs";
import { NextPageWithLayout } from "@pages/_app";
import { IBlog, ICategory, ITag } from "@types";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";

type CategoryPageProps = {
  blogs: IBlog[];
  categories: ICategory[];
  tags: ITag[];
  pager: [];
  currentPage: number;
  selectedCategory: ICategory;
};

const categoryPage: NextPageWithLayout<CategoryPageProps> = ({
  blogs,
  categories,
  tags,
  pager,
  currentPage,
  selectedCategory,
}) => {
  return (
    <div>
      <PostCard blogs={blogs} />
      <ul>
        {blogs.length > 0 && (
          <Pagination
            pagination={pager}
            currentPage={currentPage}
            selectedCategory={selectedCategory}
          />
        )}
      </ul>
    </div>
  );
};

categoryPage.getLayout = function getLayout(categoryPage: ReactElement) {
  return <MainLayout headerType={false}>{categoryPage}</MainLayout>;
};

export default categoryPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageNum: any = params?.pageNum || "1";
  const categoryId = params?.categoryId as string;
  const articleFilter =
    categoryId !== undefined ? `category[equals]${categoryId}` : undefined;
  const { blogs, tags, categories, pager } = await getContents(
    1,
    articleFilter,
    pageNum
  );
  const selectedCategory =
    categoryId !== undefined
      ? categories.find((content) => content.id === categoryId)
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
