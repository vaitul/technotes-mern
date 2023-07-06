/* eslint-disable */

import axios from 'axios';

module.exports = async function () {
  // Configure axios for tests to use.
  const host = process.env.NX_HOST ?? 'localhost';
  const port = process.env.NX_SERVER_PORT ?? '3500';
  axios.defaults.baseURL = `http://${host}:${port}`;
};
