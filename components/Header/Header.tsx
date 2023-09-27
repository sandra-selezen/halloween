import Image from 'next/image'
import Link from 'next/link'
import { RiCloseLine, RiMenu4Line } from 'react-icons/ri'
import Logo from '../../public/images/logo-skull.png'
import NavImg from '../../public/images/nav-bat.png'

export const Header = () => {
  return (
    <header id='header'>
      <nav>
        <Link href={'#'} className='nav__logo'>
          <Image
            src={Logo}
            alt='Logo'
          />
          Halloween
        </Link>
        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link href={'#home'}>Home</Link>
            </li>
            <li className='nav__item'>
              <Link href={'#about'}>About us</Link>
            </li>
            <li className='nav__item'>
              <Link href={'#items'}>Items</Link>
            </li>
            <li className='nav__item'>
              <Link href={'#party'}>Party</Link>
            </li>
          </ul>

          {/* Close button */}
          <div className='nav__close' id='nav-close'>
            <RiCloseLine />
          </div>
          <Image src={NavImg} alt='Nav image' className='nav__img' />
        </div>
        {/* Toggle button */}
        <div className='nav__toggle' id='nav-toggle'>
          <RiMenu4Line />
        </div>
      </nav>
    </header>
  )
}
