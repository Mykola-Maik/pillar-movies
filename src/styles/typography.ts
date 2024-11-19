import { TypographyOptions } from "@mui/material/styles/createTypography";
import { colors } from "@/styles/colors";

const fontWeightMapping = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const typography: TypographyOptions = {
  fontFamily: "Inter, Roboto, sans-serif",
  fontSize: 14,
  fontWeightLight: fontWeightMapping.light,
  fontWeightRegular: fontWeightMapping.normal,
  fontWeightMedium: fontWeightMapping.medium,
  fontWeightBold: fontWeightMapping.bold,

  h1: {
    fontSize: "72px",
    fontWeight: fontWeightMapping.normal,
    color: colors.mainBlack,
    lineHeight: "90px",
  },
  h2: {
    fontSize: "64px",
    fontWeight: fontWeightMapping.normal,
    color: colors.mainBlack,
    lineHeight: "76px",
  },
  h3: {
    fontSize: "40px",
    fontWeight: fontWeightMapping.normal,
    color: colors.mainBlack,
    lineHeight: "48px",
  },
  h4: {
    fontSize: "32px",
    fontWeight: fontWeightMapping.semiBold,
    color: colors.mainBlack,
    lineHeight: "38px",
  },
  h5: {
    fontSize: "24px",
    fontWeight: fontWeightMapping.normal,
    color: colors.mainBlack,
    lineHeight: "32px",
  },
  h6: {
    fontSize: "20px",
    fontWeight: fontWeightMapping.semiBold,
    color: colors.mainBlack,
    lineHeight: "28px",
  },
  subtitle1: {
    fontSize: "14px",
    fontWeight: fontWeightMapping.semiBold,
    lineHeight: "20px",
    color: colors.mainBlue,
  },
  subtitle2: {
    color: colors.mainSecondaryText,
    fontWeight: fontWeightMapping.semiBold,
    fontSize: "12px",
    lineHeight: "18px",
  },
};
