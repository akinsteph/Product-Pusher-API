require('dotenv').config();

module.exports = {
  salesforce: {
    endpoint: process.env.SALESFORCE_ENDPOINT,
    version: process.env.SALESFORCE_VERSION,
    bearerToken: process.env.SALESFORCE_BEARER_TOKEN,
  },
  bigcommerce: {
    clientId: process.env.BIGCOMMERCE_CLIENT_ID,
    accessToken: process.env.BIGCOMMERCE_ACCESS_TOKEN,
    storeHash: process.env.BIGCOMMERCE_STORE_HASH,
    apiVersion: 'v3',
  },
};
