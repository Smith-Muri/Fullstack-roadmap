const product = {
  id: 101,
  price: 49.99,
  stock: 120,
  category: "electronics"
};


function D1(product){

    metadata = {}

    return {
        productPrice: product.price,
        availableStock: product.stock,
        metadata:{
            id: product.id, category: product.category
        }
    }

}

console.log(D1(product))