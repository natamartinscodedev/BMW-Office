'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/img/bmw-logo.svg'
import Link from 'next/link'
import { MapPin, MenuIcon, Search, ShoppingCart, User, X } from 'lucide-react'

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <nav className="container-navbar">
        <div className="box_navbar-links">
          <Link href="/" id="logo-bmw">
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
            <Link href="#">
              <User />
            </Link>
          </li>
          <li>
            <Link href="#">
              <ShoppingCart />
            </Link>
          </li>
          <li id="location-icon">
            <Link href="#">
              <MapPin />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Search />
            </Link>
          </li>
          <button id="menu_mobile" onClick={() => handleClick()}>
            {openMenu === true ? (
              <X color="white" />
            ) : (
              <MenuIcon color="white" />
            )}
          </button>
        </ul>
        {openMenu === true && (
          <div className="modal-menu">
            <ul
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
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
        )}
      </nav>
    </>
  )
}

export default NavBar
