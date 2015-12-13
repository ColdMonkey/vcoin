var request = require('request');
var req = request.defaults();
var fs = require('fs');

var userId = '3GZ0OGDSMZMNBP2XT6AF2190ezXsdECwL1CeKxo_vH95dmXtY';
var password = 'IhniuPH0r3lWCcm8r3A021oY96W1H0V';

req.get({
  uri: 'https://sandbox.api.visa.com/vdp/mutualauth/helloworld',
  key: fs.readFileSync('./example-key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
  }
}, function(err, response, body) {
  console.log(err);
  console.log(response);
  console.log(body);
});
