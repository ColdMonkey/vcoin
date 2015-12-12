'use strict';

var request = require('request');
var path = require('path');

exports.checkout = function(){

  var timestamp = Math.floor(Date.now() / 1000);
  var sharedSecret = '/$9HqwLas7y8OB56NFK#K8tk2Hy4stQorIQ7P6Zf';
  var resourcePath = 'payment/data/';
  var callId = '6051423630452263801';
  var queryParams = 'CAO7WG8QF921D6DK8XMB21RCTIgL4E9f1sGrjuzR0c-ypV8Lg';
  var body = '';
  var preHashString = sharedSecret + timestamp + resourcePath + callId + 'apikey=' + queryParams;
  console.log(preHashString);
  var crypto = require('crypto');
  var hashString = crypto.createHash('sha256').update(preHashString).digest('hex');
  var xPayToken = 'x:' + timestamp + ':' + hashString;
  console.log(xPayToken);

  var options = {
    headers: {
        Accept: 'application/json',
        'X-PAY-TOKEN': xPayToken
    },
    url: 'https://qaint.vdp.visa.com/wallet-services-web/payment/data/6051423630452263801?apikey=CAO7WG8QF921D6DK8XMB21RCTIgL4E9f1sGrjuzR0c-ypV8Lg',
    rejectUnauthorized: false,
    simple: false,
    resolveWithFullResponse: true
  };

  request.get(options, function(err, response, body) {
    if (err) {
        callback(err);
    }

    callback(null, {
        response: response,
        body: body
    });
  });
}