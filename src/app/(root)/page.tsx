import { CarouselPlugin } from "@/components/carousel";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const socialMedias = [
    {
        id: "1",
        icon: <BsTwitterX size={17} />,
    },
    {
        id: "2",
        icon: <IoLogoInstagram size={17} />,
    },
    {
        id: "3",
        icon: <FaGithub size={17} />,
    },
    {
        id: "4",
        icon: <FaLinkedin size={17} />,
    },
];

const Home = async () => {

    return (
        <Container>
            <Navbar />
            <Image
                width={60}
                height={60}
                className="rounded-full mt-20"
                src="https://avatars.githubusercontent.com/u/70642744?v=4"
                alt=""
            />

            <div className="py-12 w-[80%]">
                <h4 className="text-4xl font-bold">Desenvolvedor de software, apaixonado por programação</h4>
                <p className="text-foreground/50 text-sm py-6">Sou um desenvolvedor FullStack pleno com mais de 4 anos de experiência no mercado de tecnologia. Estou constantemente buscando oportunidades para aprender e crescer, e encaro desafios com entusiasmo, pois acredito que cada obstáculo é uma chance de adquirir novos conhecimentos.</p>
                <div className="grid grid-cols-4 gap-12 w-24">
                    {socialMedias.map(social => (
                        <Link href="" key={social.id} className="hover:text-foreground/50">
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </div>
            <Suspense>
                <CarouselPlugin />
            </Suspense>
        </Container>
    );
}

export default Home;