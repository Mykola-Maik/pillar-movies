import { ROUTES } from "@/enums/routes/Routes";

let id = 0;

export const pagesList = [
  {
    id: id++,
    name: "Home",
    href: ROUTES.HOME,
  },
  {
    id: id++,
    name: "Favorites",
    href: ROUTES.FAVORITES,
  },
];
