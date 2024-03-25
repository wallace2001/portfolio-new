"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MobileSidebar from "./mobile-sidebar";
import { ModeToggle } from "./theme-toggle";

const options = [
    {
        id: "1",
        value: "Home",
        link: "/home"
    },
    {
        id: "2",
        value: "Sobre",
        link: "/about"
    },
    {
        id: "3",
        value: "Projetos",
        link: "/projects"
    },
    {
        id: "4",
        value: "Contato",
        link: "/speaking"
    },
    {
        id: "5",
        value: "Uses",
        link: "/uses"
    },
];

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);

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
            <div className="fixed top-10 left-0 right-0 px-10 md:hidden flex justify-between items-center w-full">
                <div className="flex justify-between w-full">
                    <MobileSidebar />
                    <div className="flex-1 flex justify-end">
                        <ModeToggle />
                    </div>
                </div>
            </div>
            <div className={`transition ease-in-out fixed top-10 left-0 right-0 w-full md:flex md:w-full hidden justify-center items-center`}>
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
                            {options.map(option => (
                                <Link className="m-2 text-[13px] hover:text-[#2CBDAA]" href={option.link} key={option.id}>
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