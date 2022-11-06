import { getAllBlogsFortSitemap } from "./sitemap-getblog";
import { config } from "../site.config";
import dayjs from "dayjs";

export async function generateSitemapXml(): Promise<string> {
  let xml: string = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const blogs = await getAllBlogsFortSitemap();
  dayjs().locale("ja").format("YYYY/MM/DD");
  blogs.contents.forEach((blog) => {
    xml += `<url>
        <loc>${config.baseUrl}/${blog.id}</loc>
        <lastmod>${dayjs(blog.createdAt)
          .locale("ja")
          .format("YYYY/MM/DD")}</lastmod>
      </url>`;
  });

  return (xml += `</urlset>`);
}
