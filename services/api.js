require('dotenv').config();

const BASE_API_URL = process.env.URL
const TOKEN = process.env.API_KEY

class ProductCatalogApi {

  /**getProducts:
   *  -params: category
   *  -returns: Products
   */
  static async getProducts(category=null){
    let response

    if(category){

      response = await fetch(`${BASE_API_URL}/products/${category}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-key': TOKEN
      },
      });
    }else{
      response = await fetch(`${BASE_API_URL}/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'api-key': TOKEN
        },
        });
    }

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'An unknown error occurred');
    }
    return await response.json()
  }
  static async getProduct(productId){


    const response = await fetch(`${BASE_API_URL}/products/${productId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api-key': TOKEN
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

