"use client"

import ClientOnly from "@/components/ClientOnly";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_MEDIAS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
interface IAboutClient {
    user: User;
}

const AboutClient = ({ user }: IAboutClient) => {

    const processHTML = (html: string) => {
        if (!html) return "";
        let processedHTML = html.replace(/<span class="ql-size-huge">/g, '<p class="text-4xl md:text-5xl text-foreground font-bold lg:w-[80%] w-full">')
        .replace(/<pre.*?>(.*?)<\/pre>/gs, `<div class="overflow-auto w-full my-2 text-foreground/90 bg-backgroundSidebar p-2 rounded-lg"><pre><code class="language-typescript">$1</code></pre></div>`)
        .replace(/<p>/g, '<p class="text-sm text-foreground/80 mt-2 leading-6">');
        return processedHTML;
      };

    return (
        <ClientOnly>
            <div className="h-full grid lg:grid-cols-6 gap-6 mt-32">
                <div className="lg:hidden flex col-span-2 flex-col">
                    <Image
                        width={300}
                        height={300}
                        className="rounded-2xl mt-2"
                        src={user.avatar.url}
                        alt=""
                    />
                </div>
                <div className="sm:max-w-[80vw] max-w-[90vw] col-span-4 flex flex-col">
                    <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: processHTML(user.ProfileUser.about) }} />
                </div>
                <div className="hidden lg:flex col-span-2 flex-col">
                    <Image
                        width={300}
                        height={300}
                        className="rounded-2xl mt-2"
                        src={user.avatar.url}
                        alt=""
                    />

                    <div className="flex flex-col mt-8 gap-2">
                        {user?.ProfileUser?.linkProfiles?.map(social => (
                            <Link target="_blank" href={social.linkUrl} key={social.linkUrl} className="flex justify-start items-center text-foreground/50 hover:text-[#2CBDAA] text-sm">
                                <div className="flex justify-center gap-2">
                                    {SOCIAL_MEDIAS[social.link.icon].icon}
                                    {SOCIAL_MEDIAS[social.link.icon].message}
                                </div>
                            </Link>
                        ))}
                    </div>

                    <Separator className="my-8" />

                    <Link href="#" className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                        <MdEmail color="var(--foreground/80)" />
                        <p className="text-[13px] ml-2 font-bold">{user.email}</p>
                    </Link>
                </div>
                <div className="lg:hidden flex col-span-2 flex-col">
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-col mt-8 gap-4 justify-start items-start">
                            {user?.ProfileUser?.linkProfiles?.map(social => (
                                <Link target="_blank" href={social.linkUrl} key={social.linkUrl} className="flex justify-center items-center text-foreground/50 hover:text-[#2CBDAA]">
                                <div className="flex justify-center gap-2">
                                    {SOCIAL_MEDIAS[social.link.icon].icon}
                                    {SOCIAL_MEDIAS[social.link.icon].message}
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Separator className="my-8" />

                    <Link href="#" className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                        <MdEmail color="var(--foreground/80)" />
                        <p className="text-[13px] ml-2 font-bold">{user.email}</p>
                    </Link>
                </div>
            </div>
        </ClientOnly>
    );
}

export default AboutClient;