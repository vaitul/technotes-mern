import express from 'express';
import { ROUTES_CONST } from '../constants';
const OTHER_ROUTES = express.Router();

//HANDLING UNACCEPTED ROUTES
OTHER_ROUTES.all(ROUTES_CONST.ANY, (req, res) => {
  res.status(404);
  res.type('txt').send('404 Not Found!');
});

export default OTHER_ROUTES;
