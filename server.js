var ip = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var express = require('express');
var app = express();
var routes = require('./routes/index.js');

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(port, ip, function () {
  console.log('Example app listening on ' + ip + ':' + port + '!');
});