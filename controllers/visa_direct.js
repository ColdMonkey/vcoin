var visaDirectServices = require('../services/visa_direct_service.js');

exports.getPullFunds = function(req, res, next) {
  visaDirectServices.PullFundsTransactions.GET(function(err, result) {
    if (err) {
      next(err);
    }

    res.status('200').json(result);
  });
};

exports.postPullFunds = function(req, res, next) {
  visaDirectServices.PullFundsTransactions.POST(function(err, result) {
    if (err) {
      next(err);
    }

    res.status('200').json(result);
  });
};

exports.getPushFunds = function(req, res, next) {
  visaDirectServices.PushFundsTransactions.GET(function(err, result) {
    if (err) {
      console.log(err);
      next(err);
    }

    res.status('200').json(result);
  });
};

exports.postPushFunds = function(req, res, next) {
  visaDirectServices.PushFundsTransactions.POST(function(err, result) {
    if (err) {
      next(err);
    }

    res.status('200').json(result);
  });
};

