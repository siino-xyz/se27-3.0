export const config = {
  defaultLimit: "10",
  defaultMinLimit: "6",
  defaultMaxLimit: 50,
  apiKey: process.env.MICROCMS_APIKEY ?? "",
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
  siteMeta: {
    globalTitle: process.env.NEXT_PUBLIC_TITLE ?? "se-27",
    globalDescription: "webサイト作ったりデザインしたりしてます",
    url: process.env.NEXT_PUBLIC_URL ?? "",
  },
};
