import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
}

let products: Product[] = [
  { id: 1, title: 'Ноутбук', description: 'Мощный игровой ноутбук', price: '75000' },
  { id: 2, title: 'Смартфон', description: 'Флагманский смартфон', price: '65000' },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const newProduct: Product = {
    id: Date.now(),
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});