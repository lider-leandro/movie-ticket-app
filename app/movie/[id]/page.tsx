// app/movie/[id]/page.tsx
import { getMovieDetails } from '@/lib/getmovies';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
//import { Movie } from '../../../typings';
// Define la interfaz para la película
type MovieId = {
  id: string
}

type ServerParams = {
  params: MovieId
}

const Movie: FC<ServerParams> = async ({ params }) => {
  const { id } = params;
  const getmoviedetails = await getMovieDetails(id); 

  //console.log(getmoviedetails.title );
  return (
    <div>
      <p>{getmoviedetails.title}</p>
      <p>{getmoviedetails.overview}</p>
      <div>{getmoviedetails.video }</div>
    </div>
  );
};

export default Movie;
