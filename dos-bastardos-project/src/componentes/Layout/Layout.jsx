import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Layout
