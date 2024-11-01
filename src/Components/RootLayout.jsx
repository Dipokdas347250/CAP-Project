import React from 'react'
import Header from './Header'
import Navber from './Navber'
import {Outlet} from "react-router-dom"

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Outlet/>
    </>
  )
}

export default RootLayout