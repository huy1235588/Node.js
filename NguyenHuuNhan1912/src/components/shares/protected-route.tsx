"use-client";
import React from 'react';
import { useRouter } from 'next/router';
import { useUser } from "@clerk/nextjs";
const ProtectedRoute = (props: {children: React.ReactNode}) => {
    const router = useRouter();
    const { user } = useUser();

    React.useEffect(() => {
        // Check if the user is authenticated, redirect to login if not.
        if (!user) {
            router.push('/sign-in'); // Redirect to the login page.
        }
    }, [user]);

    return <>{props.children}</>;
};

export default ProtectedRoute