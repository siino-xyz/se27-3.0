import { createGlobalTheme } from "@vanilla-extract/css";
import { themeVars, rgb } from "./variables.css";

createGlobalTheme(".light", themeVars, {
  rgb: {
    bg: rgb["white"],
    brand: rgb["black"],
    glass: rgb.brand,
    primary: "14 154 53",
    secoundary: "19 170 190",
    thirdly: "248 197 18",
    error: "224 55 18",
    //grayScale
    fg1: rgb["gray1"],
    fg2: rgb["gray2"],
    fg3: rgb["gray3"],
  },
});

createGlobalTheme(".dark", themeVars, {
  rgb: {
    bg: rgb["black"],
    brand: rgb["white"],
    glass: rgb.brand,
    primary: "26 217 79",
    secoundary: "69 178 225",
    thirdly: "249 207 58",
    error: "225 55 12",

    //grayScale
    fg1: rgb["gray1"],
    fg2: rgb["gray2"],
    fg3: rgb["gray3"],
  },
});
