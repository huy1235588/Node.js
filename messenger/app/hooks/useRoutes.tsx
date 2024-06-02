import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { PiChatCircleText, PiChatCircleTextFill, PiSignOut } from "react-icons/pi";
import { signOut } from "next-auth/react";

import useConversation from "./useConversation";
import { FaAddressBook, FaRegAddressBook } from "react-icons/fa6";

const useRoutes = () => {
    const pathName = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: pathName === '/conversations' || !!conversationId ? PiChatCircleTextFill : PiChatCircleText,
            active: pathName === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: pathName === '/users' ? FaAddressBook : FaRegAddressBook,
            active: pathName === '/users'
        },
        {
            label: 'Logout',
            href: '#',
            onClick: () => signOut(),
            icon: PiSignOut
        }
    ], [pathName, conversationId]);

    return routes;
}

export default useRoutes;
