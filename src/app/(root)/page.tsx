import { getUser } from "@/actions/fetch-profile";
import HomeClient from "./client";
import EmptyState from "@/components/empty-state";
import NotFound from "../not-found";

const Home = async () => {
    const user = await getUser();

    if (!user) {
        return (
            <NotFound />
        );
    }

    return (
        <HomeClient user={user} />
    );
}

export default Home;