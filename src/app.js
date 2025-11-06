import express from 'express';
import api from './api/index.js';
const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/api/v1', api);

app.get('/api/v1', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/test', (request, response) => {
  const responseData = {vastaus: 'toimii myös näin'};
  response.send(responseData);
});

app.get('/api/v1/cats', (req, res) => {
  res.json(cats);
});

app.get('/api/v1/cats/:id', (req, res) => {
  const cat = cats.find((cat) => cat.cat_id === parseInt(req.params.id));
  if (cat) {
    res.json(cat);
  } else {
    res.status(404).json({message: 'cat not found'});
  }
});

app.post('/api/v1/cats', (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

export default app;
