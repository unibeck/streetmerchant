import {Store} from './store';

export const BestBuyOther: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '[data-sticky-media-gallery] .fulfillment-add-to-cart-button',
      text: ['add to cart'],
    },
    maxPrice: {
      container:
        '[data-sticky-media-gallery] .priceView-price .priceView-hero-price span',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://api.bestbuy.com/click/-/6258941/pdp',
    },
    {
      brand: 'evga',
      cartUrl: 'https://api.bestbuy.com/click/-/6373500/cart',
      model: 'eagle',
      series: '1660',
      url: 'https://api.bestbuy.com/click/-/6373500/pdp',
    },
    {
      brand: 'msi',
      cartUrl: 'https://api.bestbuy.com/click/-/6330461/cart',
      model: 'eagle',
      series: '1660',
      url: 'https://api.bestbuy.com/click/-/6330461/pdp',
    },
    {
      brand: 'msi',
      cartUrl: 'https://api.bestbuy.com/click/-/6389333/cart',
      model: 'eagle',
      series: '1660',
      url: 'https://api.bestbuy.com/click/-/6389333/pdp',
    },
    {
      brand: 'asus',
      cartUrl: 'https://api.bestbuy.com/click/-/6405063/cart',
      model: 'eagle',
      series: '1660',
      url: 'https://api.bestbuy.com/click/-/6405063/pdp',
    },
    {
      brand: 'asus',
      cartUrl: 'https://api.bestbuy.com/click/-/6439463/cart',
      model: 'eagle',
      series: '2060',
      url: 'https://api.bestbuy.com/click/-/6439463/pdp',
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://api.bestbuy.com/click/-/6409181/cart',
      model: 'eagle',
      series: '1660',
      url: 'https://api.bestbuy.com/click/-/6409181/pdp',
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://api.bestbuy.com/click/-/6409180/cart',
      model: 'eagle',
      series: '1660',
      url: 'https://api.bestbuy.com/click/-/6409180/pdp',
    },
    {
      brand: 'gigabyte',
      cartUrl: 'https://api.bestbuy.com/click/-/6409171/cart',
      model: 'eagle',
      series: '1660',
      url: 'https://api.bestbuy.com/click/-/6409171/pdp',
    },

    {
      brand: 'evga',
      cartUrl: 'https://api.bestbuy.com/click/-/6290681/cart',
      model: 'eagle',
      series: '2080',
      url: 'https://api.bestbuy.com/click/-/6290681/pdp',
    },

    {
      brand: 'xfx',
      cartUrl: 'https://api.bestbuy.com/click/-/6092641/cart',
      model: 'eagle',
      series: 'rx580',
      url: 'https://api.bestbuy.com/click/-/6092641/pdp',
    },

    {
      brand: 'xfx',
      cartUrl: 'https://api.bestbuy.com/click/-/6202343/cart',
      model: 'eagle',
      series: 'rx570',
      url: 'https://api.bestbuy.com/click/-/6202343/pdp',
    },

    {
      brand: 'msi',
      cartUrl: 'https://api.bestbuy.com/click/-/6430143/cart',
      model: 'eagle',
      series: 'rx5600xt',
      url: 'https://api.bestbuy.com/click/-/6430143/pdp',
    },
  ],
  name: 'bestbuy-other',
};
