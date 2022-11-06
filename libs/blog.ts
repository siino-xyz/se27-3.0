import { config } from "@site.config";
import {
  IBlog,
  ICategory,
  ITag,
  MicroCMSImage,
  MicroCmsResponse,
  Queries,
} from "@types";
import { client } from "./client";

export const PARPAGE_LIMIT = parseInt(config.defaultLimit);
export const MIN_LIMIT = parseInt(config.defaultMinLimit);

export const getContents = async (
  currentPage: number = 1,
  articleFilter?: string,
  limit: number = PARPAGE_LIMIT
): Promise<{
  blogs: IBlog[];
  categories: ICategory[];
  tags: ITag[];
  pager?: number[];
}> => {
  const [{ blogs, pager }, category, tags] = await Promise.all([
    getBlogsByFliter(limit, currentPage, articleFilter),
    getCategories(),
    getTags(),
  ]);
  return {
    blogs: blogs.contents,
    categories: category.contents,
    tags: tags.contents,
    pager,
  };
};

//ブログ記事を取得
export const getBlogs = async (queries?: Queries) => {
  const res = await client.getList<IBlog>({
    endpoint: "blog",
    queries,
  });
  return res;
};

export const getAllBlogs = async () => {
  const res = await client.getList<IBlog>({
    endpoint: "blog",
    queries: { limit: config.defaultMaxLimit },
  });
  return res;
};

//ブログ記事のIDを取得
export const getBlogById = async (blogId: string) => {
  const res = await client.getListDetail<IBlog>({
    endpoint: "blog",
    contentId: blogId,
    queries: { depth: 2 },
  });
  return res;
};

export const getCategories = async (queries?: Queries) => {
  const res = await client.getList<ICategory>({
    endpoint: "category",
    queries,
  });
  return res;
};

export const getTags = async (): Promise<MicroCmsResponse<ITag>> => {
  const res = await client.get<MicroCmsResponse<ITag>>({
    endpoint: "tag",
    queries: { limit: 1000 },
  });
  return res;
};

export const getBlogsByFliter = async (
  limit: number,
  currentPage: number,
  articleFilter?: string
): Promise<{ blogs: MicroCmsResponse<IBlog>; pager: number[] }> => {
  const queries: Queries = {
    limit: limit,
    filters: articleFilter,
    offset: (currentPage - 1) * limit,
  };

  const blogs = await client.getList<IBlog>({
    endpoint: "blog",
    queries: queries,
  });
  const pager = [...Array(Math.ceil(blogs.totalCount / PARPAGE_LIMIT)).keys()];
  return { blogs, pager };
};
