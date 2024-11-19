import { Footer, Header } from "@/components";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "@/styles/muiTheme";

export default function MainLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: "10px 15px",
          backgroundColor: theme.palette.common.white,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
