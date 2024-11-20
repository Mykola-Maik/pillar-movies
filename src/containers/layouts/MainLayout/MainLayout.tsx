import { Footer, Header } from "@/components";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "@/styles/muiTheme";

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
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
          backgroundColor: theme.palette.common.white,
        }}
      >
        <Outlet />
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
