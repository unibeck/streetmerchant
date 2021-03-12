import {Store} from './store';

export const AmazonOther: Store = {
  backoffStatusCodes: [403, 429, 503],
  captchaDeterrent: {
    hardLinks: [
      'https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video',
      'https://www.amazon.com/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&ref_=nav_cs_whole_foods_in_region',
      'https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb',
    ],
    searchTerms: ['treehut', 'home+decor'],
    searchUrl: 'https://www.amazon.com/s?k=%%s&i=todays-deals&ref=nb_sb_noss_2',
  },
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    inStock: [
      {
        container: '#add-to-cart-button',
        text: ['add to cart'],
      },
      {
        container: '#buy-now-button',
        text: ['buy now'],
      },
    ],
    maxPrice: {
      container: '#priceblock_ourprice',
    },
  },
  links: [
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08WHJPBFX&Quantity.1=1',
      model: 'tuf',
      series: '3060',
      url: 'https://www.amazon.com/dp/B08WHJPBFX',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08WGTL4CW&Quantity.1=1',
      model: 'strix',
      series: '3060',
      url: 'https://www.amazon.com/dp/B08WGTL4CW',
    },

    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07P9G4QK1&Quantity.1=1',
      model: 'dual',
      series: '1660',
      url: 'https://www.amazon.com/dp/B07P9G4QK1',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07ZHDZ1K6&Quantity.1=1',
      model: 'dual',
      series: '1660',
      url: 'https://www.amazon.com/dp/B07ZHDZ1K6',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07ZK69HDK&Quantity.1=1',
      model: 'gaming',
      series: '1660',
      url: 'https://www.amazon.com/dp/B07ZK69HDK',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07RJGL33C&Quantity.1=1',
      model: 'gaming',
      series: '1660',
      url: 'https://www.amazon.com/dp/B07RJGL33C',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07PGLLWRY&Quantity.1=1',
      model: 'gaming',
      series: '1660',
      url: 'https://www.amazon.com/dp/B07PGLLWRY',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07ZHZL2JB&Quantity.1=1',
      model: 'gaming',
      series: '1660',
      url: 'https://www.amazon.com/dp/B07ZHZL2JB',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07ZHWQ81N&Quantity.1=1',
      model: 'gaming',
      series: '1660',
      url: 'https://www.amazon.com/dp/B07ZHWQ81N',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B01JHQT1SE&Quantity.1=1',
      model: 'gaming',
      series: '1660',
      url: 'https://www.amazon.com/dp/B01JHQT1SE',
    },

    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07MVZG7Z9&Quantity.1=1',
      model: 'gaming',
      series: '2060',
      url: 'https://www.amazon.com/dp/B07MVZG7Z9',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B083GGYNQ6&Quantity.1=1',
      model: 'gaming',
      series: '2060',
      url: 'https://www.amazon.com/dp/B083GGYNQ6',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B083GH7LXW&Quantity.1=1',
      model: 'gaming',
      series: '2060',
      url: 'https://www.amazon.com/dp/B083GH7LXW',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07R1NVYZB&Quantity.1=1',
      model: 'gaming',
      series: '2060',
      url: 'https://www.amazon.com/dp/B07R1NVYZB',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07MC63K76&Quantity.1=1',
      model: 'gaming',
      series: '2060',
      url: 'https://www.amazon.com/dp/B07MC63K76',
    },

    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0856XW6P1&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B0856XW6P1',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07Y2R5Y2G&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07Y2R5Y2G',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07TX7YNRJ&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07TX7YNRJ',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07WN6WB4G&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07WN6WB4G',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07TV9CLL5&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07TV9CLL5',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07TXRW3HX&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07TXRW3HX',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07TYWQ1SW&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07TYWQ1SW',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B086NYVHW5&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B086NYVHW5',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07V6SJLSG&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07V6SJLSG',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07XSPWMP9&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07XSPWMP9',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B082P1BF7H&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B082P1BF7H',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07YXPVBWW&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07YXPVBWW',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B0856BVRFL&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B0856BVRFL',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B081YJPKTM&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B081YJPKTM',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07JCD8GQN&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07JCD8GQN',
    },
    {
      brand: 'nvidia',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07VDC5FDJ&Quantity.1=1',
      model: 'gaming',
      series: '2070',
      url: 'https://www.amazon.com/dp/B07VDC5FDJ',
    },

    {
      brand: 'nvidia',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07GPW17YM&Quantity.1=1',
      model: 'gaming',
      series: '2080',
      url: 'https://www.amazon.com/dp/B07GPW17YM',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08CLV8CKP&Quantity.1=1',
      model: 'gaming',
      series: '2080',
      url: 'https://www.amazon.com/dp/B08CLV8CKP',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07VDMGYGZ&Quantity.1=1',
      model: 'gaming',
      series: '2080',
      url: 'https://www.amazon.com/dp/B07VDMGYGZ',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07VFKM4VQ&Quantity.1=1',
      model: 'gaming',
      series: '2080',
      url: 'https://www.amazon.com/dp/B07VFKM4VQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B088DJQ2PQ&Quantity.1=1',
      model: 'gaming',
      series: '2080',
      url: 'https://www.amazon.com/dp/B088DJQ2PQ',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07VCH31N9&Quantity.1=1',
      model: 'gaming',
      series: '2080',
      url: 'https://www.amazon.com/dp/B07VCH31N9',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07VHSJ4GT&Quantity.1=1',
      model: 'gaming',
      series: '2080',
      url: 'https://www.amazon.com/dp/B07VHSJ4GT',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07VJPNG1M&Quantity.1=1',
      model: 'gaming',
      series: '2080',
      url: 'https://www.amazon.com/dp/B07VJPNG1M',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07VHSJ4GV&Quantity.1=1',
      model: 'gaming',
      series: '2080',
      url: 'https://www.amazon.com/dp/B07VHSJ4GV',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07J5LCQNF&Quantity.1=1',
      model: 'gaming',
      series: '2080',
      url: 'https://www.amazon.com/dp/B07J5LCQNF',
    },

    {
      brand: 'nvidia',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07HWMDDMK&Quantity.1=1',
      model: 'gaming',
      series: '2080ti',
      url: 'https://www.amazon.com/dp/B07HWMDDMK',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07JVGQTRK&Quantity.1=1',
      model: 'gaming',
      series: '2080ti',
      url: 'https://www.amazon.com/dp/B07JVGQTRK',
    },
  ],
  name: 'amazon-other',
};
