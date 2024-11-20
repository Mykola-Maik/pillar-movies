import { Box, Pagination } from "@mui/material";
import Grid from "@mui/material/Grid2";
import theme from "@/styles/muiTheme";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { getMoviesRequest } from "@/redux/slices/movieSlice/movieSlice";
import { useSearchParams } from "react-router-dom";
import { Card, Loader } from "@/components";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const movies = useAppSelector((state) => state.movieSlice.movies);
  const pages = useAppSelector((state) => state.movieSlice.totalPages);
  const isLoading = useAppSelector((state) => state.movieSlice.isLoading);

  useEffect(() => {
    const query: { [key: string]: string } = {};
    if (currentPage) query.page = String(currentPage);

    setSearchParams(query);

    dispatch(getMoviesRequest({ page: currentPage }));
  }, [currentPage]);

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

  const totalPages = Math.min(pages, 500);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Grid container spacing={4} sx={{ mb: 8, flexGrow: 1 }}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Grid
              key={movie.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card movie={movie} />
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
            count={totalPages}
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
