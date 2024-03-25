"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

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


const MobileSidebar = () => {

    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="secondary" size="icon" className="md:hidden shadow">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side='top' className="p-0">
                <div className="space-y-4 py-4 flex flex-col h-full bg-backgroundContent text-white">
                    <div className="px-3 py-2 flex-1 mt-6">
                        <div className="space-y-1">
                            {options.map((route) => (
                                <Link
                                    href={route.link}
                                    key={route.link}
                                    className={
                                        cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-foreground hover:bg-foreground/10 rounded-lg transition",
                                            pathname === route.link ? "text-white bg-white/10" : "text-zinc-400")
                                    }
                                >
                                    <div className="flex items-center flex-1">
                                        {/* <route.icon className={cn("h-5 w-5 mr-3", route.color)} /> */}
                                        {route.value}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;