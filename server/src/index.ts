import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Хранилище чаёв (в памяти)
const teas = [
  { id: 1, name: 'Зелёный чай', price: '150₽' },
  { id: 2, name: 'Чёрный чай', price: '130₽' },
  { id: 3, name: 'Улун', price: '170₽' },
];

let nextId = 4;

// GET запрос
app.get('/api/teas', (req, res) => {
  res.json(teas);
});

// POST запрос
app.post('/api/teas', (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Поле name и price обязательны' });
  }

  const newTea = {
    id: nextId++,
    name,
    description: description || '',
    price
  };

  teas.unshift(newTea);
  res.status(201).json(newTea);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
