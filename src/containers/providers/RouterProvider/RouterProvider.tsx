import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import { ROUTES } from "@/enums";
import { Loader } from "@/components";

const MainLayout = lazy(
  () => import("@/containers/layouts/MainLayout/MainLayout")
);
const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(
  () => import("@/pages/MovieDetailsPage/MovieDetailsPage")
);
const FavoritesPage = lazy(() => import("@/pages/FavoritesPage/FavoritesPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loader />}>
        <NotFoundPage />
      </Suspense>
    ),
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.MOVIE_DETAILS,
        element: (
          <Suspense fallback={<Loader />}>
            <MovieDetailsPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.FAVORITES,
        element: (
          <Suspense fallback={<Loader />}>
            <FavoritesPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);

export default function RouterProvider() {
  return <Provider router={router} />;
}
