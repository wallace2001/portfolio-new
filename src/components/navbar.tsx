"use client";

import { OPTIONS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileSidebar from "./mobile-sidebar";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let lastScrollTop = 0;

        function handleScroll() {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                setIsFixed(false);
            } else {
                setIsFixed(true);
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="z-10 fixed top-10 left-0 right-0 px-10 md:hidden flex justify-between items-center">
                <div className="flex justify-end w-full">
                    <div className="mr-4">
                        <MobileSidebar />
                    </div>
                    <div>
                        <ModeToggle />
                    </div>
                </div>
            </div>
            <div className={`z-10 w-[20rem] transition ease-in-out fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex hidden justify-center items-center`}>
                <div className="flex justify-between items-center">
                    <div className="flex-1" />
                    <div className="flex-1 flex justify-center">
                        <div className="
                            pl-2 
                            pr-2 
                            h-10 
                            shadow-sm
                            bg-secondaryContent
                            rounded-full 
                            flex 
                            items-center
                            font-bold
                        ">
                            {OPTIONS.map(option => (
                                <Link className={
                                    cn("m-2 text-[13px] hover:text-[#2CBDAA]",
                                    ( option.link === '/' ? pathname === option.link : pathname.includes(option.link)) ? 'text-[#2CBDAA]' : ''
                                    )
                                } href={option.link} key={option.id}>
                                    {option.value}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end ml-12">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;