/* eslint-disable @next/next/no-async-client-component */

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import EmptyState from "@/components/empty-state";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) return redirect('/');

    return (
        <EmptyState title={`Olá ${session?.user.name}, dashboard em construção...`} />
    );
}
 
export default DashboardPage;