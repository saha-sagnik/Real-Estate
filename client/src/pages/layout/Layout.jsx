import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './layout.scss'

function layout() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
      
    </div>
  )
}

export default layout