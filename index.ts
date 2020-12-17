import products from './products'; 

const productName: string = 'beanie';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = 'Ichikawa-shi Ichikawa 3-8-15 Vira Berite SP 1F'; 

const product = products.filter(product => product.name === productName)[0]; 

console.log(product);

if (product.preOrder === 'true') {
  console.log('We will send you a message when your product is on its way.');
}

if (product.price > 25) {
  console.log('We will provide free shipping for this product')
}
else (product.price < 25) ;
   shipping = 5; 


if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
}
else taxPercent =.05; 

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
