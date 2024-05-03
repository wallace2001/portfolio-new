"use client";

import { getUserContact } from "@/actions/fetch-profile";
import ClientOnly from "@/components/ClientOnly";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_MEDIAS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import NotFound from "../not-found";
import CardEmail from "../(root)/components/card-email";

const SpeakingPage = () => {
    const [profile, setProfile] = useState<User>();

    const fetchUser = async () => {
        try {
            const u = await getUserContact();
            setProfile(u);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (!profile) {
        return (
            <NotFound />
        );
    }

    return (
        <ClientOnly>
            <div className="mt-24">
                <div className="flex w-full flex-col">
                    <p className="text-4xl md:text-5xl md:w-[70%] w-full text-foreground font-bold leading-10">{profile?.ProfileUser.Contact.title}</p>
                    <p className="mt-4 text-sm text-foreground/80 md:w-[70%] w-full leading-7">{profile?.ProfileUser.Contact.description}</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:gap-6 mt-2">
                        {profile?.ProfileUser?.linkProfiles?.map(social => (
                            <Link target="_blank" href={social.linkUrl} key={social.linkUrl} className="text-foreground/50 hover:text-foreground/70">
                                {SOCIAL_MEDIAS[social.link.icon].icon}
                            </Link>
                        ))}
                    </div>

                    <Separator className="my-8" />

                    <Link href="#" className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                        <MdEmail color="var(--foreground/80)" />
                        <p className="text-[13px] ml-2 font-bold">{profile?.email}</p>
                    </Link>
                </div>
                <Separator className="my-10" />
                <div className="border p-4 nd:p-8 border-foreground/10 rounded-md mt-10">
                <CardEmail email={profile?.email} />
                </div>
            </div>
        </ClientOnly>
    );
}

export default SpeakingPage;