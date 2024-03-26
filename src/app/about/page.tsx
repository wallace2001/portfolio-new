import { Separator } from "@/components/ui/separator";
import { SOCIAL_MEDIAS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const AboutPage = () => {
    return (
        <div className="grid lg:grid-cols-6 gap-6 mt-32">
            <div className="lg:hidden flex col-span-2 flex-col">
                <Image
                    width={300}
                    height={300}
                    className="rounded-2xl mt-2 rotate-3"
                    src="https://avatars.githubusercontent.com/u/70642744?v=4"
                    alt=""
                />
            </div>
            <div className="col-span-4">
                <h4 className="text-5xl text-foreground font-bold lg:w-[80%] w-full">Sou Wallace, de Brasília, apaixonado por desenvolver os melhores sistemas.</h4>
                <p className="text-sm text-foreground/80 mt-10">Sou um desenvolvedor FullStack pleno, com mais de 4 anos de experiência no mercado de tecnologia. Estou sempre em busca de oportunidades para aprender e crescer. Encaro desafios com entusiasmo, pois vejo cada obstáculo como uma chance de adquirir novos conhecimentos.</p>
                <p className="text-sm text-foreground/80 mt-10">Sou um desenvolvedor FullStack pleno, com mais de 4 anos de experiência no mercado de tecnologia. Estou sempre em busca de oportunidades para aprender e crescer. Encaro desafios com entusiasmo, pois vejo cada obstáculo como uma chance de adquirir novos conhecimentos.</p>
                <p className="text-sm text-foreground/80 mt-10">Sou um desenvolvedor FullStack pleno, com mais de 4 anos de experiência no mercado de tecnologia. Estou sempre em busca de oportunidades para aprender e crescer. Encaro desafios com entusiasmo, pois vejo cada obstáculo como uma chance de adquirir novos conhecimentos.</p>
            </div>
            <div className="hidden lg:flex col-span-2 flex-col">
                <Image
                    width={300}
                    height={300}
                    className="rounded-2xl mt-2 rotate-3"
                    src="https://avatars.githubusercontent.com/u/70642744?v=4"
                    alt=""
                />

                <div className="flex flex-col mt-8">
                    {SOCIAL_MEDIAS.map(media =>
                        <Link href="#" key={media.id} className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                            {media.icon}
                            <p className="text-[13px] ml-2 font-bold">{media.message}</p>
                        </Link>
                    )}
                </div>

                <Separator className="my-8" />

                <Link href="#" className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                    <MdEmail color="var(--foreground/80)" />
                    <p className="text-[13px] ml-2 font-bold">dev_kollen@outlook.com</p>
                </Link>
            </div>
            <div className="lg:hidden flex col-span-2 flex-col">
                <div className="flex flex-col mt-8">
                    {SOCIAL_MEDIAS.map(media =>
                        <Link href="#" key={media.id} className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                            {media.icon}
                            <p className="text-[13px] ml-2 font-bold">{media.message}</p>
                        </Link>
                    )}
                </div>

                <Separator className="my-8" />

                <Link href="#" className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                    <MdEmail color="var(--foreground/80)" />
                    <p className="text-[13px] ml-2 font-bold">dev_kollen@outlook.com</p>
                </Link>
            </div>
        </div>
    );
}

export default AboutPage;