"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const API_KEY = "5485316c"; // Reemplaza con tu API Key

interface Movie {
  Title: string;
  Year: string;
  Genre: string;
  Plot: string;
  Director: string;
  Actors: string;
  imdbRating: string;
  Poster: string;
}

const MOVIE_IDS = [
  "tt3896198",
  "tt0110912",
  "tt0133093",
  "tt0468569",
  "tt0120737",
  "t2000",
];

export function CarouselSize() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const results = await Promise.all(
        MOVIE_IDS.map(async (id) => {
          const response = await fetch(
            //`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
            `http://www.omdbapi.com/?apikey=${API_KEY}`
          );
          const data: Movie = await response.json();
          return data;
        })
      );
      setMovies(results);
    }

    fetchMovies();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="w-320">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="w-full">
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold">{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    
                    
                    <p>
                      <strong>Director:</strong> {movie.Director}
                    </p>
                    <p>
                      <strong>Actors:</strong> {movie.Actors}
                    </p>
                    <p>
                      <strong>IMDb Rating:</strong> {movie.imdbRating}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
