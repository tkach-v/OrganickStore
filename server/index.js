require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = require('./configs/cors.config');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/products', require('./routes/products.route'));
app.use('/orders', require('./routes/orders.route'));

app.all('*', (req, res) => {
  res.json({message: 'Resource not found'});
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});