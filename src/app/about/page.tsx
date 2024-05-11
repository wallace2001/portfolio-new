import { getUserAbout } from "@/actions/fetch-profile";
import NotFound from "../not-found";
import AboutClient from "./client";

const AboutPage = async () => {

    const profile: User = await getUserAbout();

    if (!profile) {
        return (
            <NotFound />
        );
    }

    return (
        <AboutClient user={profile} />
    );
}

export default AboutPage;