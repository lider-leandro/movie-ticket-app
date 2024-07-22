import React from 'react';
import  CarouselDemo  from '../components/carrusel'; // Asegúrate de la ruta
import BottomNav from '@/components/bottomnav';
import { ScrollAreaHorizontalDemo } from '@/components/scrollmovie'; // Asegúrate de la ruta
import { getUpcomingMovies } from '@/lib/getmovies';
import getImagePath from '@/lib/getImagePath';
import './globals.css';
import { ModeToggle } from '@/components/Toggle';
import { Link } from 'lucide-react';
import { SearchResults } from "../typings";
import { Movie } from "../typings";
// Define la interfaz para los datos de películas


export default async function Home() {
  // Obtener todas las películas
  const peliculas: Movie[] = await getUpcomingMovies();
  const Movies = await getUpcomingMovies();
  //console.log(Movies);
  // Filtrar películas por categorías
  const animeMovies = peliculas.filter(pelicula => pelicula.genre_ids.includes(16)); // 16 = ID de género para Anime
  const upcomingMovies = peliculas.filter(pelicula => pelicula.genre_ids.includes(28)); // 28 = ID de género para Estrenos
  const actionMovies = peliculas.filter(pelicula => pelicula.genre_ids.includes(28)); // 28 = ID de género para Acción (por ejemplo)
  const comedyMovies = peliculas.filter(pelicula => pelicula.genre_ids.includes(35)); // 35 = ID de género para Comedia (por ejemplo)

  // Extraer los primeros 5-6 elementos de cada categoría y sus rutas de imágenes
  const upcomingImagePaths = upcomingMovies.slice(0, 6).map(pelicula => getImagePath(pelicula.backdrop_path));
  const actionImagePaths = actionMovies.map(pelicula => getImagePath(pelicula.backdrop_path));
  const comedyImagePaths = comedyMovies.map(pelicula => getImagePath(pelicula.backdrop_path));

  return (
    <main className="w-full min-h-screen">
      <ModeToggle />
        <p>Anime Movies</p>
      <CarouselDemo items={Movies} />
      <p>Comedy Movies</p>
      <ScrollAreaHorizontalDemo items={comedyImagePaths} />
      <p>Action Movies</p>
      <ScrollAreaHorizontalDemo items={actionImagePaths} />
      
      <BottomNav />
    </main>
  );
}
