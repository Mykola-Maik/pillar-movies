import { pagesList } from "@/constants/Header/pagesList";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { ROUTES } from "@/enums/routes/Routes";
import { Link } from "react-router-dom";
import theme from "@/styles/muiTheme";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isMdUp && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMdUp, isMenuOpen]);

  const handleOpenNavMenu = (_event: React.MouseEvent<HTMLElement>) => {
    setIsMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.custom.blue }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Box component={Link} to={ROUTES.HOME}>
              <Box
                component="img"
                src="/pillar_logo.jpeg"
                alt="Pillar Logo"
                sx={{
                  display: "block",
                  width: "80px",
                  height: "80px",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={isMenuOpen}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: {
                  backgroundColor: theme.palette.custom.blue,
                  py: 4,
                },
              }}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {pagesList.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ textAlign: "center", mb: 1 }}
                >
                  <Box
                    component={Link}
                    to={page.href}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      textDecoration: "none",
                      color: theme.palette.common.white,
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: theme.palette.error.main,
                        transition: "color 0.3s ease",
                      },
                    }}
                  >
                    <Typography
                      noWrap
                      sx={{
                        position: "relative",
                        maxWidth: "fit-content",
                        overflow: "visible",
                        my: 2,
                        color: theme.palette.common.white,
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: theme.palette.error.main,
                          transition: "color 0.3s ease",
                        },
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Drawer>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Box component={Link} to={ROUTES.HOME}>
              <Box
                component="img"
                src="/pillar_logo.jpeg"
                alt="Pillar Logo"
                sx={{
                  display: "block",
                  width: "80px",
                  height: "80px",
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 5,
              justifyContent: "flex-end",
            }}
          >
            {pagesList.map((page) => (
              <Box
                component={Link}
                key={page.id}
                onClick={handleCloseNavMenu}
                to={page.href}
                sx={{
                  position: "relative",
                  color: theme.palette.common.white,
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: theme.palette.error.main,
                    transition: "color 0.3s ease",
                  },
                }}
              >
                <Typography
                  noWrap
                  sx={{
                    my: 2,
                    display: "block",
                    color: theme.palette.common.white,
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: theme.palette.error.main,
                      transition: "color 0.3s ease",
                    },
                  }}
                >
                  {page.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
