import { SearchResults } from "@/typings";

// Función para realizar la petición a la API
async function peticion(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US"); // Asegúrate de que 'language' esté bien escrito
  url.searchParams.set("page", "2");
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMB_API_KEY}`,
    },
    next: { revalidate: cacheTime || 60 * 60 * 24 },
  };
  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;
  return data;
}

// Función para obtener películas de acuerdo al género
export async function getMoviesByGenre(genreId: number) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  url.searchParams.set("with_genres", genreId.toString()); // Filtrar por género
  const data = await peticion(url);
  return data.results;
}

// Función para obtener películas por estrenos
export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await peticion(url);
  return data.results;
}

// Función para obtener películas de anime
export async function getAnimeMovies() {
  // Necesitas el ID del género para anime; por ejemplo, 16 podría ser el ID para anime
  return getMoviesByGenre(16);
}
export async function getMovieDetails(id: number) {
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);
  const data = await peticion(url);
  return data;
}
