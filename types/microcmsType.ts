import {
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSObjectContent,
  MicroCMSQueries,
} from "microcms-js-sdk";

export type Queries = MicroCMSQueries;
export type ContentBase = MicroCMSListContent;

export type HeadingTypes = {
  text: string | null;
  id: string;
  name: string;
};

export type IBlog = {
  title: string;
  category?: ICategory;
  headingVisible?: boolean;
  tag?: ITag[];
  body: string;
  eyeCatch: MicroCMSImage;
} & ContentBase;

export type ICategory = {
  name: string;
} & ContentBase;

export type ITag = {
  name?: string;
} & ContentBase;

export type MicroCMSImage = {
  url: string;
  height?: number;
  width?: number;
};

export type MicroCmsResponse<T> = MicroCMSListResponse<T>;

// export type IDraftResponse = {
//   blog: IBlog;
//   body: string;
// }
