var request = require('request');
var visaDirectCredentials = require('../config/secrets').visaDirect;
var visaDirectEndpoints = require('../config/service_endpoints').visaDirect;

var auth = visaDirectCredentials.username + ':' + visaDirectCredentials.password;

request.defaults({
  headers: {
    Accept: 'application/json',
    Authorization: new Buffer(auth).toString('base64')
  },
  json: true,
  rejectUnauthorized: false,
  simple: false,
  resolveWithFullResponse: true,
  pfx: fs.readFileSync('../certs/vcoin.pfx'),
  passphrase: 'password'
});

function getPullFunds(callback) {
  request.get(visaDirectEndpoints.PullFundsTransactions.GET, function(err, response, body) {
    if (err) {
      callback(err);
    }

    callback({
      response: response,
      body: body
    });
  });
}

function postPullFunds(callback) {
  var payload = {
    systemsTraceAuditNumber: 300259,
    retrievalReferenceNumber: "407509300259",
    localTransactionDateTime: "2021-10-26T21:32:52",
    acquiringBin: 409999,
    acquirerCountryCode: "101",
    senderPrimaryAccountNumber: "4957030100062431",
    senderCardExpiryDate: "2020-03",
    senderCurrencyCode: "USD",
    amount: "100",
    surcharge: "2.00",
    cavv: "0000010926000071934977253000000000000000",
    foreignExchangeFeeTransaction: "10.00",
    businessApplicationId: "AA",
    merchantCategoryCode: 6012,
    cardAcceptor: {
      name: "Kaley Cuoco",
      terminalId: "365539",
      idCode: "VMT200911026070",
      address: {
        state: "CA",
        county: "081",
        country: "USA",
        zipCode: "94404"
      }
    },
    magneticStripeData: {
      track1Data: "1010101010101010101010101010"
    },
    pointOfServiceData: {
      panEntryMode: "90",
      posConditionCode: "0",
      motoECIIndicator: "0"
    },
    pointOfServiceCapability: {
      posTerminalType: "4",
      posTerminalEntryCapability: "2"
    },
    feeProgramIndicator: "123"
  };
  request.post({ url: visaDirectEndpoints.PullFundsTransactions.POST, body: payload }, function(err, response, body) {
    if (err) {
      callback(err);
    }

    callback({
      response: response,
      body: body
    });
  });
}

function getPushFunds(callback) {
  request.get(visaDirectEndpoints.PushFundsTransactions.GET, function(err, response, body) {
    if (err) {
      callback(err);
    }

    callback({
      response: response,
      body: body
    });
  });
}

function postPushFunds(callback) {
  var payload = {
    systemsTraceAuditNumber: 300259,
    retrievalReferenceNumber: "407509300259",
    localTransactionDateTime: "2021-10-26T21:32:52",
    acquiringBin: 409999,
    acquirerCountryCode: "101",
    senderReference: "",
    senderAccountNumber: "4957030100062431",
    senderCountryCode: "USA",
    transactionCurrencyCode: "840",
    senderName: "Saranya",
    senderAddress: "44 Market St.",
    senderCity: "San Francisco",
    senderStateCode: "CA",
    recipientPrimaryAccountNumber: "4957030100062415",
    amount: "200",
    businessApplicationId: "AA",
    merchantCategoryCode: 6012,
    transactionId: 234234322342343,
    sourceOfFundsCode: "03",
    cardAcceptor: {
      name: "Emily Fields",
      terminalId: "365539",
      idCode: "VMT200911026070",
      address: {
        state: "CA",
        county: "081",
        country: "USA",
        zipCode: "94404"
      }
    },
    feeProgramIndicator: "123",
    recipientName: "Saranya"
  };

  request.post({ url: visaDirectEndpoints.PushFundsTransactions.POST, body: payload }, function(err, response, body) {
    if (err) {
      callback(err);
    }

    callback({
      response: response,
      body: body
    });
  });
}

exports.PullFundsTransactions = {
  GET: getPullFunds,
  POST: postPullFunds
};

exports.PushFundsTransactions = {
  GET: getPushFunds,
  POST: postPushFunds
};