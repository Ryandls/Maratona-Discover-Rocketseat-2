const { response } = require('express');
const express = require('express');
const server = express();

//request, response
server.get('/', (req, res) => {
  return res.send('Fala tu');
});
server.listen(3000, () => console.log('rodando'));
