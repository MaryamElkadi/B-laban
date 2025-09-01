import { createContext, useContext, useState, useEffect } from "react";

// Create context
const OrderContext = createContext();

// Provider component
export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    // Load from localStorage on init
    const storedOrders = localStorage.getItem("orders");
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  // Save to localStorage when orders change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Add new order
  const addOrder = (order) => {
    setOrders((prev) => [
      ...prev,
      { id: Date.now(), date: new Date().toLocaleString(), ...order },
    ]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

// Hook to use orders
export function useOrders() {
  return useContext(OrderContext);
}
