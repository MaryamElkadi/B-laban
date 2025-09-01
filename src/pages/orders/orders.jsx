import { useOrders } from "../../context/order/order.context";
import { FiShoppingCart } from "react-icons/fi";

function Orders() {
  const { orders } = useOrders();

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-10 mt-30 text-center text-gray-800">My Orders</h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="bg-white p-12 rounded-2xl shadow-lg flex flex-col items-center">
            <FiShoppingCart className="text-6xl text-gray-400 mb-6" />
            <p className="text-xl text-gray-600 mb-4">You haven't placed any orders yet.</p>
            <p className="text-gray-400 text-center max-w-xs">
              Browse our menu and add your favorite items to start your first order!
            </p>
          </div>
        </div>
      ) : (
        <ul className="space-y-6 max-w-3xl mx-auto">
          {orders.map((order) => (
            <li
              key={order.id}
              className="border p-6 rounded-2xl shadow hover:shadow-lg transition-shadow bg-white"
            >
              <div className="flex justify-between items-center mb-3">
                <p className="font-semibold text-lg">Order #{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <ul className="ml-4 mt-2 list-disc text-gray-700">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - {item.quantity} × ${item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
