export type SearchResults = {
    page: number;
    results: Movie[];
    total_page: number;
    total_results: number;
};
export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    populary: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};
export interface Pelicula {
    id: number; // El ID único de la película
    backdrop_path: string; // Ruta del fondo de la imagen
    title: string; // Título de la película
    // Agrega otros campos que puedas necesitar basados en la API
  }
