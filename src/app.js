import express from 'express';
import api from './api/index.js';
const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/api/v1', api);

app.get(
  '/example/middleware',
  (req, res, next) => {
    console.log('Moro olen täällä');
    next();
  },
  (req, res, next) => {
    console.log('Olen middleware ja käsittelen dataa');
    next();
  },
  (req, res) => {
    console.log('Moikka, pääsin perille asti');
    res.send('Tiedosto upattu ja käsitelty');
  }
);

export default app;
