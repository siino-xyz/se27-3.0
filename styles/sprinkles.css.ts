import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
  createNormalizeValueFn,
  ConditionalValue,
} from "@vanilla-extract/sprinkles";
import { calc } from "@vanilla-extract/css-utils";
import { breakpoints, transitions } from "./variables.css";
import {
  space,
  contentWidth,
  zIndex,
  borderRadius,
  borderWidths,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  fonts,
} from "./variables.css";

export type Space = keyof typeof space;

const negativeSpace = {
  ["-xsmall"]: `${calc(space.xsmall).negate()}`,
  ["-small"]: `${calc(space.small).negate()}`,
  ["-medium"]: `${calc(space.medium).negate()}`,
  ["-large"]: `${calc(space.large).negate()}`,
  ["-xlarge"]: `${calc(space.xlarge).negate()}`,
  ["-xxlarge"]: `${calc(space.xxlarge).negate()}`,
  ["-xxxlarge"]: `${calc(space.xxxlarge).negate()}`,
};

const margins = {
  ...space,
  ...negativeSpace,
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": `screen and (min-width: ${breakpoints.tablet}px)` },
    desktop: { "@media": `screen and (min-width: ${breakpoints.desktop}px)` },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],
  properties: {
    position: ["absolute", "relative", "fixed", "sticky"],
    display: ["none", "block", "inline", "inline-block", "flex", "grid"],
    alignItems: ["flex-start", "center", "flex-end", "baseline", "stretch"],
    justifyContent: ["flex-start", "center", "flex-end", "space-between"],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: margins,
    marginBottom: margins,
    marginLeft: margins,
    marginRight: margins,
    maxWidth: contentWidth,
    width: contentWidth,
    height: contentWidth,
    gap: space,
    borderRadius: borderRadius,
    borderWidth: borderWidths,
    fontSize: fontSizes,
    lineHeight: lineHeights,
    letterSpacing: letterSpacings,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
export const normalizeResponsiveValue =
  createNormalizeValueFn(responsiveProperties);

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

export const light = "light";
export const dark = "dark";

const colorProperties = defineProperties({
  conditions: {
    light: { selector: `.${light} &` },
    dark: { selector: `.${dark} &` },
  },
  defaultCondition: "light",
  properties: {},
});

const unresponsiveProperties = defineProperties({
  properties: {
    flexWrap: ["wrap", "nowrap"],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    zIndex: zIndex,
    textAlign: ["left", "center", "right"],
    listStyle: ["inside", "square", "none", "disc", "circle", "cjk-decimal"],
    listStyleType: ["none"],
    textDecoration: ["none"],
    borderStyle: ["solid", "dashed", "none"],
    cursor: ["pointer"],
    transition: transitions,
    fontWeight: fontWeights,
    fontFamily: fonts,
  },
  shorthands: {
    inset: ["top", "bottom", "left", "right"],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  colorProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
