var ip = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.listen(port, ip, function () {
  console.log('Example app listening on ' + ip + ':' + port + '!');
});