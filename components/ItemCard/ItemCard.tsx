import Image from "next/image"
import { RiHeart3Line } from "react-icons/ri"
import { IItemCard } from "@/types"

interface IProps {
  item: IItemCard
}

export const ItemCard = ({ item }: IProps) => {
  return (
    <article className="items__card">
      <Image src={item.image.src} alt={item.image.alt} className="items__img" width={100} />
      <h3 className="items__name">{item.name}</h3>
      <span className="items__price">{item.price}</span>
      <button className="items__button">
        <RiHeart3Line />
      </button>
    </article>
  )
}
