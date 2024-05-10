import ClientOnly from "@/components/ClientOnly";
import ProjectItem from "./components/project-item";
import { getUserProject } from "@/actions/fetch-profile";
import NotFound from "../not-found";

const ProjectsPage = async () => {

    const profile: User = await getUserProject();

    if (!profile) {
        return (
            <NotFound />
        );
    }

    return (
        <div className="mt-24">
            <div className="flex w-full flex-col">
                <p className="text-4xl md:text-5xl md:w-[70%] w-full text-foreground font-bold leading-10">{profile.ProfileUser.ProjectPage.title}</p>
                <p className="mt-4 text-sm text-foreground/80 md:w-[70%] w-full leading-7">{profile.ProfileUser.ProjectPage.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {profile?.Project.map(project => (
                    <ProjectItem key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;