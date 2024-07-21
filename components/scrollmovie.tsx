'use client';
import React from 'react';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import getImagePath from '@/lib/getImagePath';

interface ScrollAreaHorizontalDemoProps {
  items: string[];
}

export function ScrollAreaHorizontalDemo({ items }: ScrollAreaHorizontalDemoProps) {
  return (
    <ScrollArea className="custom-width whitespace-nowrap rounded-md border">
      <div className="flex w-full space-x-4 p-4">
        {items.map((path, index) => (
          <figure key={index} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={getImagePath(path)}
                alt={`Image ${index}`}
                className="aspect-[4/4] h-fit w-fit object-cover"
                width={200}
                height={400}
              />
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
