var express = require('express');
var index = require('./routes/index');
var gif = require('./routes/gif')
var app = express();

var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use('/', index);
app.use('/gif', gif);
app.use('/*', index);
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server listening on port', server.address().port);
});
