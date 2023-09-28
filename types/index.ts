import { StaticImageData } from "next/image"

export interface IImage {
  src: StaticImageData
  alt: string
}

export interface ICategoryCard {
  id: string
  imageMain: IImage
  imageSecondary: IImage
  title: string
  description: string
}