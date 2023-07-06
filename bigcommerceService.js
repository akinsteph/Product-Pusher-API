const BigCommerce = require('node-bigcommerce');
const config = require('./config');

const bigcommerce = new BigCommerce({
  clientId: config.bigcommerce.clientId,
  accessToken: config.bigcommerce.accessToken,
  storeHash: config.bigcommerce.storeHash,
  apiVersion: config.bigcommerce.apiVersion,
});

const createProduct = async (productData) => {
  try {
    const newProduct = {
      name: productData.Name,
      price: productData.Auctifera__Public_Price__c,
      description: productData.Auctifera__Description_English__c,
      sku: productData.Artwork_External_ID__c,
      type: productData.Auctifera__Type__c,
      weight: 0,
      categories: [1], // Replace with the appropriate category ID
      availability: 'available',
      images: [
        {
          image_url: productData.Auctifera__Primary_Image__c,
          is_thumbnail: true,
        },
      ],
    };

    const createdProduct = await bigcommerce.post('/catalog/products', newProduct);

    await bigcommerce.post(`/catalog/products/${createdProduct.id}/metafields`, {
      key: 'metadata',
      value: JSON.stringify(productData),
    });

    await bigcommerce.put(`/catalog/products/${createdProduct.id}`, {
      is_visible: true,
      status: 'live',
    });

    return createdProduct;
  } catch (error) {
    console.error('Error creating product in BigCommerce:', error);
    throw new Error('An error occurred while creating a product in BigCommerce');
  }
};

module.exports = {
  createProduct,
};
