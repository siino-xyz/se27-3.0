export const config = {
  defaultLimit: "10",
  defaultMinLimit: "6",
  defaultMaxLimit: 50,
  apiKey: process.env.MICROCMS_APIKEY ?? "",
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
};
