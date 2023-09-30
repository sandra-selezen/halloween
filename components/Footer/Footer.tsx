import Link from "next/link"
import Image from "next/image"
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri"
import Logo from "../../public/images/logo-skull.png"
import Tree1 from "../../public/images/footer-tree1.png"
import Tree2 from "../../public/images/footer-tree2.png"

export const Footer = () => {
  return (
    <footer className="footer section">
      <div className="shape__small"></div>
      <div className="shape__big"></div>
      <div className="footer__container main-container main-grid">
        <div>
          <Link href="#" className="footer__logo">
            <Image src={Logo} alt="logo" width={20} />
            Halloween
          </Link>
          <p className="footer__description">
            Enjoy the spookiest <br /> 
            night of your life.
          </p>
        </div>

        <div className="footer__content">
          <div>
            <h3 className="footer__title">About Us</h3>
            <ul className="footer__links">
              <li>
                <Link href="#" className="footer__link">About Us</Link>
              </li>
              <li>
                <Link href="#" className="footer__link">Features</Link>
              </li>
              <li>
                <Link href="#" className="footer__link">News & Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Services</h3>
            <ul className="footer__links">
              <li>
                <Link href="#" className="footer__link">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="footer__link">Discounts</Link>
              </li>
              <li>
                <Link href="#" className="footer__link">Send a gift</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links">
              <li>
                <Link href="#" className="footer__link">Blog</Link>
              </li>
              <li>
                <Link href="#" className="footer__link">Celebrations</Link>
              </li>
              <li>
                <Link href="#" className="footer__link">About</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Social Media</h3>
            <ul className="footer__social">
              <li>
                <Link href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                  <RiFacebookCircleFill />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                  <RiInstagramFill />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/" target="_blank" className="footer__social-link">
                  <RiTwitterXFill />
                </Link>
              </li>
            </ul>
          </div>

          <Image src={Tree1} alt="tree" className="footer__tree-1" width={150} />
          <Image src={Tree2} alt="tree" className="footer__tree-2" width={150} />
        </div>
      </div>
      <span className="footer__copy">Developed with 💙💛 by <Link href="https://github.com/sandra-selezen">Sandra Selezen</Link></span>
    </footer>
  )
}
