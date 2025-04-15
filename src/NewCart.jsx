import React, { useState, useEffect } from "react";
import "./NewCart.css";

function NewCart() {
  // Load cart from localStorage (or default to an empty array)
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [lastAddedId, setLastAddedId] = useState(null);

  const products = [
    { id: 1, name: "Lenovo Tab M10 3rd Gen", price: 1000 },
    { id: 2, name: "Oraimo FreePods Lite", price: 20 },
    { id: 3, name: "Thunderbolt Laptop", price: 1000 },
  ];

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Clear lastAddedId after 300ms to remove animation class
  useEffect(() => {
    if (lastAddedId !== null) {
      const timer = setTimeout(() => setLastAddedId(null), 300);
      return () => clearTimeout(timer);
    }
  }, [lastAddedId]);

  // Add to cart (increase quantity instead of duplicating)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Set lastAddedId for animation
    setLastAddedId(product.id);
  };

  // Remove from cart (decrease quantity or remove item)
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="App">
      <h1>🛒 Shopping Cart</h1>

      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span className="product-info">{product.name} - ${product.price}</span>
            <button
              onClick={() => addToCart(product)}
              data-id={product.id} // For the animation targeting
              className={lastAddedId === product.id ? 'item-added' : ''}
            >
              🛒 Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">🛍️ Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price} x {product.quantity}
              <button
                onClick={() => removeFromCart(product)}
                data-id={product.id} // For the animation targeting
              >
                ❌ Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button
          onClick={() => setCart([])}
          className="nuke-button"
        >
          ☢️ Clear Entire Cart
        </button>
      )}

      <h3 className="total-price">Total: ${calculateTotal()}</h3>
    </div>
  );
}

export default NewCart;
