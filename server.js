require('dotenv').config();
const http = require('http');
const httpProxy = require('http-proxy');

const { PORT = 3000, API } = process.env ;

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: API , secure: false});
});

proxy.on('error', (err, req, res) => {
  console.error(err);
  res.status(500).send('Error interno del servidor');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

