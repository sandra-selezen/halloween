import Image from 'next/image'
import { ICategoryCard } from '@/types'

interface IProps {
  card: ICategoryCard
}

export const CategoryCard = ({ card }: IProps) => {
  return (
    <div className='category__card'>
      <Image src={card.imageMain.src} alt={card.imageMain.alt} className='category__img' width={120} />
      <h3 className="category__title">{card.title}</h3>
      <p className="category__description">{card.description}</p>
      <Image src={card.imageSecondary.src} alt={card.imageSecondary.alt} className='category__star' width={40} />
    </div>
  )
}
