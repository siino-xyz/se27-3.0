import { createClient } from "microcms-js-sdk";
import { config } from "../site.config";

export const client = createClient({
  serviceDomain: config.serviceDomain,
  apiKey: config.apiKey,
});
