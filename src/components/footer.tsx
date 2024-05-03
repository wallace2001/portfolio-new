"use client";

import { OPTIONS } from "@/constants";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
    return (
        <footer className="w-full flex justify-center flex-col items-center transition-all duration-150">
            <div className="w-full bg-backgroundContent">
                <Separator className="h-[2px]" />

                <div className=" px-52 flex justify-between items-center my-8 lg:flex-row flex-col">
                    <div className="flex justify-between items-center">
                        {OPTIONS.map(option => (
                            <Link className="m-2 text-[13px] font-bold text-foreground/80 hover:text-[#2CBDAA]" href={option.link} key={option.id}>
                                {option.value}
                            </Link>
                        ))}
                    </div>
                    <span className="text-sm text-foreground/50">© 2024 Wallace Silva. Todos os direitos reservados.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;