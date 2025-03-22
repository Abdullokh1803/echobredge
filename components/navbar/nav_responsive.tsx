'use client'
import React, { useState } from 'react'
import Nav from './nav';
import NavMobile from './nav_mobile';

const NavResponsive = () => {

    const [showNav, setShowNav] = useState(false)
    const navShow = () => {
        setShowNav(true)
    }

    const navHide = () => {
        setShowNav(false)
    }

  return (
    <div>
        <Nav navShow={navShow} />
        <NavMobile showNav={showNav} navHide={navHide} />
    </div>
  )
}

export default NavResponsive