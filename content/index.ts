import pumpkin from '../public/images/category-pumpkin.png'
import ghost from '../public/images/category-ghost.png'
import whitchHat from '../public/images/category-witch-hat.png'
import stars from '../public/images/stars.png'
import itemPumpkin from '../public/images/home-pumpkin.png'
import itemApple from '../public/images/item-apple.png'
import itemBroom from '../public/images/item-broom.png'
import itemHat from '../public/images/item-witch-hat.png'
import itemSpider from '../public/images/item-spider.png'

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

export const items = [
  {
    id: 'apple',
    name: 'Candy Apple',
    price: '$4.99',
    image: {
      src: itemApple,
      alt: 'apple'
    }
  },
  {
    id: 'broom',
    name: 'Witch Broom',
    price: '$12.99',
    image: {
      src: itemBroom,
      alt: 'broom'
    }
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    price: '$7.99',
    image: {
      src: itemPumpkin,
      alt: 'pumpkin'
    }
  },
  {
    id: 'spider',
    name: 'Spider',
    price: '$9.99',
    image: {
      src: itemSpider,
      alt: 'spider'
    }
  },
  {
    id: 'hat',
    name: 'Witch Hat',
    price: '$15.99',
    image: {
      src: itemHat,
      alt: 'hat'
    }
  }
];