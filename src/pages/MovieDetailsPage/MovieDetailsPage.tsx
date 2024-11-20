import { Loader } from "@/components";
import { BackdropSizes, PosterSizes } from "@/enums";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getMovieDetailsRequest } from "@/redux/slices/currentMovieSlice/currentMovieSlice";
import { removeFromFavorites } from "@/redux/slices/movieSlice/movieSlice";
import { getPosterUrl } from "@/utils";
import { Favorite } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import theme from "@/styles/muiTheme";
import { format } from "date-fns";

export default function MovieDetailsPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const favorites = useAppSelector((state) => state.movieSlice.favorites);
  const { isLoading, currentMovie } = useAppSelector(
    (state) => state.currentMovieSlice
  );

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetailsRequest(Number(id)));
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  if (isLoading || !currentMovie) {
    return <Loader />;
  }

  const isAdded = favorites.some((fav) => fav.id === currentMovie.id);
  const formattedRevenue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(currentMovie.revenue);
  const formattedBudget = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(currentMovie.budget);

  const handleRemoveFavorite = () => {
    dispatch(removeFromFavorites(currentMovie.id));
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
      }}
    >
      <Box
        sx={{
          position: "relative",
          color: theme.palette.common.white,
          backgroundImage: `url(${getPosterUrl(
            BackdropSizes.ORIGINAL,
            currentMovie.backdrop_path
          )})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              gap: "20px",
              zIndex: 2,
              padding: "30px 40px",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={getPosterUrl(PosterSizes.W342, currentMovie.poster_path)}
            />
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    mr: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      height: "40px",
                      color: theme.palette.common.white,
                      mr: 1,
                    }}
                  >
                    {currentMovie.title}
                  </Typography>
                  <Typography
                    component="span"
                    variant="h5"
                    sx={{ color: "gray" }}
                  >
                    ({currentMovie.release_date.split("-")[0]})
                  </Typography>
                </Box>
                {isAdded && (
                  <Box
                    component={Button}
                    onClick={handleRemoveFavorite}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      top: 0,
                      right: 0,
                      width: "40px",
                      height: "40px",
                      zIndex: 5,
                      backgroundColor: theme.palette.custom.blue,
                      borderRadius: "8px",
                      textTransform: "none",
                      color: theme.palette.common.white,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        opacity: 0.7,
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    <Favorite />
                  </Box>
                )}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    border: "1px solid gray",
                    borderRadius: "4px",
                    color: "gray",
                    mr: 1,
                  }}
                >
                  {currentMovie.adult ? "R" : "NR"}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body1" sx={{ mr: 0.5 }}>
                    {format(currentMovie.release_date, "dd/MM/yyyy")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mr: 1, textTransform: "uppercase" }}
                  >
                    ({currentMovie.original_language})
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ mr: 1 }}>
                  {currentMovie.genres.map((genre) => genre.name).join(", ")}
                </Typography>

                <Typography variant="body1">
                  {currentMovie.runtime} min
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ mb: 1, color: "gray" }}>
                {currentMovie.tagline}
              </Typography>

              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: theme.palette.common.white }}
                >
                  Overview
                </Typography>
                <Typography variant="body1">{currentMovie.overview}</Typography>
              </Box>

              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: theme.palette.common.white }}
                >
                  Revenue
                </Typography>
                <Typography variant="body1">{formattedRevenue}</Typography>
              </Box>

              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: theme.palette.common.white }}
                >
                  Budget
                </Typography>
                <Typography variant="body1">{formattedBudget}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
