"use client";
import * as React from "react";
import getImagePath from "@/lib/getImagePath";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HorizontalCarouselProps {
  items: { id: number; backdrop_path: string }[]; // Espera un array de objetos con id y backdrop_path
}
// Modifica la función para que acepte props
const CarouselDemo: React.FC<HorizontalCarouselProps> = ({ items }) => {
  return (
    <Carousel className="w-full max-w-xs relative">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="ml-9">
              <Link href={`/movie/${item.id}`}>
                <Card className="h-50 w-70">
                  <CardContent className="p-0 flex aspect-square items-center justify-center h-full w-full">
                    <Image 
                      src={getImagePath(item.backdrop_path)} // Usa `item` en lugar de `items`
                      alt={`Image ${index}`}
                      className="h-full w-full p-0"
                      width={600}
                      height={400}
                    />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
    </Carousel>
  );
};
export default CarouselDemo;
