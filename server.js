const express = require('express');
const salesforceService = require('./salesforceService');
const bigcommerceService = require('./bigcommerceService');

const app = express();
const port = process.env.PORT || 3000;

app.get('/products', async (req, res) => {
  try {
    const products = await salesforceService.getProducts();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'An error occurred while fetching products' });
  }
});

app.post('/publish/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const productData = await salesforceService.getProductDetails(productId);
    const createdProduct = await bigcommerceService.createProduct(productData);
    res.json(createdProduct);
  } catch (error) {
    console.error('Error publishing product:', error);
    res.status(500).json({ error: 'An error occurred while publishing the product' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
