import { baseImageUrl } from "@/constants";
import { PosterSizes } from "@/enums";

export const getPosterUrl = (size: PosterSizes, path: string): string => {
  return `${baseImageUrl}${size}${path}`;
};
