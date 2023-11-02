/* eslint-disable react-refresh/only-export-components */
import fetch from 'node-fetch';

export default async (req, res) => {
  // Forward the request to the external server
  const response = await fetch('https://www.zomato.com' + req.url, {
    method: req.method,
    headers: {
      'Access-Control-Allow-Origin':
        'https://zomato-clone-kappa-eight.vercel.app',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });

  // Send the response back to the client
  res.status(response.status);
  res.json(await response.json());
};
