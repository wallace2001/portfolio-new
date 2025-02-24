"use client";

import ClientOnly from "@/components/ClientOnly";
import ProjectItem from "./components/project-item";
import { useQuery } from "@apollo/client";
import { GET_USER_PROJECTS } from "../graphql/actions/user/get-user-project";
import Loader from "@/components/Loader";
import EmptyState from "@/components/empty-state";

interface IProjectsClient {
    user: User;
}

const ProjectsClient = ({ user }: IProjectsClient) => {
    const { data: projectPageData, loading } = useQuery(GET_USER_PROJECTS, { variables: { name: 'Wallace' } });

    const profileUser: User = projectPageData?.getUser;

    return (
        <ClientOnly>
            <div className="mt-24">
            <div className="flex w-full flex-col">
                <p className="text-4xl md:text-5xl md:w-[70%] w-full text-foreground font-bold leading-10">{user.ProfileUser.ProjectPage.title}</p>
                <p className="mt-4 text-sm text-foreground/80 md:w-[70%] w-full leading-7">{user.ProfileUser.ProjectPage.description}</p>
            </div>

            {!profileUser && !loading ? (
                            <EmptyState 
                            title = "Algo de errado aconteceu."
                            subtitle= "Esse problema já está sendo resolvido..."
                        />
            ) : (
                loading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {profileUser?.Project.map(project => (
                        <ProjectItem key={project.title} project={project} />
                    ))}
                </div>
                )
            )}
        </div>
        </ClientOnly>
    );
}

export default ProjectsClient;