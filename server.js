const express = require('express');
const next = require('next');
const dev = false;//process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(8083, 'localhost', (err) => {
      if (err) throw err;
      console.log('Server is listening on http://localhost:8083');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });