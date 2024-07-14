'use client'

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";

import { User } from "@prisma/client";

interface DesktopSidebarProps {
    currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    currentUser
}) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    console.log({currentUser})

    return (
        <div className="hidden sm:fixed sm:inset-y-0 sm:left-0 sm:z-40 sm:w-16 xl:px-6 sm:overflow-y-auto sm:bg-background-left-menu sm:pb-4 sm:flex sm:flex-col justify-between">
            <nav className="mt-4 flex flex-col justify-between">
                <ul role="list" className="flex flex-col items-center">
                    {routes.map((item) => (
                        <DesktopItem
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={item.active}
                            onClick={item.onClick}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
}
export default DesktopSidebar;