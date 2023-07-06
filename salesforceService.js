const axios = require('axios');
const config = require('./config');

const getProducts = async () => {
  const url = `${config.salesforce.endpoint}/services/data/v${config.salesforce.version}/queryAll/?q=SELECT+Id+FROM+Auctifera__Art_Object__c`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${config.salesforce.bearerToken}`,
      },
    });

    const productIds = response.data.records.map((record) => record.Id);

    const productDetails = await Promise.all(
      productIds.map((productId) => getProductDetails(productId))
    );

    return productDetails;
  } catch (error) {
    console.error('Error fetching products from Salesforce:', error);
    throw new Error('An error occurred while fetching products from Salesforce');
  }
};

const getProductDetails = async (productId) => {
  const url = `${config.salesforce.endpoint}/services/data/v${config.salesforce.version}/sobjects/Auctifera__Art_Object__c/${productId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${config.salesforce.bearerToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Error fetching product details for ID ${productId}:`, error);
    throw new Error(`An error occurred while fetching product details for ID ${productId}`);
  }
};

module.exports = {
  getProducts,
  getProductDetails,
};
