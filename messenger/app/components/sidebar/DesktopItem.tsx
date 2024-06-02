'use client'

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
    label,
    icon: Icon,
    href,
    onClick,
    active
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    };

    return (
        <li onClick={handleClick} className="">
            <Link href={href} className={clsx('group flex justify-center gap-x-3 rounded-md p-4.5 text-sm leading-6 font-semibold text-gray-500  hover:bg-black/10',
                active && 'bg-backgroround-left-menu-selected text-black hover:bg-backgroround-left-menu-selected'
            )}>
                <Icon className="h-7 w-7 shrink-0" color="white" />
                <span className="sr-only">
                    {label}
                </span>
            </Link>
        </li>
    );
}

export default DesktopItem;