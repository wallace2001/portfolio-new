
import { getUserProject } from "@/actions/fetch-profile";
import NotFound from "../not-found";
import ProjectsClient from "./client";

const ProjectsPage = async () => {
    const profile: User = await getUserProject();

    if (!profile) {
        return (
            <NotFound />
        );
    }

    return (
        <ProjectsClient />
    );
}

export default ProjectsPage;