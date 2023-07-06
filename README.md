Hi ![](https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif) My name is Stephen Akinola

This repo is a proof of concept/simple API. PR for Improvement and feedback are welcomed.

### What it does

* Fetch Products from Salesforce API 
* Fetch Data of each Product 
* Push/Create new Product to the BigCommerce REST API with the custom fields saved as metafields
* Set New Product Status to  live and availiablity to avaliable

### References

- [Node.js for Bigcommerce](https://github.com/bigcommerce/node-bigcommerce/)
- [Bigcommerce Catalog Overview](https://developer.bigcommerce.com/api-docs/store-management/catalog/products-overview#adding-product-metafields)
- [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

### How to use

- Rename `.env-sample` to `.env`
- Add Auth parameters in `.env`
- Run `npm install`
- Run `node server.js`

