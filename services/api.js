require('dotenv').config();

const BASE_API_URL = process.env.url

class ProductCatalogApi {

  /**getProducts:
   *  -params: apiKey
   *  -returns: Products
   */
  static async getProducts(apiKey){

    const response = await fetch(`${BASE_API_URL}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'An unknown error occurred');
    }
    return await response.json()
  }


}

export default ProductCatalogApi

