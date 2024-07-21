// components/carrusel.tsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Usa useRouter de next/navigation
import getImagePath from '@/lib/getImagePath';
import Link from 'next/link';

interface HorizontalCarouselProps {
  items: { id: number; backdrop_path: string }[]; // Espera un array de objetos con id y backdrop_path
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ items }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const router = useRouter();

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item) => (
            <Link href={`/movie/${item.id}`} key={item.id}>
            <div
              key={item.id}
              className="flex-shrink-0 w-full mx-4"
              style={{ cursor: 'pointer' }}
            >
              <div className="m-4 border border-gray-200 rounded-lg">
                <img
                  src={getImagePath(item.backdrop_path)}
                  alt={`Item ${item.id}`}
                  className="w-full h-auto rounded-md"
                />
              </div>
              </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
