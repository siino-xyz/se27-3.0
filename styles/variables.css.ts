import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const breakpoints = {
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
  motionSafe: "(prefers-reduced-motion: no-preference)",
  retina: "(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)",
};

const grid = 4;
const px = (value: string | number) => `${value}px`;

export const globalVars = createGlobalTheme(":root", {
  rgb: {
    "text-black": "27 25 25",
    "text-white": "249 249 249",
    "text-gray-1": "211 207 207",
    "text-gray-2": "175 171 171",
    "text-gray-3": "124 123 123",
  },
  grid: px(grid),
  space: {
    none: "0",
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: px(3 * grid),
    large: px(5 * grid),
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(24 * grid),
    auto: "auto",
  },
  contentWidth: {
    xsmall: px(480),
    small: px(600),
    standard: px(740),
    large: px(960),
    xlarge: px(1120),
    xxlarge: px(1350),
    full: "100%",
    screenHeight: "100vh",
  },
  contentHeight: {
    fullVh: "100vh",
    full: "100%",
    inher: "inherit",
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: px(3 * grid),
    large: px(5 * grid),
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(24 * grid),
  },
  fonts: {
    initial:
      'Zen Kaku Gothic Antique, "Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif',
    kiChoJIS:
      '"kiChoJIS",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif',
    MOBO: '"MOBO",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif',
  },
  zIndex: {
    auto: "auto",
    "-1": "-1",
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
  },
  borderRadius: {},
  borderWidths: {},
});

export const themeVars = createThemeContract({
  rgb: {
    bg: null,
    brand: null,
    glass: null,
    error: null,
    primary: null,
    secoundary: null,
    thirdly: null,
    fg1: null,
    fg2: null,
    fg3: null,
    fw: null,
    fb: null,
  },
});

export const rgb = { ...globalVars.rgb, ...themeVars.rgb };
export const {
  space,
  contentWidth,
  fonts,
  zIndex,
  borderRadius,
  borderWidths,
} = globalVars;
