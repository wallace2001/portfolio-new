import Link from "next/link";
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
    return (
        <>
            <div className="md:hidden flex justify-between items-center">
                <MobileSidebar />
                <div className="flex-1 flex justify-end">
                    <ModeToggle />
                </div>
            </div>
            <div className="md:flex hidden justify-between items-center">
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
                            <Link className="m-2 text-[13px] transition duration-150 hover:text-[#2CBDAA]" href={option.link} key={option.id}>
                                {option.value}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex justify-end">
                    <ModeToggle />
                </div>
            </div>
        </>
    );
}

export default Navbar;