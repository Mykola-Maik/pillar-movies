import { createTheme, PaletteOptions, Theme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { typography } from "@/styles/typography";
import { palette } from "@/styles/palette";

const muiTheme: Theme = createTheme({
  typography: typography as TypographyOptions,
  palette: palette as PaletteOptions,
  components: {},
});

export default muiTheme;
