"use client";
import Footer from '@/components/landing/footer'
import Header from '@/components/landing/header'
import React, { useEffect } from 'react'
const LandingLayout = (props: {children: React.ReactNode}) => {
  useEffect(() => {
    console.log("HELLO NEXT");
  }, []);
  return (
    <main>
      <Header/>
        <div>{props.children}</div>
      <Footer/>
    </main>
  )
}

export default LandingLayout;