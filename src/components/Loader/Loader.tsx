import { Box, CircularProgress } from "@mui/material";
import theme from "@/styles/muiTheme";

export const Loader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <CircularProgress sx={{ color: theme.palette.custom.blue }} />
  </Box>
);
