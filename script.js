const cartItems = [];
let total = 0;

function addToCart(productName, productPrice) {
  // Tambahkan produk ke daftar keranjang
  cartItems.push({ name: productName, price: productPrice });
  total += productPrice;

  // Tampilkan keranjang
  const cart = document.getElementById('cart');
  cart.style.display = 'block';

  // Update daftar item di keranjang
  const cartItemsList = document.getElementById('cartItems');
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ${item.name} - Rp {item.price.toLocaleString()};
    cartItemsList.appendChild(li);
  });

  // Update total
  document.getElementById('cartTotal').textContent = total.toLocaleString();
}