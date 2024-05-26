import Footer from '@/components/landing/footer'
import Header from '@/components/landing/header'
import React from 'react'

const DashboardLayout = (props: {
  children: React.ReactNode
}) => {
  return (
    <main>
        <h1>Dashboard layout</h1>
        <div>{props.children}</div>
    </main>
  )
}

export default DashboardLayout