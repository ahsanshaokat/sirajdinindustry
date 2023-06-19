export default {
    async addProduct(request, payload) {
        console.log(payload)
        let _URL = `https://siraj-din-engineering-default-rtdb.firebaseio.com/products/${payload.productId}.json`;

        const response = await fetch(_URL, {
            method: 'PUT', 
            body: JSON.stringify(payload)
        })

        const responseData = await response.json();
        
    if (!response.ok) {
        return responseData;
      }

      return responseData;
    },
    async getProducts(state, payload) {
        let _URL = `https://siraj-din-engineering-default-rtdb.firebaseio.com/products.json`;

        const response = await fetch(_URL)

        const responseData = await response.json();
        
    if (!response.ok) {
        return responseData;
      }

      return responseData;
    },
    async getProduct(state, payload) {
        const response = await fetch(
            `https://siraj-din-engineering-default-rtdb.firebaseio.com/products/${payload.productId}.json`
          );
          const responseData = await response.json();
        return responseData;
    }

}