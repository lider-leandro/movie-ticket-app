// page.tsx
import Prueba from "@/components/Prueba";
import { ModeToggle } from "@/components/Toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CarouselSize } from '@/components/carrusel'

export default function Home() {
  return (
    <main className="">
      <ModeToggle />
      <p>Este es el Home</p>
      <CarouselSize />
    </main>
  );
}
