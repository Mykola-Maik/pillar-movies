import { baseImageUrl } from "@/constants";
import { BackdropSizes, PosterSizes } from "@/enums";

export const getPosterUrl = (
  size: PosterSizes | BackdropSizes,
  path: string
): string => {
  return `${baseImageUrl}${size}${path}`;
};
