// Centralized product data used across the entire app

export const allProducts = [
  // Necklaces
  { id: 1,  name: 'Celestial Diamond Pendant',   category: 'Necklaces', price: 1299, image: './necklices1.avif', isOnSale: false, tag: 'New Arrivals'  },
  { id: 2,  name: 'Sapphire Drop Necklace',       category: 'Necklaces', price: 899,  image: './necklaces2.avif', isOnSale: true,  tag: 'Featured'     },
  { id: 3,  name: 'Gold Layered Chain',            category: 'Necklaces', price: 450,  image: './necklaces3.avif', isOnSale: false, tag: 'Best Sellers'  },
  { id: 4,  name: 'Pearl Strand Classic',          category: 'Necklaces', price: 620,  image: './necklaces4.avif', isOnSale: true,  tag: 'On Sale'       },
  { id: 5,  name: 'Aquamarine Pendant',            category: 'Necklaces', price: 1100, image: './necklaces5.avif', isOnSale: false, tag: 'Featured'     },
  { id: 6,  name: 'Vintage Locket Necklace',       category: 'Necklaces', price: 210,  image: './necklaces6.avif', isOnSale: true,  tag: 'On Sale'       },
  // Rings
  { id: 7,  name: 'Rose Gold Halo Ring',           category: 'Rings',     price: 980,  image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'New Arrivals'  },
  { id: 8,  name: 'Emerald Solitaire Ring',        category: 'Rings',     price: 2100, image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=600&q=80', isOnSale: true,  tag: 'Featured'     },
  { id: 9,  name: 'Diamond Eternity Band',         category: 'Rings',     price: 3400, image: 'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Best Sellers'  },
  { id: 10, name: 'Sapphire Halo Ring',            category: 'Rings',     price: 1650, image: 'https://images.unsplash.com/photo-1576022162879-b095c6f3ceab?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'New Arrivals'  },
  { id: 11, name: 'Ruby Solitaire Ring',            category: 'Rings',     price: 2200, image: 'https://images.unsplash.com/photo-1480882537056-e19f9b41cadb?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Featured'     },
  { id: 12, name: 'Opal Statement Ring',            category: 'Rings',     price: 440,  image: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=600&q=80', isOnSale: true,  tag: 'On Sale'       },
  // Bracelets
  { id: 13, name: 'Diamond Tennis Bracelet',       category: 'Bracelets', price: 3100, image: 'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'New Arrivals'  },
  { id: 14, name: 'Silver Charm Bracelet',         category: 'Bracelets', price: 340,  image: 'https://images.unsplash.com/photo-1573408301185-9519f94816d5?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Best Sellers'  },
  { id: 15, name: 'Pearl Strand Bracelet',         category: 'Bracelets', price: 520,  image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Featured'     },
  { id: 16, name: 'Gold Tennis Bracelet',          category: 'Bracelets', price: 1800, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Best Sellers'  },
  { id: 17, name: 'Crystal Bangle',               category: 'Bracelets', price: 145,  image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80', isOnSale: true,  tag: 'On Sale'       },
  { id: 18, name: 'Pavé Diamond Bangle',          category: 'Bracelets', price: 2600, image: 'https://images.unsplash.com/photo-1599643478524-fb66fa5320e5?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Featured'     },
  // Earrings
  { id: 19, name: 'Sapphire Drop Earrings',       category: 'Earrings',  price: 750,  image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'New Arrivals'  },
  { id: 20, name: 'Diamond Stud Earrings',        category: 'Earrings',  price: 980,  image: 'https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Best Sellers'  },
  { id: 21, name: 'Pearl Drop Earrings',          category: 'Earrings',  price: 420,  image: 'https://images.unsplash.com/photo-1576022162879-b095c6f3ceab?auto=format&fit=crop&w=600&q=80', isOnSale: true,  tag: 'On Sale'       },
  { id: 22, name: 'Gold Hoop Earrings',           category: 'Earrings',  price: 290,  image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Best Sellers'  },
  { id: 23, name: 'Amethyst Drop Earrings',       category: 'Earrings',  price: 189,  image: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=600&q=80', isOnSale: true,  tag: 'On Sale'       },
  { id: 24, name: 'Ruby Chandelier Earrings',     category: 'Earrings',  price: 1500, image: 'https://images.unsplash.com/photo-1480882537056-e19f9b41cadb?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Featured'     },
  // Bangles
  { id: 25, name: 'Emerald Bangle Set',           category: 'Bangles',   price: 840,  image: 'https://images.unsplash.com/photo-1573408301185-9519f94816d5?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'New Arrivals'  },
  { id: 26, name: 'Gold Stackable Bangle',        category: 'Bangles',   price: 560,  image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Featured'     },
  { id: 27, name: 'Diamond Set Bangle',           category: 'Bangles',   price: 3100, image: 'https://images.unsplash.com/photo-1599643478524-fb66fa5320e5?auto=format&fit=crop&w=600&q=80', isOnSale: true,  tag: 'On Sale'       },
  { id: 28, name: 'Vintage Carved Bangle',        category: 'Bangles',   price: 480,  image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80', isOnSale: true,  tag: 'On Sale'       },
  { id: 29, name: 'Enamel Floral Bangle',         category: 'Bangles',   price: 210,  image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'New Arrivals'  },
  { id: 30, name: 'Crystal Bangle Stack',         category: 'Bangles',   price: 320,  image: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=600&q=80', isOnSale: false, tag: 'Best Sellers'  },
];

export const categories = [
  { name: 'Necklaces', image: './category1.webp', count: 6  },
  { name: 'Rings',     image: './category2.avif', count: 6  },
  { name: 'Bracelets', image: './category3.png', count: 6  },
  { name: 'Earrings',  image: './category4.png', count: 6  },
  { name: 'Bangles',   image: './category5.avif', count: 6  },
];
