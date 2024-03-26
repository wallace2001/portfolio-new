import { ARTICLES } from "@/constants";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

interface ProjectPageProps {
    params: {
        projectId: string;
    };
}

const ProjectPage = ({ params }: ProjectPageProps) => {

    const { projectId } = params;

    const project = ARTICLES.find(article => article.id === projectId);

    return (
        <div className="mt-24 w-full">
            <div className="grid sm:grid-cols-7 gap-6 w-full">
                <Link href="/" className="col-span-1 w-10 h-10 rounded-full bg-foreground/10 flex justify-center items-center hover:bg-foreground/5">
                    <IoArrowBackOutline className="text-foreground/40" />
                </Link>
                <div className="col-span-6">
                    <div className="w-full h-4 flex flex-row items-center mb-4">
                        <span className="w-[2px] h-full bg-foreground/20" />
                        <span className="ml-6 text-[12px] text-foreground/50">{project?.day}</span>
                    </div>
                    <div className="">
                        <h2 className="mt-10 text-4xl font-bold mb-8 md:w-[80%] w-full">{project?.title}</h2>
                        <p className="text-sm text-foreground/50 mb-4">{project?.description}</p>
                        <p className="text-sm text-foreground/50">{project?.description}</p>
                        <p className="text-sm text-foreground/50 mt-4">{project?.title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;