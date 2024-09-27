'use client'

import Image from 'next/image'
import React from 'react'
import Logo from '@/img/bmw-logo.svg'
import Link from 'next/link'

const NavBar = () => {
  return (
    <>
      <nav className="container-navbar">
        <div className="box_navbar-links">
          <Link href="/">
            <Image src={Logo} alt="" />
          </Link>
          <ul className="card-links-navbar">
            <li>
              <Link href="#">Modelos</Link>
            </li>
            <li>
              <Link href="#">Configure o seu</Link>
            </li>
            <li>
              <Link href="#">Compre Online</Link>
            </li>
            <li>
              <Link href="#">Descubra a BMW</Link>
            </li>
            <li>
              <Link href="#">Recall</Link>
            </li>
          </ul>
        </div>
        <ul className="card-btns-navbar">
          <li>
            <Link href="#">use</Link>
          </li>
          <li>
            <Link href="#">pay</Link>
          </li>
          <li>
            <Link href="#">location</Link>
          </li>
          <li>
            <Link href="#">search</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
