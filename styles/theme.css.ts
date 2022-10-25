import { createGlobalTheme } from "@vanilla-extract/css";
import { themeVars, rgb } from "./variables.css";

createGlobalTheme(".light", themeVars, {
  rgb: {
    bg: "249 249 249",
    brand: "27 25 25",
    glass: rgb.brand,
    primary: "14 154 53",
    secoundary: "19 170 190",
    thirdly: "248 197 18",
    error: "224 55 18",
    //grayScale
    fg1: rgb["text-gray-1"],
    fg2: rgb["text-gray-2"],
    fg3: rgb["text-gray-3"],
    fw: rgb["fw"],
    fb: rgb["fb"],
  },
});

createGlobalTheme(".dark", themeVars, {
  rgb: {
    bg: "27 25 25",
    brand: "249 249 249",
    glass: rgb.brand,
    primary: "26 217 79",
    secoundary: "69 178 225",
    thirdly: "249 207 58",
    error: "225 55 12",

    //grayScale
    fg1: rgb["text-gray-1"],
    fg2: rgb["text-gray-2"],
    fg3: rgb["text-gray-3"],
    fw: rgb["fw"],
    fb: rgb["fb"],
  },
});
