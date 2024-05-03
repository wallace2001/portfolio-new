"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLink } from "react-icons/fa";

interface IProjectItem {
    project: Project;
}

const ProjectItem = ({ project }: IProjectItem) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="space-y-4 border rounded-md flex shadow flex-col">
            <div className="flex-1">
                <div className="space-y-1">
                    <Link
                        href={`/projects/${project?.id}`}
                        key={'#'}
                        className={"text-sm flex-col group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-foreground hover:bg-foreground/5 rounded-lg transition"}
                        onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}
                    >
                        <div className="flex items-start">
                            <div className="w-12 h-12 rounded-full bg-foreground/10">
                                <Image 
                                    src={project?.image.url}
                                    width={720}
                                    height={720}
                                    className="w-full h-full object-cover rounded-full"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-[15px] mt-2 font-bold text-foreground/80">{project?.title}</p>
                            <p className="text-sm mt-2 text-foreground/50">{project?.description}</p>
                            <p className={
                                cn("mt-4 text-foreground/50 flex items-center",
                                isHovered ? "text-[#2CBDAA]" : ""
                                )
                            }>
                                <FaLink className="mr-2" />
                                Ver Projeto
                            </p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}
 
export default ProjectItem;