import { Box, Pagination } from "@mui/material";
import Grid from "@mui/material/Grid2";
import theme from "@/styles/muiTheme";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { getMoviesRequest } from "@/redux/slices/movieSlice/movieSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, Dropdown, Loader } from "@/components";
import { Filters } from "@/enums";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<Filters>(Filters.POPULAR);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const currentPage = Number(searchParams.get("page")) || 1;
  const { movies, totalPages, isLoading, favorites } = useAppSelector(
    (state) => state.movieSlice
  );

  useEffect(() => {
    const query: { [key: string]: string } = {};

    if (currentPage) query.page = String(currentPage);

    setSearchParams(query);

    if (filter === Filters.POPULAR || filter === Filters.NOW_PLAYING) {
      dispatch(getMoviesRequest({ page: currentPage }));
    }
  }, [currentPage, filter]);

  const moviesToDisplay = filter === Filters.FAVORITES ? favorites : movies;

  if (isLoading) {
    return <Loader />;
  }

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    searchParams.set("page", value.toString());
    setSearchParams(searchParams);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (focusedIndex === null) return;

    switch (event.key) {
      case "ArrowRight":
        setFocusedIndex((prev) => Math.min(prev! + 1, movies.length - 1));
        break;
      case "ArrowLeft":
        setFocusedIndex((prev) => Math.max(prev! - 1, 0));
        break;
      case "Enter":
        navigate(`/movies/${movies[focusedIndex!].id}`);
        break;
      case "Escape":
        setFocusedIndex(null);
        break;
      default:
        break;
    }
  };

  const pages = Math.min(totalPages, 500);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          mb: 6,
        }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Dropdown
            name="category"
            onChange={(event) => setFilter(event.target.value as Filters)}
            value={filter}
            options={[Filters.POPULAR, Filters.NOW_PLAYING, Filters.FAVORITES]}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        sx={{ mb: 8, flexGrow: 1, outline: "none" }}
      >
        {moviesToDisplay.length > 0 ? (
          moviesToDisplay.map((movie, index) => (
            <Grid
              key={movie.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                movie={movie}
                tabIndex={focusedIndex === index ? 0 : -1}
                isSelected={focusedIndex === index}
                onKeyDown={handleKeyDown}
              />
            </Grid>
          ))
        ) : (
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px",
            }}
          >
            <p>No movies found</p>
          </Grid>
        )}
      </Grid>

      <Grid container sx={{ width: "100%", alignSelf: "flex-end" }}>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={pages}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                background: "transparent",
                border: `1px solid ${theme.palette.custom.blue}`,
                color: theme.palette.custom.blue,
                transition: "all 0.3s ease",
                "&:hover": {
                  transition: "all 0.3s ease",
                  background: theme.palette.custom.blue,
                  color: theme.palette.common.white,
                },
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                background: theme.palette.custom.blue,
                color: theme.palette.common.white,
                transition: "background 0.3s ease, color 0.3s ease",
                "&:hover": {
                  transition: "all 0.3s ease",
                  background: theme.palette.custom.blue,
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
