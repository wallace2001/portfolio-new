"use client";

import { GET_ARTICLE_BY_ID } from "@/app/graphql/actions/article/get-article-by-id.action";
import { GET_PROJECT_BY_ID } from "@/app/graphql/actions/project/get-project-by-id.action";
import NotFound from "@/app/not-found";
import ClientOnly from "@/components/ClientOnly";
import Loader from "@/components/Loader";
import { CarouselPlugin } from "@/components/carousel";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import Link from "next/link";
import { Suspense } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

interface ProjectPageProps {
    params: {
        projectId: string;
    };
}

const ProjectPage = ({ params }: ProjectPageProps) => {

    const { projectId } = params;

    const { data: projectData, loading } = useQuery(GET_PROJECT_BY_ID, {
        variables: {
            getProjectDto: {
                id: projectId
            }
        }
    });

    const project = projectData?.getProjectById;

    if (loading) {
        return (
            <Loader />
        );
    }

    if (!project && !loading) {
        return (
            <NotFound />
        );
    }

    const processHTML = (html: string) => {
        if (!html) return "";
        let processedHTML = html.replace(/<span class="ql-size-huge">/g, '<p class="text-4xl md:text-5xl text-foreground font-bold lg:w-[80%] w-full">')
        .replace(/<pre.*?>(.*?)<\/pre>/gs, `<div class="overflow-auto w-full my-2 text-foreground/90 bg-backgroundSidebar p-2 rounded-lg"><pre><code class="language-typescript">$1</code></pre></div>`)
        .replace(/<p>/g, '<p class="text-sm text-foreground/80 mt-2 leading-6">')
        return processedHTML;
      };

    return (
        <ClientOnly>
            <div className="mt-24 w-full sm:px-8">
                <div className="w-full">
                    <Link href="/projects" className="col-span-1 w-10 h-10 rounded-full bg-foreground/10 flex justify-center items-center hover:bg-foreground/5">
                        <IoArrowBackOutline className="text-foreground/40" />
                    </Link>
                    <div className="col-span-6 mt-8">
                        <div className="w-full h-4 flex flex-row items-center mb-4">
                            <span className="w-[2px] h-full bg-foreground/20" />
                            <span className="ml-6 text-[12px] text-foreground/50">{project?.createdAt && format(project?.createdAt, 'MMMM d, yyyy')}</span>
                        </div>
                        <div className="">
                            <p className="text-4xl md:text-5xl text-foreground font-bold lg:w-[80%] w-full">
                                {project?.title}
                            </p>
                            <Suspense>
                                <CarouselPlugin images={project?.images}/>
                            </Suspense>
                            <div dangerouslySetInnerHTML={{ __html: processHTML(project?.content) }} />
                        </div>
                    </div>
                </div>
            </div>
        </ClientOnly>
    );
}

export default ProjectPage;