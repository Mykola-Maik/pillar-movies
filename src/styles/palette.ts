import { PaletteOptions } from "@mui/material/styles/createPalette";
import { colors } from "@/styles/colors";

export const palette: PaletteOptions = {
  common: {
    black: colors.mainBlack,
    white: colors.mainWhite,
  },
  primary: {
    main: colors.mainBlue,
  },
  error: {
    main: colors.mainError,
  },
  info: {
    main: colors.buttonDisabled,
  },
  text: {
    primary: colors.mainBlack,
    secondary: colors.mainSecondaryText,
    disabled: colors.buttonDisabled,
  },
  action: {
    active: colors.buttonActive,
    disabled: colors.buttonDisabled,
    disabledBackground: colors.mainBackground,
  },
  background: {
    default: colors.mainBackground,
    paper: colors.mainWhite,
  },
  custom: {},
};
