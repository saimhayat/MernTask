import React, { useContext } from "react";
import { CartContext } from "../App";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleClearCart = () => {
    setCart([]);
  };

  const handleDelete = (id) => {
    const updatedCart = cart.filter((c) => c.id !== id);
    setCart(updatedCart);
  };

  const handleChange = () => {
    // Optional: Implement manual input handling if needed
  };

  const handleQtyIncrease = (item) => {
    const updatedCart = cart.map((c) => {
      if (c.id === item.id) {
        return { ...c, qty: (c.qty || 1) + 1 };
      }
      return c;
    });
    setCart(updatedCart);
  };

  const handleQtyDecrease = (item) => {
    const updatedCart = cart.map((c) => {
      if (c.id === item.id && (c.qty || 1) > 1) {
        return { ...c, qty: (c.qty || 1) - 1 };
      }
      return c;
    });
    setCart(updatedCart);
  };

  // ✅ Calculate grand total
  const grandTotal = cart.reduce((total, item) => {
    const qty = item.qty ?? 1;
    const price = item.price ?? 0;
    return total + qty * price;
  }, 0);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            const qty = item.qty ?? 1;
            const price = item.price ?? 0;
            return (
              <tr key={item.id}>
                <td>
                  <img width={50} src={item.image} alt="" />
                </td>
                <td>{item.title}</td>
                <td>${price.toFixed(2)}</td>
                <td className="d-flex">
                  <button
                    className="btn btn-dark"
                    onClick={() => handleQtyDecrease(item)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={qty}
                    onClick={handleChange}
                    readOnly
                    style={{ width: "50px" }}
                  />
                  <button
                    className="btn btn-dark"
                    onClick={() => handleQtyIncrease(item)}
                  >
                    +
                  </button>
                </td>
                <td>${(price * qty).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* ✅ Grand Total Section */}
      <div className="text-end me-5">
        <h4>
          <strong>Grand Total: ${grandTotal.toFixed(2)}</strong>
        </h4>
      </div>

      <button className="btn btn-danger mt-3" onClick={handleClearCart}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
