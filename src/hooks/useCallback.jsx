import { useState, useCallback, memo } from "react";

const ProductCard = memo(({ product, onAddToCart }) => {
  console.log(`ProductCard for ${product.name} re-rendered!`);
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
});

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
  ]);

  const handleAddToCart = useCallback(
    (productId) => {
      // Check if the item is already in the cart to avoid duplicates
      if (!cartItems.includes(productId)) {
        setCartItems((prevCartItems) => [...prevCartItems, productId]);
        console.log(
          `Added product ${productId}. Cart now: ${[...cartItems, productId]}`
        );
      } else {
        console.log(
          `Product ${productId} already in cart. Current cart: ${cartItems}`
        );
      }
    },
    [cartItems]
  );

  const addRandomProduct = () => {
    const newId = products.length + 1;
    setProducts([
      ...products,
      { id: newId, name: `Item ${newId}`, price: newId * 10 },
    ]);
  };

  return (
    <div>
      <h1>My Shopping Cart</h1>
      <p>
        Items in Cart: {cartItems.length > 0 ? cartItems.join(", ") : "None"}
      </p>
      <button onClick={addRandomProduct}>Add New Product to List</button>
      <hr />
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ShoppingCart;
