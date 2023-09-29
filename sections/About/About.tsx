import Image from "next/image"
import Link from "next/link"
import Scare from "../../public/images/about-scare.png"

export const About = () => {
  return (
    <section className="about section" id="about">
      <div className="shape__small"></div>
      <div className="shape__big"></div>
      <div className="about__container main-container main-grid">
        <div className="about__data">
          <h2 className="section__title">About The Night <br />Of Terror</h2>
          <p className="about__sescription">
            Halloween is celebrated every October 31 
            at night, walk around the city with your 
            friends and trick or treat, enjoy this 
            celebration under the full moon.
          </p>
          <Link href="#" className="button">Know More!!!</Link>
        </div>
        <Image src={Scare} alt="scare" className="about__img" width={300} />
      </div>
    </section>
  )
}
