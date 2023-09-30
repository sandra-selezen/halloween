import Image from "next/image"
import Link from "next/link"
import Cauldron from "../../public/images/party-cauldron.png"
import Stars from "../../public/images/stars.png"

export const Party = () => {
  return (
    <section className="party section" id="party">
      <div className="party-container main-container main-grid">
        <div className="party__data">
          <h2 className="section__title">Halloween <br />party 31 October</h2>
          <p className="party__description">
            Organize a great Halloween party and 
            enjoy the creepiest night of terror with all 
            your friends.
          </p>
          <Link href="#" className="button">Start The Party!!!</Link>
        </div>
        <div className="party__images">
          <Image src={Cauldron} alt="party cauldron" className="party__img" width={250} />
          <Image src={Stars} alt="stars" className="party__star-1" width={50} />
          <Image src={Stars} alt="stars" className="party__star-2" width={50} />
        </div>
      </div>
    </section>
  )
}
