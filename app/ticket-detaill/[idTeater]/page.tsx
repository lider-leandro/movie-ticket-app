import { FC, useEffect, useState } from "react";
import { getMovieDetails } from "@/lib/getmovies";

type MovieId = {
  idTeater: string;
  title: string
};

type ServerParams = {
  params: MovieId;
};
const TicketDetail: FC<ServerParams> = async ({ params }) => {
  const { idTeater } = params;
  const getmoviedetails = await getMovieDetails(idTeater);
  //console.log(getmoviedetails);
  return (
    <div>page de ticket detail</div>
  )
}

export default TicketDetail