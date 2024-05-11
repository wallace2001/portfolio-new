/* eslint-disable @next/next/no-async-client-component */
"use client";

import Article from "@/app/(root)/components/article";
import ClientOnly from "@/components/ClientOnly";
import { CarouselPlugin } from "@/components/carousel";
import {SOCIAL_MEDIAS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import CardEmail from "./components/card-email";
import CardExperiences from "./components/card-experiences";
import { useQuery } from "@apollo/client";
import Loader from "@/components/Loader";
import { GET_USER_ARTICLES } from "../graphql/actions/user/get-user-articles.action";

interface IHomeClient {
    user: User;
}

const HomeClient = ({ user }: IHomeClient) => {
    const { data: articlesData, loading } = useQuery(GET_USER_ARTICLES, { variables: { name: 'Wallace' } });

    const articles: User = articlesData?.getUser;
    return (
        <ClientOnly>
            <Image
                width={60}
                height={60}
                className="rounded-full mt-20"
                src={user?.avatar.url}
                alt=""
            />

            <div className="py-12">
                <h4 className="text-4xl md:text-5xl font-bold w-[80%]">{user?.ProfileUser.title}</h4>
                <p className="text-foreground/50 text-sm py-6 lg:w-[80%] leading-6">{user?.ProfileUser.description}</p>
                <div className="grid grid-cols-4 gap-10 w-24">
                    {user?.ProfileUser?.linkProfiles?.map(social => (
                        <Link target="_blank" href={social.linkUrl} key={social.linkUrl} className="text-foreground/50 hover:text-foreground/70">
                            {SOCIAL_MEDIAS[social.link.icon].icon}
                        </Link>
                    ))}
                </div>
            </div>
            <Suspense>
                <CarouselPlugin techs={user?.ProfileUser.techs} title="Tecnologias"/>
            </Suspense>
            <div className="grid lg:grid-cols-5 lg:gap-4 grid-cols-2">
                {loading ? (
                    <div className="col-span-3 w-full">
                    <Loader />
                    </div>
                ) : (
                    <div className="col-span-3 w-full">
                    {articles?.Article.map(article => (
                        <Article key={article.title} article={article} />
                    ))}
                </div>
                )}
                <div className="col-span-2 mt-10 lg:justify-self-end">
                    <CardEmail email={user?.email} />
                    <CardExperiences cvUrl={user?.ProfileUser.Curriculum.url} experiences={user.ProfileUser.experiences} />
                </div>
            </div>
        </ClientOnly>
    );
}

export default HomeClient;