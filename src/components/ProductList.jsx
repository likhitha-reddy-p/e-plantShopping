import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Spider Plant", price: 12, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Cactus", price: 8, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Orchid", price: 25, category: "Flowering", image: "https://via.placeholder.com/150" }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const count = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const categories = ["Indoor", "Succulent", "Flowering"];

  return (
    <>
      {/* NAVBAR (must be consistent across pages) */}
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({count})</Link>
      </div>

      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat}</h2>

          <div className="grid">
            {plants
              .filter((p) => p.category === cat)
              .map((p) => (
                <div className="card" key={p.id}>
                  <img src={p.image} alt={p.name} width="150" />

                  <h3>{p.name}</h3>
                  <p>${p.price}</p>

                  <button
                    disabled={cartItems.some((item) => item.id === p.id)}
                    onClick={() => dispatch(addItem(p))}
                  >
                    {cartItems.some((item) => item.id === p.id)
                      ? "Added"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductList;
