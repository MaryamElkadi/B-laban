import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function PaymentCards() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, cartTotal } = location.state || { cart: [], cartTotal: 0 };

  const handlePayment = (e) => {
    e.preventDefault();
    toast.success("💳 Payment successful!");
    navigate("/orders"); // after payment success redirect to orders
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-30">
      <h1 className="text-2xl font-bold mb-6 font-[family-name:main-font]">Card Payment</h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in cart.</p>
        )}
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total:</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Card Payment Form */}
      <form onSubmit={handlePayment} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Card Number</label>
          <input type="text" className="w-full border rounded-md p-2" placeholder="1234 5678 9012 3456" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Expiry Date</label>
            <input type="text" className="w-full border rounded-md p-2" placeholder="MM/YY" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CVV</label>
            <input type="password" className="w-full border rounded-md p-2" placeholder="123" required />
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Pay Now
        </button>
      </form>
    </div>
  );
}
