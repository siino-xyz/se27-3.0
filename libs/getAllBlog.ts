import axios from "axios";
import { config } from "@site.config";
import { IBlog, MicroCMSResponse } from "@types";

const apiroot: string = `https://${config.serviceDomain}.microcms.io/api/v1`;

export const getAllBlogs = async (): Promise<MicroCMSResponse<IBlog>> => {
  const res = await axios.get(
    `${apiroot}/blog?limit=${config.defaultMaxLimit}`,
    {
      headers: { "X-API-KEY": config.apiKey },
    }
  );
  return res.data;
};
