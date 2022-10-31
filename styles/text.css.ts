import { createGlobalTheme } from "@vanilla-extract/css";
import { Breakpoint } from "./variables.css";
import { createTextStyle, precomputeValues } from "@capsizecss/vanilla-extract";
import { grid } from "./variables.css";

const fontMetrics = {
  initial: {
    capHeight: 1443,
    ascent: 1950,
    descent: -494,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  heading: {
    capHeight: 1100,
    ascent: 1000,
    descent: -10,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  emblem: {
    capHeight: 700,
    ascent: 1060,
    descent: -320,
    lineGap: 0,
    unitsPerEm: 1000,
  },
};

const calculateTypographyStyles = (
  definition: Record<Breakpoint, { fontSize: number; rows: number }>,
  type: keyof typeof fontMetrics
) => {
  const mobile = precomputeValues({
    fontSize: definition.mobile.fontSize,
    leading: definition.mobile.rows * grid,
    fontMetrics: fontMetrics[type],
  });
  const tablet = precomputeValues({
    fontSize: definition.tablet.fontSize,
    leading: definition.tablet.rows * grid,
    fontMetrics: fontMetrics[type],
  });
  const desktop = precomputeValues({
    fontSize: definition.desktop.fontSize,
    leading: definition.desktop.rows * grid,
    fontMetrics: fontMetrics[type],
  });

  return {
    mobile: {
      fontSize: mobile.fontSize,
      lineHeight: mobile.lineHeight,
      capHeightTrim: mobile.capHeightTrim,
      baselineTrim: mobile.baselineTrim,
    },
    tablet: {
      fontSize: tablet.fontSize,
      lineHeight: tablet.lineHeight,
      capHeightTrim: tablet.capHeightTrim,
      baselineTrim: tablet.baselineTrim,
    },
    desktop: {
      fontSize: desktop.fontSize,
      lineHeight: desktop.lineHeight,
      capHeightTrim: desktop.capHeightTrim,
      baselineTrim: desktop.baselineTrim,
    },
  };
};

export const vars = createGlobalTheme(":root", {
  heading: {
    h1: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 32,
          rows: 10,
        },
        tablet: {
          fontSize: 36,
          rows: 11,
        },
        desktop: {
          fontSize: 48,
          rows: 13,
        },
      },
      "heading"
    ),
    h2: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 26,
          rows: 9,
        },
        tablet: {
          fontSize: 32,
          rows: 10,
        },
        desktop: {
          fontSize: 36,
          rows: 11,
        },
      },
      "heading"
    ),
    h3: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 24,
          rows: 8,
        },
        tablet: {
          fontSize: 30,
          rows: 10,
        },
        desktop: {
          fontSize: 30,
          rows: 10,
        },
      },
      "heading"
    ),
    h4: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 22,
          rows: 8,
        },
        tablet: {
          fontSize: 22,
          rows: 9,
        },
        desktop: {
          fontSize: 22,
          rows: 9,
        },
      },
      "heading"
    ),
  },
  text: {
    body: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 15,
          rows: 9,
        },
        tablet: {
          fontSize: 16,
          rows: 10,
        },
        desktop: {
          fontSize: 16,
          rows: 10,
        },
      },
      "initial"
    ),
    code: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 14,
          rows: 6,
        },
        tablet: {
          fontSize: 15,
          rows: 7,
        },
        desktop: {
          fontSize: 15,
          rows: 7,
        },
      },
      "initial"
    ),
    small: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 12,
          rows: 6,
        },
        tablet: {
          fontSize: 14,
          rows: 7,
        },
        desktop: {
          fontSize: 14,
          rows: 7,
        },
      },
      "initial"
    ),
  },
});

const text = createTextStyle(vars.text.body.mobile, {
  "@media": {
    "screen and (min-width: 768px)": vars.text.body.tablet,
    "screen and (min-width: 1024px)": vars.text.body.desktop,
  },
});
const code = createTextStyle(vars.text.code.mobile, {
  "@media": {
    "screen and (min-width: 768px)": vars.text.code.tablet,
    "screen and (min-width: 1024px)": vars.text.code.desktop,
  },
});
const small = createTextStyle(vars.text.small.mobile, {
  "@media": {
    "screen and (min-width: 768px)": vars.text.small.tablet,
    "screen and (min-width: 1024px)": vars.text.small.desktop,
  },
});
const heading_largest = createTextStyle(vars.heading.h1.mobile, {
  "@media": {
    "screen and (min-width: 768px)": vars.heading.h1.tablet,
    "screen and (min-width: 1024px)": vars.heading.h1.desktop,
  },
});
const heading_large = createTextStyle(vars.heading.h2.mobile, {
  "@media": {
    "screen and (min-width: 768px)": vars.heading.h2.tablet,
    "screen and (min-width: 1024px)": vars.heading.h2.desktop,
  },
});
const heading_medium = createTextStyle(vars.heading.h3.mobile, {
  "@media": {
    "screen and (min-width: 768px)": vars.heading.h3.tablet,
    "screen and (min-width: 1024px)": vars.heading.h3.desktop,
  },
});
const heading_small = createTextStyle(vars.heading.h4.mobile, {
  "@media": {
    "screen and (min-width: 768px)": vars.heading.h4.tablet,
    "screen and (min-width: 1024px)": vars.heading.h4.desktop,
  },
});

// export {
//   text,
//   code,
//   small,
//   heading_largest,
//   heading_large,
//   heading_small,
//   heading_medium,
// };
