import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../redux/CartSlice";

import { Link } from "react-router-dom";

function CartItem() {
  const items = useSelector(
    state => state.cart.items
  );

  const dispatch = useDispatch();

  const total = items.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {items.map(item => (
        <div className="card" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            width="120"
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>
            Total:
            ${item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(increaseQty(item.id))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(decreaseQty(item.id))
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <h2>Total Cart Amount: ${total}</h2>

      <button
        onClick={() =>
          alert("Coming Soon")
        }
      >
        Checkout
      </button>

      <br /><br />

      <Link to="/plants">
        <button>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default CartItem;
