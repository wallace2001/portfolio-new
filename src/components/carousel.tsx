"use client";

import {
  Carousel, CarouselContent, CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from './ui/card';

const products = [
  {
    handle: '1',
    title: 'Projeto Um',
    rotate: 'rotate-3',
    featuredImage: {
      url: 'https://img.freepik.com/fotos-gratis/pico-de-montanha-majestoso-em-paisagem-tranquila-de-inverno-gerada-por-ia_188544-15662.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711389600&semt=ais',
    }
  },
  {
    handle: '2',
    title: 'Projeto Um',
    rotate: 'rotate-3',
    featuredImage: {
      url: 'https://img.freepik.com/fotos-gratis/pico-de-montanha-majestoso-em-paisagem-tranquila-de-inverno-gerada-por-ia_188544-15662.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711389600&semt=ais',
    }
  },
  {
    handle: '3',
    title: 'Projeto Um',
    rotate: 'rotate-3',
    featuredImage: {
      url: 'https://img.freepik.com/fotos-gratis/pico-de-montanha-majestoso-em-paisagem-tranquila-de-inverno-gerada-por-ia_188544-15662.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711389600&semt=ais',
    }
  },
  {
    handle: '4',
    title: 'Projeto Um',
    rotate: '-rotate-3',
    featuredImage: {
      url: 'https://img.freepik.com/fotos-gratis/pico-de-montanha-majestoso-em-paisagem-tranquila-de-inverno-gerada-por-ia_188544-15662.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711389600&semt=ais',
    }
  },
  {
    handle: '5',
    title: 'Projeto Um',
    rotate: 'rotate-3',
    featuredImage: {
      url: 'https://img.freepik.com/fotos-gratis/pico-de-montanha-majestoso-em-paisagem-tranquila-de-inverno-gerada-por-ia_188544-15662.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711389600&semt=ais',
    }
  },
];

export async function CarouselPlugin() {
  const plugin = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  )
  const carouselProducts = [...products, ...products, ...products];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full pb-10 flex justify-between"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((_, index) => (
          <CarouselItem key={index} className="w-96 basis-1/1 md:basis-1/3 p-6">
            <div className="p-1">
              <Card>
                <CardContent className={`flex aspect-square items-center justify-center p-0`}>
                  <Button className="w-full h-full p-0 transition duration-150 relative bg-transparent hover:bg-transparent">
                    <Image
                      className="w-full h-full bg-cover rounded-md"
                      width={1920}
                      height={1080}
                      alt=""
                      src={_.featuredImage.url}
                    />

                    <div className="w-full h-full absolute opacity-0 hover:bg-stone-950/80 hover:opacity-100">
                      <div className="w-full h-full flex justify-center items-center flex-col align-bottom">
                        <p className="text-white text-start">Projeto Um</p>
                        <span className="text-white text-[10px] text-start">Clique para visualizar</span>
                      </div>
                    </div>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
