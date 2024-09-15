import React from 'react'
import Header from './components/Header/Header'
import SideBar from './components/Sidebar/SideBar'
import DashMain from './components/dashMain/DashMain'
import { Outlet } from 'react-router-dom'

function Wrapper() {
  return (
    <>
    <Header></Header>
    <SideBar></SideBar>
    <DashMain>
        <Outlet></Outlet>
    </DashMain>
    </>
  )
}

export default Wrapper