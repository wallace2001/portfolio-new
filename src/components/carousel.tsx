"use client";

import {
  Carousel, CarouselContent, CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';

interface ICarousel {
  title: string;
}

export const CarouselPlugin = ({ title }: ICarousel) => {
  const plugin = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  );

  return (
    <div className="flex flex-col my-10">
      <span className="text-foreground/70 font-bold mb-4">{title}</span>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {[].map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-4">
                    {_.icon}
                    <span className="text-[12px] text-foreground/70 mt-2">{_.title}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
