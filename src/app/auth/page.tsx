import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";
import AuthPage from "./client";

const AuthClient = async () => {

    const session = await getServerSession(authOptions);

    if (session?.user) return redirect('/dashboard');

    return (
        <>
            <AuthPage />
        </>
    );
}
 
export default AuthClient;