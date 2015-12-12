module.exports = {
  visaDirect: {
    PullFundsTransactions: {
      GET: 'https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions/{transaction-id}',
      POST: 'https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions'
    },
    PushFundsTransactions: {
      GET: 'https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pushfundstransactions/{transaction-id}',
      POST: 'https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pushfundstransactions'
    }
  }
};