import Image from 'next/image'
import PumpkinImg from '../../public/images/category-pumpkin.png'
import { categoryCard } from '@/content'
import { CategoryCard } from '@/components/CategoryCard/CategoryCard'

export const Category = () => {
  return (
    <section className="category section">
      <div className="shape__small"></div>
      <h2 className="section__title">Choose your <br />spooky category</h2>
      <div className="category__container main-container main-grid">
        {categoryCard.map((card) => (
          <CategoryCard card={card} key={card.id} />
        ))}
      </div>
    </section>
  )
}
