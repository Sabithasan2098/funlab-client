export type TopFiveCardTypes = {
  name: string;
  banner: string;
  releaseYear: string;
  category: string;
};

export type FeaturedCardType = {
  name: string;
  thumbnail: string;
  imdbRating: number;
  releaseYear: string;
};

export type CardType = {
  name: string;
  thumbnail: string;
  imdbRating: number;
  releaseYear: string;
  language: string;
  dualAudio: boolean;
};
