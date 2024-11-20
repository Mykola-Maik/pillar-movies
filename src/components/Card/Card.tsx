import { Box, Button, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";
import { Link } from "react-router-dom";
import type { Movie } from "@/types";
import { getPosterUrl } from "@/utils";
import { PosterSizes } from "@/enums";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/redux/slices/movieSlice/movieSlice";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";

interface CardProps {
  movie: Movie;
  tabIndex?: number;
  isSelected?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Card = ({ movie, tabIndex, onKeyDown }: CardProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.movieSlice.favorites);
  const isAdded = favorites.some((fav) => fav.id === movie.id);
  const [isFocused, setIsFocused] = useState(false);

  const handleChangeFavorites = () => {
    if (isAdded) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        width: "250px",
        height: "400px",
        backgroundColor: theme.palette.common.white,
        transition: "transform 0.3s ease",
        border: `1px solid ${
          isFocused ? theme.palette.custom.blue : "transparent"
        }`,

        "&:hover img": {
          transition: "transform 0.3s ease",
          color: theme.palette.common.white,
          transform: "scale(1.1)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 30,
          height: 30,
          zIndex: 1,
          backgroundColor: theme.palette.common.white,
          clipPath: "polygon(0 0, 100% 100%, 0 100%)",
          transform: "rotate(270deg)",
          transformOrigin: "center center",
        },

        "&::after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "35%",
          backgroundColor: theme.palette.custom.blue,
          opacity: 0.9,
          transition: "opacity 0.3s ease, transform 0.3s ease",
          zIndex: 0,
          transform: "translateY(-93%)",
        },
        "&:hover::after": {
          transition: "transform 0.3s ease",
          transform: "translateY(0%)",
        },

        "& .hover-text": {
          transition: "color 0.3s ease",
          color: theme.palette.common.white,
        },

        "&:hover .hover-opacity": {
          transition: "opacity 0.3s ease",
          opacity: 1,
        },
      }}
      tabIndex={tabIndex || 0}
      onKeyDown={onKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Box
        component={Button}
        onClick={handleChangeFavorites}
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          top: 0,
          right: 0,
          width: "40px",
          height: "40px",
          zIndex: 5,
          backgroundColor: theme.palette.custom.blue,
          borderRadius: "0 0 0 8px",
          textTransform: "none",
          color: theme.palette.common.white,
          transition: "all 0.3s ease",
          "&:hover": {
            opacity: 0.7,
            transition: "all 0.3s ease",
          },
        }}
      >
        {isAdded ? <Favorite /> : <FavoriteBorder />}
      </Box>
      <Box
        component={Link}
        to={`/movies/${movie.id}`}
        sx={{ position: "relative" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 3,
          }}
        >
          <Box
            component="img"
            src={getPosterUrl(PosterSizes.W342, movie.poster_path)}
            rel={`${movie.title} image`}
            sx={{
              display: "block",
              width: "250px",
              height: "300px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              zIndex: 2,
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            py: 1.5,
            px: 1,
            gap: 0.5,
          }}
        >
          <Typography
            variant="h6"
            className="hover-text"
            sx={{
              zIndex: 2,
              fontSize: "1rem",
            }}
          >
            {movie.title}
          </Typography>

          <Typography
            variant="body1"
            className="hover-opacity hover-text"
            sx={{
              opacity: 0.5,
              zIndex: 2,
              transition: "opacity 0.3s ease",
            }}
          >
            {movie.release_date}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
