export type TopFiveCardTypes = {
  id?: string;
  name: string;
  banner: string;
  releaseYear: string;
  category: string;
};

export type FeaturedCardType = {
  id?: string;
  name: string;
  thumbnail: string;
  imdbRating: number;
  releaseYear: string;
};

export type CardType = {
  id: string;
  name: string;
  thumbnail: string;
  imdbRating: number;
  releaseYear: string;
  language: string;
  dualAudio: boolean;
};

export type TVideoSource = {
  resolution: "480" | "720" | "1080" | "4k";
  url: string;
  sizeMB: number;
};

export type TVideo = {
  sources: TVideoSource[];
  duration: number;
};

export type TVideoData = {
  id: string;

  name: string;
  fullName: string;
  description?: string;

  industry?: string;
  category: string;
  genres: string[];

  releaseYear?: number;
  language?: string[];

  video: TVideo;

  thumbnail: string;
  banner: string;
  screenshots?: string[];

  imdbRating?: number;

  tv: boolean;
  comic: boolean;
  dualAudio: boolean;
  hindiDubbed: boolean;
  web: boolean;
  oscar: boolean;

  views?: number;
  isPublished?: boolean;

  createdAt?: string;
  updatedAt?: string;
};
export type TRelatedVideoData = {
  data: {
    id: string;

    name: string;
    fullName: string;
    description?: string;

    industry?: string;
    category: string;
    genres: string[];

    releaseYear?: number;
    language?: string[];

    video: TVideo;

    thumbnail: string;
    banner: string;
    screenshots?: string[];

    imdbRating?: number;

    tv: boolean;
    comic: boolean;
    dualAudio: boolean;
    hindiDubbed: boolean;
    web: boolean;
    oscar: boolean;

    views?: number;
    isPublished?: boolean;

    createdAt?: string;
    updatedAt?: string;
  };
};
