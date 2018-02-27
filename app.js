const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const debug = require('debug')('byui-design-lti:server');
const ltiMiddleware = require('./express-ims-lti');

const app = express();

// angular app is served from dist
app.use(express.static(path.join(__dirname, 'dist')));

//pretty logs
app.use(logger('dev'));

//parses incoming requests to JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//This handles the incomeing LTI Launch posts and auth
app.use(ltiMiddleware({
  consumer_key: process.env.LTI_KEY,
  consumer_secret: process.env.LTI_SECRET
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '1820';
app.set('port', port);

// for local dev faux https
if (!process.env.URL) {
  server = https.createServer({
    pfx: fs.readFileSync('crt/crt.pfx'),
    passphrase: 'byuicontent'
  }, app).listen(1820)
} else {
  const server = http.createServer(app);
}

server.listen(port, () => console.log('Listening on port ' + port));
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
