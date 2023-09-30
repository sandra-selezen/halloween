"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { RiCloseLine, RiMenu4Line } from 'react-icons/ri'
import Logo from '../../public/images/logo-skull.png'
import NavImg from '../../public/images/nav-bat.png'
import { navLinks } from '@/content'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`header ${scrolling ? 'bg-header' : ''}`} id='header'>
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
            {navLinks.map((link) => (
              <li className='nav__item' key={link.id}>
                <Link href={link.href} className='nav__link'>{link.title}</Link>
              </li>
            ))}
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
