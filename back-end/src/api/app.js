require('dotenv').config();

const cors = require('cors');
require('express-async-errors');

const express = require('express');
const authRouter = require('../routers/authRouter');
const registerRouter = require('../routers/registerRouter');
const middlewares = require('../middlewares');

const app = express();

app.use(cors());
app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', authRouter);
app.use('/register', registerRouter);

app.use(middlewares.error);
module.exports = app;
