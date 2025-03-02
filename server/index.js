require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Логгирование запросов
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} ${req.method} ${req.path}`);
  if (req.body) {
    console.log('Body:', req.body);
  }
  next();
});

// Базовый маршрут
app.get('/', (req, res) => {
  res.send('Сервер работает');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер успешно запущен на порту ${port}`);
}); 