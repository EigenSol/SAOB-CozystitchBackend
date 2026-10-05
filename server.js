const express = require("express");
const app = express();

app.use(express.json());

const items = [
  {
    id: 1,
    name: 'Handmade Crochet Bag',
    description: 'A handmade crochet shoulder bag made with soft cotton yarn.',
    price: 25.99,
    category: 'Bags',
    color: 'Cream',
    stock: 12,
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    name: 'Wool Winter Scarf',
    description: 'Warm knitted scarf designed for cold winter weather.',
    price: 18.5,
    category: 'Accessories',
    color: 'Brown',
    stock: 20,
    rating: 4.6,
    featured: false,
  },
  {
    id: 3,
    name: 'Knitted Beanie',
    description: 'Soft handmade knitted beanie with a comfortable stretch fit.',
    price: 14.99,
    category: 'Hats',
    color: 'Black',
    stock: 16,
    rating: 4.7,
    featured: true,
  },
  {
    id: 4,
    name: 'Crochet Flower Bouquet',
    description: 'Decorative handmade crochet flowers that never need watering.',
    price: 29.99,
    category: 'Home Decor',
    color: 'Multicolor',
    stock: 8,
    rating: 4.9,
    featured: true,
  },
  {
    id: 5,
    name: 'Knitted Baby Blanket',
    description: 'Soft knitted baby blanket made with gentle and comfortable yarn.',
    price: 39.99,
    category: 'Blankets',
    color: 'Light Blue',
    stock: 7,
    rating: 4.9,
    featured: false,
  },
  {
    id: 6,
    name: 'Crochet Keychain',
    description: 'Small handmade crochet keychain for bags, keys, or gifts.',
    price: 6.99,
    category: 'Accessories',
    color: 'Pink',
    stock: 35,
    rating: 4.5,
    featured: false,
  },
  {
    id: 7,
    name: 'Chunky Knit Sweater',
    description: 'Relaxed-fit chunky knitted sweater made for cooler weather.',
    price: 54.99,
    category: 'Clothing',
    color: 'Beige',
    stock: 10,
    rating: 4.7,
    featured: true,
  },
  {
    id: 8,
    name: 'Crochet Plant Pot Cover',
    description: 'Decorative crochet cover designed for small indoor plant pots.',
    price: 12.99,
    category: 'Home Decor',
    color: 'Green',
    stock: 18,
    rating: 4.4,
    featured: false,
  },
  {
    id: 9,
    name: 'Knitted Mittens',
    description: 'Warm handmade mittens with soft lining for winter use.',
    price: 16.99,
    category: 'Accessories',
    color: 'Gray',
    stock: 14,
    rating: 4.6,
    featured: false,
  },
  {
    id: 10,
    name: 'Crochet Cushion Cover',
    description: 'Textured handmade crochet cushion cover for home decoration.',
    price: 22.99,
    category: 'Home Decor',
    color: 'Mustard',
    stock: 11,
    rating: 4.8,
    featured: true,
  },
]

app.get("/api/items", (req, res)=>{
    res.json(items)
});

app.get("/api/items/:id", (req, res)=>{
 const item = items.find(
    (item) => item.id === Number(req.params.id)
 );
 if(!item){
     return res.status(404).json({
      message: 'Item not found',
    });
 };
  res.json(item)
});

app.listen(3000, ()=>{
     console.log('Server running on http://localhost:3000')
});