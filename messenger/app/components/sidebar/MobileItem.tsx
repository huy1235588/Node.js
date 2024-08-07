'use client'

import Link from "next/link";
import clsx from "clsx";

interface MobileItemrProps {
    label: string;
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

const MobileItem: React.FC<MobileItemrProps> = ({
    label,
    href,
    icon: Icon,
    active,
    onClick
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

    return (
        <Link onClick={onClick} href={href} className={clsx('group flex flex-wrap gap-x-3 text-sm leading-6 font-semibold w-full justify-center text-gray-500 rounded-full hover:bg-gray-200 transition-colors',
            active && " text-background-left-menu p-2", !active && "p-4  hover:text-black"
        )}>
            <Icon className="h6 w-6"
                 color={active ? "#0091ff" : undefined}
            />
            <span className={clsx(!active && 'sr-only', active && "block w-full text-center leading-4 text-menu-selected")} >
                {label}
            </span>
        </Link>
    );
}

export default MobileItem;
