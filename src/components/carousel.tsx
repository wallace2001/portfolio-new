"use client";

import {
  Carousel, CarouselContent, CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import Icon from "./icon";
import Image from "next/image";
import _ from "lodash";

interface ICarousel {
  title?: string;
  techs?: Tech[];
  images?: {url: string}[];
  hasArrows?: boolean;
}

export const CarouselPlugin = ({
  title,
  techs,
  images,
  hasArrows = true
}: ICarousel) => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false,  })
  );

  return (
    <div className="flex flex-col my-10">
      {title && <span className="text-foreground/70 font-bold mb-4">{title}</span>}
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {techs?.map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-4">
                    <Icon size={26} icon={_.icon} />
                    <span className="text-[12px] text-foreground/70 mt-2">{_.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
            {images?.map((_, index) => (
                <CarouselItem key={index} className={images.length > 1 ? 'basis-11/12' : 'basis-12/12 max-h-[35rem] w-full'}>
                  <Image 
                    width={1920}
                    height={1080}
                    src={_.url}
                    className="md:h-[35rem] h-full object-cover"
                    alt=""
                  />
                </CarouselItem>
            ))}
        </CarouselContent>
        <div className="hidden md:flex">
        {hasArrows && (_.size(images) > 1) && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
        </div>
      </Carousel>
    </div>
  );
}
