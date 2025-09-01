import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../../context/cart/cart.context";
import { useOrders } from "../../context/order/order.context";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cash"); // 👈 track selected method
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart =
      cartItems.length > 0 ? cartItems : JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, [cartItems]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    if (paymentMethod === "card") {
      // 👇 navigate to card payment page instead of placing order
      navigate("/payment", { state: { cart, cartTotal } });
      return;
    }

    // If cash on delivery -> place order immediately
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cartTotal,
      date: new Date().toLocaleString(),
    };

    addOrder(newOrder);
    clearCart();
    localStorage.removeItem("cart");
    setCart([]);
    toast.success("✅ Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Cart Summary */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total:</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handlePlaceOrder} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-lg font-semibold mb-3">Billing Details</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" className="w-full border rounded-md p-2" placeholder="John Doe" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded-md p-2" placeholder="john@example.com" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input type="text" className="w-full border rounded-md p-2" placeholder="123 Main St, City" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Payment Method</label>
          <select
            className="w-full border rounded-md p-2"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="card">Credit/Debit Card</option>
            <option value="cash">Cash on Delivery</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
          Place Order
        </button>
      </form>
    </div>
  );
}
