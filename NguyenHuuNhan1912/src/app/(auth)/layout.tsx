import Footer from '@/components/landing/footer'
import Header from '@/components/landing/header'
import React from 'react'

const AuthLayout = (props: {
  children: React.ReactNode
}) => {
  return (
    <main>
      <div>{props.children}</div>
    </main>
  )
}

export default AuthLayout