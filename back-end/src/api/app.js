require('dotenv').config();

const cors = require('cors');
require('express-async-errors');

const express = require('express');
const authRouter = require('../routers/authRouter');
const registerRouter = require('../routers/registerRouter');
const productRouter = require('../routers/productRouter');
const saleRouter = require('../routers/saleRouter');
const userRouter = require('../routers/userRouter');

const middlewares = require('../middlewares');

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', authRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);
app.use('/sales', saleRouter);
app.use('/users', userRouter);


app.use(middlewares.error);
module.exports = app;
