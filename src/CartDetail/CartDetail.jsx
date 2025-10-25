import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQty,
  decreaseQty,
  removeItem,
} from "../redux/cartSlice/cartSlice";

function CartEmpty({ total }) {
  const displayTotal = total > 0 ? total : 0;

  return (
    <div className="text-center py-10">
      <h2 className="text-2xl mb-4 font-semibold">
        Total Cart Amount: ${displayTotal}
      </h2>
      <Link
        to="/product-page"
        className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Continue Shopping
      </Link>
      <button className="px-6 py-2 bg-green-700 block mx-auto mt-2 text-white rounded hover:bg-green-800 transition">
        Checkout
      </button>
    </div>
  );
}

function CartWithProduct({ cart, total, dispatch }) {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Total Cart Amount: ${total}
      </h2>

      <ul className="space-y-6">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-3 font-medium">{item.qty}</span>
                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <p className="mt-2 text-gray-800 font-medium">
                Total: ${item.price * item.qty}
              </p>

              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="mt-2 px-4 py-1 bg-red-400 text-white rounded hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-4 mt-8">
        <Link
          to="/product-page"
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Continue Shopping
        </Link>
        <button className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}

function CartDetail() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {cart.length > 0 ? (
        <CartWithProduct cart={cart} total={total} dispatch={dispatch} />
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}

export default CartDetail;
