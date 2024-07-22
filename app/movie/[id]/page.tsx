// app/movie/[id]/page.tsx
"use client";
import { getMovieDetails } from "@/lib/getmovies";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { Item } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// Define la interfaz para la película
type MovieId = {
  id: string;
};

type ServerParams = {
  params: MovieId;
};

const Movie: FC<ServerParams> = async ({ params }) => {
  const { id } = params;
  const getmoviedetails = await getMovieDetails(id);

  //console.log(getmoviedetails);
  return (
    <div className="relative h-full">
      <div className="relative ">
        <div className="absolute w-full h-28 items-center justify-center bg-opacity-95 fixed top-0">
          <Link href="/ticket-detaill">
            <Button className="bg-violet-500 text-lg text-white w-72 h-18">
              a
            </Button>
          </Link>
        </div>
        <Image
          alt={`Image ${getmoviedetails.id}`}
          src={getImagePath(getmoviedetails.poster_path)}
          width={300} // Ancho de la imagen
          height={400} // Altura de la imagen
          className="top-1/2 opacity-80 h-58 w-full"
        />
      </div>
      <div className="absolute inset-0 w-full bg-black bg-opacity-90 items-center justify-center h-full z-50 top-48">
        <div>
          <Image
            src={getImagePath(getmoviedetails.backdrop_path)}
            alt={`${getmoviedetails.id}`}
            width={300} // Ancho de la imagen
            height={400} // Altura de la imagen
          />
        </div>
        <p className="p-3">● Movie Subject</p>
        <p className="p-5">{getmoviedetails.overview}</p>
        <p className="p-3">● Image From Movie</p>

        <div className="flex w-full h-28 items-center justify-center bg-opacity-95 fixed bottom-0">
          <Link href={`/ticket-detaill/${getmoviedetails.id}`}>
            <Button className="bg-violet-500 text-lg text-white w-72 h-18">
              Buy Ticket Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
