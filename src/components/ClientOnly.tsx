'use client';
import { useEffect, useState } from "react";

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
        <div className="w-full h-full flex justify-center flex-col items-center transition-all duration-150">
            <div className="w-full md:w-[80%] lg:w-[70%] h-full bg-backgroundContent px-4 lg:px-20 py-6 relative">
                {children}
            </div>
        </div>

    );
}

export default ClientOnly;