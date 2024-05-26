"use client";
import productApi from "@/api/modules/product.api";
import { useEffect } from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser 

} from "@clerk/nextjs";
import ProtectedRoute from "@/components/shares/protected-route";
const LandingPage = () => {
  const { user } = useUser();
  console.log(user);
  const getApiProduct = async () => {
    console.log("CALL API");
    try {
      const response = await productApi.getAllProducts();
      console.log(response);
    }
    catch(error) {
      console.log(`Error: ${error}`);
    }
  }

  useEffect(() => {
    getApiProduct();
  });
  return (
      <main>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton/>
        </SignedOut>
        <h1>Overview langding page</h1>
      </main>
  )
}

export default LandingPage;