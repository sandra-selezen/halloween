"use client"

import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"
import { ItemCard } from "@/components/ItemCard/ItemCard"
import { items } from "@/content"

export const Items = () => {
  return (
    <section className="items section" id="items">
      <div className="shape__big"></div>
      <h2 className="section__title">Select your <br />lost item</h2>
      <motion.div
        variants={fadeIn('down', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="items__container main-container main-grid"
      >
        {items.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </motion.div>
    </section>
  )
}
