"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { format } from "date-fns";

interface IArticle {
    article: Article;
}

const Article = ({ article }: IArticle) => {
    const { id, title, description, createdAt } = article;

    const pathname = usePathname();
    return (
        <div className="space-y-4 flex flex-col bg-backgroundContent text-white">
            <div className="flex-1">
                <div className="space-y-1">
                    <Link
                        href={`/article/${id}`}
                        key={id}
                        className={
                            cn("text-sm flex-col group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-foreground hover:bg-foreground/10 rounded-lg transition",
                                pathname === "#" ? "text-white bg-white/10" : "text-zinc-400")
                        }
                    >
                        <div className="w-full h-4 flex flex-row items-center mb-4">
                            <span className="w-[2px] h-full bg-foreground/30" />
                            <span className="ml-6 text-[12px]">{format(new Date(createdAt), 'MMMM d, yyyy')}</span>
                        </div>

                        <h4 className="text-foreground text-[14px]">{title}</h4>
                        <span className="my-4 text-[12px]">{description}</span>

                        <div className="flex justify-start items-center text-[#2CBDAA]">
                            <span>Ver projeto</span>
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Article;