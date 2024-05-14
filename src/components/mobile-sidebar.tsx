"use client";

import { OPTIONS } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

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
                            {OPTIONS.map((route) => (
                                <SheetClose key={route.link} asChild>
                                    <Link
                                        href={route.link}
                                        className={
                                            cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-foreground hover:bg-foreground/10 rounded-lg transition",
                                                pathname.includes(route.link) ? "text-foreground bg-foreground/5" : "text-zinc-400")
                                        }
                                    >
                                        <div className="flex items-center flex-1">
                                            {/* <route.icon className={cn("h-5 w-5 mr-3", route.color)} /> */}
                                            {route.value}
                                        </div>
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;