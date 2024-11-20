import MainLayout from "@/containers/layouts/MainLayout/MainLayout";
import { Box } from "@mui/material";

export default function NotFoundPage() {
  return (
    <MainLayout>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        404 Not Found
      </Box>
    </MainLayout>
  );
}
