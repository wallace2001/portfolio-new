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
        <div>
            <Navbar />
            <div className="w-full h-full flex justify-center flex-col items-center transition-all duration-150">
                <div className="mx-auto w-full min-h-screen md:max-w-6xl lg:px-8 bg-backgroundContent px-4 py-6">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default ClientOnly;