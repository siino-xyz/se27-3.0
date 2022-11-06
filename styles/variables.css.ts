import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};
export type Breakpoint = keyof typeof breakpoints;

export const grid: number = 4;
const px = (value: string | number) => `${value}px`;

export const globalVars = createGlobalTheme(":root", {
  fonts: {
    initial:
      'Zen Kaku Gothic Antique, "Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif',
    heading:
      'Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif',
    emblem:
      '"kiChoJIS",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif',
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  rgb: {
    gray1: "211 207 207",
    gray2: "175 171 171",
    gray3: "124 123 123",
    black: "27 25 25",
    white: "238 238 238",
  },
  grid: px(grid),
  space: {
    none: "0",
    smallest: px(2),
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

  zIndex: {
    auto: "auto",
    "-1": "-1",
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
  },
  borderRadius: {
    none: "0",
    xxs: "0.07rem",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  borderWidths: { 0: "0", 1: "1px", 2: "2px", 4: "4px", 8: "8px" },
  transitions: {
    initial: "all .3s ease",
  },
});

export const themeVars = createThemeContract({
  rgb: {
    bg: null,
    brand: null,
    glassBg: null,
    error: null,
    primary: null,
    secoundary: null,
    thirdly: null,
    fg1: null,
    fg2: null,
    fg3: null,
    twitter: null,
  },
});

export const rgb = { ...globalVars.rgb, ...themeVars.rgb };
export const {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
  contentWidth,
  zIndex,
  borderRadius,
  borderWidths,
  transitions,
} = globalVars;
