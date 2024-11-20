import { Box, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";
import { Link } from "react-router-dom";
import type { Movie } from "@/types";
import { getPosterUrl } from "@/utils";
import { PosterSizes } from "@/enums";

interface CardProps {
  movie: Movie;
}

export const Card = ({ movie }: CardProps) => {
  return (
    <Box
      component={Link}
      to={`/movies/${movie.id}`}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        width: "250px",
        height: "390px",
        backgroundColor: theme.palette.common.white,
        transition: "transform 0.3s ease",

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
          zIndex: 2,
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
  );
};
