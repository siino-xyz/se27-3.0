import { Pagination, PostCard } from "@components";
import { MainLayout } from "@layout/MainLayout";
import { getBlogs, getContents, getTags, PARPAGE_LIMIT } from "@libs";
import { NextPageWithLayout } from "@pages/_app";
import { IBlog, ICategory, ITag } from "@types";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";

type TagPageProps = {
  blogs: IBlog[];
  categories: ICategory[];
  tags: ITag[];
  pager: [];
  currentPage: number;
  selectedTag: ITag;
};

const tagIndex: NextPageWithLayout<TagPageProps> = ({
  blogs,
  categories,
  tags,
  pager,
  currentPage,
  selectedTag,
}) => {
  return (
    <div>
      <PostCard blogs={blogs} />
      <ul>
        {blogs.length > 0 && (
          <Pagination
            pagination={pager}
            currentPage={currentPage}
            selectedTag={selectedTag}
          />
        )}
      </ul>
    </div>
  );
};

tagIndex.getLayout = function getLayout(tagIndex: ReactElement) {
  return <MainLayout headerType={false}>{tagIndex}</MainLayout>;
};

export default tagIndex;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageNum: any = params?.pageNum || "1";
  const tagId = params?.tagId as string;
  const articleFilter =
    tagId !== undefined ? `tag[contains]${tagId}` : undefined;
  const { blogs, tags, categories, pager } = await getContents(
    pageNum,
    articleFilter,
    1
  );
  const selectedTag =
    tagId !== undefined
      ? tags.find((content) => content.id === tagId)
      : undefined;

  return {
    props: {
      currentPage: parseInt(pageNum),
      blogs,
      categories,
      tags,
      pager,
      selectedTag,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { contents: tag } = await getTags();
  const getPaths = await Promise.all(
    tag.map((tag) =>
      getBlogs({ filters: `tag[contains]${tag.id}`, limit: 1 }).then(
        ({ totalCount }) => {
          return [...Array(Math.ceil(totalCount / PARPAGE_LIMIT)).keys()].map(
            (num) => ({
              params: {
                pageNum: (num + 1).toString(),
                tagId: tag.id,
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
