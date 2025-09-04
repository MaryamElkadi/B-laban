import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";
import { useOrders } from "../../context/order/order.context"; 

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const { addOrder } = useOrders(); 

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      updateCart(cart.filter((item) => item.id !== id));
    } else {
      updateCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      
      return;
    }

    const newOrder = {
      id: Date.now(), // unique id
      date: new Date().toLocaleDateString(),
      items: cart, // ✅ use cart, not cartItems
      total: totalPrice,
    };

    addOrder(newOrder); // save to orders context (and localStorage)
    toast.success("✅ Order placed successfully!");

    // clear cart
    localStorage.removeItem("cart");
    setCart([]);

    // navigate to orders page
    navigate("/checkout");
  };

  return (
    <div className="cart-page min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 mt-20">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-200">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-3xl">
                          🍦
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-blue-600">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="w-8 h-8 bg-gray-200 rounded-full"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="w-8 h-8 bg-gray-200 rounded-full"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-4">
              <div className="flex justify-between text-xl font-bold mb-4">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
