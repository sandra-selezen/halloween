import { ItemCard } from "@/components/ItemCard/ItemCard"
import { items } from "@/content"

export const Items = () => {
  return (
    <section className="items section" id="items">
      <div className="shape__big"></div>
      <h2 className="section__title">Select your <br />lost item</h2>
      <div className="items__container main-container main-grid">
        {items.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
