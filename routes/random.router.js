const { Router } = require('express');
const { getData } = require('../services/random.services');

const randomRauter = Router();

randomRauter.get('/', getData);

module.exports = randomRauter;
