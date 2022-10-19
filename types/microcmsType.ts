import { MicroCMSListContent,MicroCMSListResponse,MicroCMSObjectContent,MicroCMSQueries } from "microcms-js-sdk";

export type Queries = MicroCMSQueries;
export type ContentBase = MicroCMSListContent;

export type IBlog = {
  title: string;
  category?: ICategory;
  tag?:ITag;
} & ContentBase

export type ICategory = {
  categoryName: string;
} & ContentBase;

export type ITag = {
  tagName: string;
} & ContentBase;

export type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
}

// export type IDraftResponse = {
//   blog: IBlog;
//   body: string;
// }