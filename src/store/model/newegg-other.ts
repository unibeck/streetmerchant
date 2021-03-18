import {Store} from './store';
import fetch from 'node-fetch';

export const NeweggOther: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['are you a human?'],
    },
    inStock: [
      {
        container: '.product-buy',
        text: ['add to cart'],
      },
      {
        container: '.loading-text',
        text: ['add to cart'],
      },
    ],
    maxPrice: {
      container: '.price-current',
    },
    outOfStock: [
      {
        container: '.product-inventory',
        text: [' out of stock.'],
      },
      {
        container: '.product-flag',
        text: ['out of stock '],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.newegg.com/western-digital-blue-500gb/p/N82E16820250087?Item=N82E16820250087',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930056',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/asrock-radeon-rx-6700-xt-rx6700xt-cld-12g/p/N82E16814930056',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930055',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/asrock-radeon-rx-6700-xt-rx6700xt-clp-12go/p/N82E16814930055',
    },
    {
      brand: 'asrock',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930054',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/asrock-radeon-rx-6700-xt-rx6700xt-pgd-12go/p/N82E16814930054',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126500',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/asus-radeon-rx-6700-xt-dual-rx6700xt-12g/p/N82E16814126500',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126502',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/asus-radeon-rx-6700-xt-rx6700xt-12g/p/N82E16814126502',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126498',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/asus-radeon-rx-6700-xt-rog-strix-rx6700xt-o12g-gaming/p/N82E16814126498',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126499',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/asus-radeon-rx-6700-xt-tuf-rx6700xt-o12g-gaming/p/N82E16814126499',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932415',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/gigabyte-radeon-rx-6700-xt-gv-r67xtaorus-e-12gd/p/N82E16814932415',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932417',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/gigabyte-radeon-rx-6700-xt-gv-r67xt-12gd-b/p/N82E16814932417',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932418',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/gigabyte-radeon-rx-6700-xt-gv-r67xteagle-12gd/p/N82E16814932418',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932416',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/gigabyte-radeon-rx-6700-xt-gv-r67xtgaming-oc-12gd/p/N82E16814932416',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137642',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/msi-radeon-rx-6700-xt-rx-6700-xt-gaming-x-12g/p/N82E16814137642',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137641',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/msi-radeon-rx-6700-xt-rx-6700-xt-mech-2x-12g/p/N82E16814137641',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137640',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/msi-rx6700xtmech-2x12goc/p/N82E16814137640',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131780',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/powercolor-radeon-rx-6700-xt-axrx-6700xt-12gbd6-m3dh/p/N82E16814131780',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131782',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/powercolor-radeon-rx-6700-xt-axrx-6700xt-12gbd6-3dhl/p/N82E16814131782',
    },
    {
      brand: 'powercolor',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131781',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/powercolor-radeon-rx-6700-xt-axrx-6700xt-12gbd6-3dhe-oc/p/N82E16814131781',
    },
    {
      brand: 'sapphire',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202398',
      model: 'eagle',
      series: 'rx6700xt',
      url:
        'https://www.newegg.com/sapphire-radeon-rx-6700-xt-21306-01-20g/p/N82E16814202398',
    },
  ],
  name: 'newegg-other',
  realTimeInventoryLookup: async (itemNumber: string) => {
    const request_url =
      'https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' +
      itemNumber;
    const response = await fetch(request_url);
    const response_json = await response.json();
    return (
      response_json.MainItem !== undefined &&
      response_json.MainItem.Instock === true
    );
  },
};
