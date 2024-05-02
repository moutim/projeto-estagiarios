export interface ApiResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

export interface Movie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  rating: number;
}

export interface GenreResponse {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string ;
  belongs_to_collection: any ;
  budget: number;
  genres: Genre[];
  homepage: string ;
  id: number;
  imdb_id: string ;
  original_language: string;
  original_title: string;
  overview: string ;
  popularity: number;
  poster_path: string ;
  release_date: string;
  revenue: number;
  runtime: number ;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string ;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}
