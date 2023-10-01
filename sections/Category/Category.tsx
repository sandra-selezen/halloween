"use client"

import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"
import { categoryCard } from '@/content'
import { CategoryCard } from '@/components/CategoryCard/CategoryCard'

export const Category = () => {
  return (
    <section className="category section">
      <div className="shape__small"></div>
      <h2 className="section__title">Choose your <br />spooky category</h2>
      <motion.div
        variants={fadeIn('down', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="category__container main-container main-grid"
      >
        {categoryCard.map((card) => (
          <CategoryCard card={card} key={card.id} />
        ))}
      </motion.div>
    </section>
  )
}
