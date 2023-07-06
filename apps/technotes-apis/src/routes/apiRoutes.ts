import express from 'express';
import { ROUTES_CONST } from '../constants';
const API_ROUTES = express.Router();

API_ROUTES.get('/', (req, res) => {
  res.send('Hello');
});

export default API_ROUTES;
