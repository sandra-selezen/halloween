import Image from 'next/image'
import PumpkinImg from '../../public/images/category-pumpkin.png'
import { categoryCard } from '@/content'
import { CategoryCard } from '@/components/CategoryCard/CategoryCard'

export const Category = () => {
  return (
    <section className="category section">
      <h2 className="section__title">Choose your <br />spooky category</h2>
      <div className="category__container container grid">
        {categoryCard.map((card) => (
          <div className="category__card" key={card.id}>
            <CategoryCard card={card} />
          </div>
        ))}
      </div>
    </section>
  )
}
