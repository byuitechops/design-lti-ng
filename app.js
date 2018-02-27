const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
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

const server = http.createServer(app);
server.listen(port, () => console.log('Listening on port ' + port));
