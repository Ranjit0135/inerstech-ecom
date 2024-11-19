import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../mainlayout/MainLayout";
import Cart from "../pages/cart/Cart";
import CheckoutPage from "../pages/checkout/CheckoutProducts";
import Login from "../pages/auth/Login";
import About from "../pages/about/About";
import Products from "../pages/products/Products";

const CustomRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
};

export default CustomRoutes;
