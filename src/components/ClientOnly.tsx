'use client';
import { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface ClientOnlyProps {
    children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if (!hasMounted) return null;

    return (
        <>
            <Navbar />
            <div className="w-full h-full flex justify-center flex-col items-center transition-all duration-150">
                <div className="mx-auto w-full max-w-6xl lg:px-8 h-full bg-backgroundContent px-4 py-6 relative">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ClientOnly;