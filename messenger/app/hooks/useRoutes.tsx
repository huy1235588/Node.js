import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { PiAddressBook, PiChatCircleText, PiSignOut } from "react-icons/pi";
import { signOut } from "next-auth/react";

import useConversation from "./useConversation";

const useRoutes = () => {
    const pathName = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: PiChatCircleText,
            active: pathName === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: 'users',
            icon: PiAddressBook,
            active: pathName === '/useFrs'
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
