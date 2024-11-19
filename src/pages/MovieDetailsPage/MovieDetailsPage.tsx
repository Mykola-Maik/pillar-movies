import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieDetailsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return <Box>Movie details page</Box>;
}
