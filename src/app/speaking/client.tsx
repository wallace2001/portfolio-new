"use client";

import ClientOnly from "@/components/ClientOnly";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_MEDIAS } from "@/constants";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import CardEmail from "../(root)/components/card-email";
import { useQuery } from "@apollo/client";
import { GET_USER_CONTACT } from "../graphql/actions/user/get-user-contact";
import Loader from "@/components/Loader";
const SpeakingClient = () => {

    const { data: projectPageData, loading } = useQuery(GET_USER_CONTACT, { variables: { name: 'Wallace' } });

    const profileUser: User = projectPageData?.getUser;

    if (loading) {
        return <Loader />
    }

    return (
        <ClientOnly>
            <div className="mt-24">
                <div className="flex w-full flex-col">
                    <p className="text-4xl md:text-5xl md:w-[70%] w-full text-foreground font-bold leading-10">{profileUser?.ProfileUser.Contact.title}</p>
                    <p className="mt-4 text-sm text-foreground/80 md:w-[70%] w-full leading-7">{profileUser?.ProfileUser.Contact.description}</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:gap-6 mt-2">
                        {profileUser?.ProfileUser?.linkProfiles?.map(social => (
                            <Link target="_blank" href={social.linkUrl} key={social.linkUrl} className="text-foreground/50 hover:text-foreground/70">
                                {SOCIAL_MEDIAS[social.link.icon].icon}
                            </Link>
                        ))}
                    </div>

                    <Separator className="my-8" />

                    <Link href="#" className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                        <MdEmail color="var(--foreground/80)" />
                        <p className="text-[13px] ml-2 font-bold">{profileUser?.email}</p>
                    </Link>
                </div>
                <Separator className="my-10" />
                <div className="border p-4 nd:p-8 border-foreground/10 rounded-md mt-10">
                <CardEmail email={profileUser?.email} />
                </div>
            </div>
        </ClientOnly>
    );
}

export default SpeakingClient;