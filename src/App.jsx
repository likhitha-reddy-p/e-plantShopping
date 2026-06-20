import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="background-image">
          <div className="landing">
            <h1>🌱 Paradise Nursery</h1>

            <p>Bringing nature into your home with beautiful plants.</p>

            {/* ✅ REQUIRED BUTTON LOGIC */}
            <button onClick={() => setShowProductList(true)}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
