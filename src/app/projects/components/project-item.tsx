"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { FaLink } from "react-icons/fa";

const ProjectItem = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="space-y-4 border rounded-md flex shadow flex-col">
            <div className="flex-1">
                <div className="space-y-1">
                    <Link
                        href={`#`}
                        key={'#'}
                        className={"text-sm flex-col group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-foreground hover:bg-foreground/5 rounded-lg transition"}
                        onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}
                    >
                        <div className="flex items-start">
                            <div className="w-12 h-12 rounded-full bg-foreground/10">

                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-[15px] mt-2 font-bold text-foreground/80">Ecommerce</p>
                            <p className="text-sm mt-2 text-foreground/50">Criando um sistema de ecommerce completo com todas as funcionalidades.</p>
                            <p className={
                                cn("mt-4 text-foreground/50 flex items-center",
                                isHovered ? "text-[#2CBDAA]" : ""
                                )
                            }>
                                <FaLink className="mr-2" />
                                github.com
                            </p>
                        </div>
                        {/* <div className="w-full h-4 flex flex-row items-center mb-4">
                            <span className="w-[2px] h-full bg-foreground/30" />
                            <span className="ml-6 text-[12px]">{day}</span>
                        </div>

                        <h4 className="text-foreground text-[14px]">{title}</h4>
                        <span className="my-4 text-[12px]">{description}</span>

                        <div className="flex justify-start items-center text-[#2CBDAA]">
                            <span>Ver projeto</span>
                            <MdOutlineKeyboardArrowRight />
                        </div> */}
                    </Link>

                </div>
            </div>
        </div>
    );
}
 
export default ProjectItem;