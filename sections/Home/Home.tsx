import Image from 'next/image'
import Link from 'next/link'
import StarsImg from '../../public/images/stars.png'
import PumpkinImg from '../../public/images/home-pumpkin.png'
import Tree1 from '../../public/images/home-tree1.png'
import Tree2 from '../../public/images/home-tree2.png'

export const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container main-container main-grid'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>Halloween</span> Trick Or Treat!!!
            <Image src={StarsImg} alt='stars' className='home__title-img-1' />
            <Image src={StarsImg} alt='stars' className='home__title-img-2' />
          </h1>
          <p className='home__description'>This Halloween, enjoy trick-or-treating with your friends and spend a terrifying night under the full moon.</p>
          <Link href={'#'} className='button'>Explore Now!!!</Link>
        </div>
        <Image src={Tree1} alt='tree' className='home__tree-1' />
        <Image src={Tree2} alt='tree' className='home__tree-2' />
      </div>
    </section>
  )
}
