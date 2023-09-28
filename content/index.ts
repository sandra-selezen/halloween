import pumpkin from '../public/images/category-pumpkin.png'
import ghost from '../public/images/category-ghost.png'
import whitchHat from '../public/images/category-witch-hat.png'
import stars from '../public/images/stars.png'

export const navLinks = [
  {
    id: 'home',
    href: '#home',
    title: 'Home',
  },
  {
    id: 'about',
    href: '#about',
    title: 'About us',
  },
  {
    id: 'items',
    href: '#items',
    title: 'Items',
  },
  {
    id: 'party',
    href: '#party',
    title: 'Party',
  }
];

export const categoryCard = [
  {
    id: 'pumpkin',
    imageMain: {
      src: pumpkin,
      alt: 'pumpkin'
    },
    imageSecondary: {
      src: stars,
      alt: 'stars'
    },
    title: 'Pumpkins',
    description: 'Light up horror pumpkins to scare at night'
  },
  {
    id: 'ghost',
    imageMain: {
      src: ghost,
      alt: 'ghost'
    },
    imageSecondary: {
      src: stars,
      alt: 'stars'
    },
    title: 'Ghost',
    description: 'Light up horror pumpkins to scare at night'
  },
  {
    id: 'witch-hat',
    imageMain: {
      src: whitchHat,
      alt: 'witch hat'
    },
    imageSecondary: {
      src: stars,
      alt: 'stars'
    },
    title: 'Witch Hat',
    description: 'The most elegant witch hats you can wear and scare'
  }
];