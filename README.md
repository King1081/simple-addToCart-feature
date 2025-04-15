# 🛒 Shopping Cart React Application

A persistent shopping cart implementation using React hooks and localStorage. This application demonstrates core React concepts including state management, side effects, and performance optimization.

## ✨ Features

- **Persistent cart storage** using localStorage
- **Quantity management** (add/remove items)
- **Real-time total calculation**
- **Clean UI** with product listing and cart summary
- **Performance optimized** with lazy state initialization

## 🛠️ Technical Implementation

### Core Components

1. **State Management**
   ```js
   // Lazy initialization from localStorage
   const [cart, setCart] = useState(() => {
     return JSON.parse(localStorage.getItem("cart")) || [];
   });
   ```

2. **Persistence Layer**
   ```js
   // Auto-save to localStorage on cart changes
   useEffect(() => {
     localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);
   ```

3. **Cart Operations**
   - Add items (with quantity increment)
   - Remove items (with quantity decrement)
   - Automatic cleanup when quantity reaches 0

### Performance Optimizations

- ✅ Lazy state initialization
- ✅ Functional state updates
- ✅ Efficient re-renders with proper dependency arrays

## 📦 Project Structure

```
shopping-cart/
├── src/
│   ├── App.jsx        # Main component
│   ├── NewCart.jsx      # Entry point
│   └── NewCart.css    # Basic styling
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the app: `npm start`
4. Open [http://localhost:3000](http://localhost:3000)

## 🔧 Customization

### Adding More Products
Modify the `products` array in App.js:
```js
const products = [
  { id: 1, name: "New Product", price: 25 },
  // Add more products here
];
```

### Styling
Edit `NewCart.css` to match your design system. The component uses semantic class names for easy styling.

## 📚 Learning Resources

This implementation demonstrates:
- React hooks (useState, useEffect)
- localStorage API usage
- State management patterns
- Performance optimization techniques

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

## Preview link

[AddToCart](https://simple-add-to-cart-feature.netlify.app/)

## 📄 License

UG © [Papah Quansah]
