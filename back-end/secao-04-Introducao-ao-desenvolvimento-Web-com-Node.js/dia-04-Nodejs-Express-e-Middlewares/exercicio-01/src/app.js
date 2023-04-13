// app.js
const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescriptionAll = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCriateadat');
const validateRating = require('./middlewares/validateRatings');
const validateDifficulty = require('./middlewares/validateDifficulty');

const app = express();

app.use(express.json());

app.post('/activities', validateName, validatePrice, validateDescriptionAll, validateCreatedAt, validateRating, validateDifficulty, (_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});



module.exports = app;