"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { RiCloseLine, RiMenu4Line } from 'react-icons/ri'
import Logo from '../../public/images/logo-skull.png'
import NavImg from '../../public/images/nav-bat.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='header' id='header'>
      <nav className='nav main-container'>
        <Link href={'#'} className='nav__logo'>
          <Image
            src={Logo}
            alt='Logo'
            width={20}
            height={20}
            className='logo-img'
          />
          Halloween
        </Link>
        <div className={`nav__menu ${isOpen ? 'show-menu' : ''}`} id='nav-menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link href={'#home'} className='nav__link'>Home</Link>
            </li>
            <li className='nav__item'>
              <Link href={'#about'} className='nav__link'>About us</Link>
            </li>
            <li className='nav__item'>
              <Link href={'#items'} className='nav__link'>Items</Link>
            </li>
            <li className='nav__item'>
              <Link href={'#party'} className='nav__link'>Party</Link>
            </li>
          </ul>

          {/* Close button */}
          <div className='nav__close' id='nav-close' onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </div>
          <Image src={NavImg} alt='Nav image' className='nav__img' width={180} />
        </div>
        {/* Toggle button */}
        <div className='nav__toggle' id='nav-toggle' onClick={() => setIsOpen(true)}>
          <RiMenu4Line />
        </div>
      </nav>
    </header>
  )
}
