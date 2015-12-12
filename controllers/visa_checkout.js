var request = require('request');
var path = require('path');
var visaCheckoutService = require('../services/visa_checkout_service');

exports.getCheckout = function(req, res, next) {
  visaCheckoutService.getCheckoutService(function(err, result) {
    if (err) {
      res.status('400').json(err);
      next(err);
    }

    res.status('200').json(result);

  });
};