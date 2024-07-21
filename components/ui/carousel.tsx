'use client';

import React, { useEffect, useState } from 'react';
import getImagePath from '@/lib/getImagePath';
import { getUpcomingMovies } from '@/lib/getmovies';
import { Pelicula } from '@/typings';

const CarouselSize = () => {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const data = await getUpcomingMovies();
        setPeliculas(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchPeliculas();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? peliculas.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === peliculas.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#60;
      </button>
      <div className="overflow-hidden">
        {peliculas.length > 0 && (
          <img
            src={getImagePath(peliculas[currentIndex].backdrop_path)}
            alt={peliculas[currentIndex].title}
            className="w-full h-auto"
          />
        )}
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#62;
      </button>
    </div>
  );
};

export default CarouselSize;
