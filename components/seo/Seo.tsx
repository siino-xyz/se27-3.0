import { config } from "@site.config";
import Head from "next/head";

export type HeadType = {
  pagetitle?: string;
  pagedescription?: string;
  pagepath?: string;
  pageimg?: string;
  postimg?: string;
  pageimgw?: string;
  pageimgh?: string;
  keyword?: string;
};

export const Seo = ({
  pagetitle,
  pagedescription,
  pagepath,
  keyword,
  pageimg,
  postimg,
}: HeadType) => {
  const title = pagetitle
    ? `${pagetitle} | ${config.siteMeta.globalTitle}`
    : `${config.siteMeta.globalTitle}`;
  const description = pagedescription
    ? `${pagedescription} | ${config.siteMeta.globalDescription}`
    : `${config.siteMeta.globalDescription}`;
  const url = pagepath
    ? `${pagepath} | ${config.baseUrl}`
    : `${config.baseUrl}`;

  return (
    <Head>
      <html lang="ja" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keyword || title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
    </Head>
  );
};
