import { getUserContact } from "@/actions/fetch-profile";
import NotFound from "../not-found";
import SpeakingClient from "./client";

const SpeakingPage = async () => {
    const user = await getUserContact();

    if (!user) {
        return (
            <NotFound />
        );
    }

    return (
        <SpeakingClient user={user} />
    );
}

export default SpeakingPage;