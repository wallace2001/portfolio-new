import { getUserAbout } from "@/actions/fetch-profile";
import ClientOnly from "@/components/ClientOnly";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_MEDIAS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import NotFound from "../not-found";

const AboutPage = async () => {

    const profile: User = await getUserAbout();

    if (!profile) {
        return (
            <NotFound />
        );
    }

    const processHTML = (html: string) => {
        if (!html) return "";
        let processedHTML = html.replace(/<span class="ql-size-huge">/g, '<p class="text-4xl md:text-5xl text-foreground font-bold lg:w-[80%] w-full">')
        .replace(/<pre.*?>(.*?)<\/pre>/gs, `<div class="overflow-auto w-full my-2 text-foreground/90 bg-backgroundSidebar p-2 rounded-lg"><pre><code class="language-typescript">$1</code></pre></div>`)
        .replace(/<p>/g, '<p class="text-sm text-foreground/80 mt-2 leading-6">');
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
                        src={profile.avatar.url}
                        alt=""
                    />
                </div>
                <div className="col-span-4 flex flex-col">
                <div dangerouslySetInnerHTML={{ __html: processHTML(profile.ProfileUser.about) }} />
                </div>
                <div className="hidden lg:flex col-span-2 flex-col">
                    <Image
                        width={300}
                        height={300}
                        className="rounded-2xl mt-2 rotate-3"
                        src={profile.avatar.url}
                        alt=""
                    />

                    <div className="flex flex-col mt-8">
                        {profile?.ProfileUser?.linkProfiles?.map(social => (
                            <Link target="_blank" href={social.linkUrl} key={social.linkUrl} className="text-foreground/50 hover:text-foreground/70">
                                {SOCIAL_MEDIAS[social.link.icon].icon}
                            </Link>
                        ))}
                    </div>

                    <Separator className="my-8" />

                    <Link href="#" className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                        <MdEmail color="var(--foreground/80)" />
                        <p className="text-[13px] ml-2 font-bold">{profile.email}</p>
                    </Link>
                </div>
                <div className="lg:hidden flex col-span-2 flex-col">
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-col mt-8">
                            {profile?.ProfileUser?.linkProfiles?.map(social => (
                                <Link target="_blank" href={social.linkUrl} key={social.linkUrl} className="text-foreground/50 hover:text-foreground/70">
                                    {SOCIAL_MEDIAS[social.link.icon].icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Separator className="my-8" />

                    <Link href="#" className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                        <MdEmail color="var(--foreground/80)" />
                        <p className="text-[13px] ml-2 font-bold">{profile.email}</p>
                    </Link>
                </div>
            </div>
        </ClientOnly>
    );
}

export default AboutPage;