"use client";

import Article from "@/app/(root)/components/article";
import { CarouselPlugin } from "@/components/carousel";
import { ARTICLES, SOCIAL_MEDIAS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import CardEmail from "./components/card-email";
import CardExperiences from "./components/card-experiences";


const Home = () => {

    return (
        <>
            <Image
                width={60}
                height={60}
                className="rounded-full mt-20"
                src="https://avatars.githubusercontent.com/u/70642744?v=4"
                alt=""
            />

            <div className="py-12">
                <h4 className="text-4xl md:text-5xl font-bold w-[80%]">Desenvolvedor de software, apaixonado por programação</h4>
                <p className="text-foreground/50 text-sm py-6 lg:w-[80%] leading-6">Sou um desenvolvedor FullStack pleno com mais de 4 anos de experiência no mercado de tecnologia. Estou constantemente buscando oportunidades para aprender e crescer, e encaro desafios com entusiasmo, pois acredito que cada obstáculo é uma chance de adquirir novos conhecimentos.</p>
                <div className="grid grid-cols-4 gap-10 w-24">
                    {SOCIAL_MEDIAS.map(social => (
                        <Link href="" key={social.id} className="text-foreground/50 hover:text-foreground/70">
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </div>
            <Suspense>
                <CarouselPlugin title="Tecnologias"/>
            </Suspense>
            <div className="grid lg:grid-cols-5 lg:gap-4 grid-cols-2">
                <div className="col-span-3 w-full">
                    {ARTICLES.map(article => (
                        <Article key={article.id} article={article} />
                    ))}
                </div>
                <div className="col-span-2 mt-10 lg:justify-self-end">
                    <CardEmail />
                    <CardExperiences />
                </div>
            </div>
        </>
    );
}

export default Home;