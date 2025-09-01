import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";

import { CartProvider } from "./context/cart/cart.context";
import { AuthProvider } from "./context/user/user.context";
import { OrdersProvider } from "./context/order/order.context";


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";
import Register from "./pages/register/Register"; 
import Login from "./pages/login/login";
import Checkout from "./pages/checkout/checkout";
import Orders from './pages/orders/orders'
import Category from './pages/category/Category';
import ProductPage from "./pages/productDetails/ProductDetails";
import CategoriesSection from "./pages/CategoriesPage/CategoriesPage";
import PaymentCards from "./pages/payment/Payment";
function App() {
  return (
    <AuthProvider>
      <OrdersProvider>
<CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/checkout" element={<Checkout />} /> 
            <Route path="/orders" element={<Orders />} /> 
            <Route path="/category/:categoryId" element={<Category />} /> 
            <Route path="/product/:productId" element={<ProductPage />} /> 
            <Route path="/categories" element={<CategoriesSection />} /> 
            <Route path="/payment" element={<PaymentCards />} /> 
          
          </Routes>

          <Footer />
          <ToastContainer position="top-right" autoClose={2000} />

        </Router>
      </CartProvider>
      </OrdersProvider>
      
    </AuthProvider>
  );
}

export default App;
