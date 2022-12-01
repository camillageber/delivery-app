require('dotenv').config();
require('express-async-errors');

const express = require('express');
const authRouter = require('../routers/authRouter');
const middlewares = require('../middlewares');

const app = express();

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', authRouter);

app.use(middlewares.error);
module.exports = app;
