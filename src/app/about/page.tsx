import ClientOnly from "@/components/ClientOnly";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_MEDIAS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const teste = '<p><span class="ql-size-huge">Sou Wallace, de Brasília, apaixonado por desenvolver os melhores sistemas.</span><p><br><p><span class="ql-size-small">Sou um desenvolvedor FullStack pleno, com mais de 4 anos de experiência no mercado de tecnologia. Estou sempre em busca de oportunidades para aprender e crescer. Encaro desafios com entusiasmo, pois vejo cada obstáculo como uma chance de adquirir novos conhecimentos.</span><p><br><pre class="ql-syntax" spellcheck="false">const minhaString = `Esta é a primeira linha.Esta é a segunda linha.`;\nconsole.log(minhaString);</pre><p><br><p><span class="ql-size-small">Sou um desenvolvedor FullStack pleno, com mais de 4 anos de experiência no mercado de tecnologia. Estou sempre em busca de oportunidades para aprender e crescer. Encaro desafios com entusiasmo, pois vejo cada obstáculo como uma chance de adquirir novos conhecimentos.</span>';

const AboutPage = () => {
    const processHTML = (html) => {
        let processedHTML = html.replace(/<span class="ql-size-huge">/g, '<p class="text-4xl md:text-5xl text-foreground font-bold lg:w-[80%] w-full">')
        .replace(/<pre.*?>(.*?)<\/pre>/gs, `<div class="overflow-auto w-full my-2 text-foreground/90 bg-backgroundSidebar p-2 rounded-lg"><pre><code class="language-typescript">$1</code></pre></div>`)
        .replace(/<span class="ql-size-small">/g, '<p class="text-sm text-foreground/80 mt-2 leading-6">');
        return processedHTML;
      };

    return (
        <ClientOnly>
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
                <div className="col-span-4 flex flex-col">
                <div dangerouslySetInnerHTML={{ __html: processHTML(teste) }} />
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
        </ClientOnly>
    );
}

export default AboutPage;