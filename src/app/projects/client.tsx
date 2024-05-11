"use client";

import ClientOnly from "@/components/ClientOnly";
import ProjectItem from "./components/project-item";
import { useQuery } from "@apollo/client";
import { GET_USER_PROJECTS } from "../graphql/actions/user/get-user-project";
import Loader from "@/components/Loader";
import EmptyState from "@/components/empty-state";

const ProjectsClient = () => {
    const { data: projectPageData, loading } = useQuery(GET_USER_PROJECTS, { variables: { name: 'Wallace' } });

    const profileUser: User = projectPageData?.getUser;

    if (loading) {
        return <Loader />
    }

    return (
        <ClientOnly>
            <div className="mt-24">
                <div className="flex w-full flex-col">
                    <p className="text-4xl md:text-5xl md:w-[70%] w-full text-foreground font-bold leading-10">{profileUser.ProfileUser.ProjectPage.title}</p>
                    <p className="mt-4 text-sm text-foreground/80 md:w-[70%] w-full leading-7">{profileUser.ProfileUser.ProjectPage.description}</p>
                </div>

                {!profileUser && !loading ? (
                                <EmptyState 
                                title = "Seu usuário ainda não possui um perfil."
                                subtitle= "Vá até a página 'Home' e comece a criar seu portfólio."
                            />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {profileUser?.Project.map(project => (
                        <ProjectItem key={project.title} project={project} />
                    ))}
                </div>
                )}
            </div>
        </ClientOnly>
    );
}

export default ProjectsClient;