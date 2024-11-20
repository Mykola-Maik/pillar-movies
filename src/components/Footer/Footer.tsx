import { Box, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.custom.blue,
        minHeight: "100px",
        color: theme.palette.common.white,
      }}
    >
      <Box>
        <Typography variant="body2">
          © {new Date().getFullYear()} Made by Mykola Maik
        </Typography>
      </Box>
    </Box>
  );
};
