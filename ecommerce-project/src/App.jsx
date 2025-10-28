import axious from "axios";
import { Homepage } from "./Pages/Homepage.jsx";
import { CheckoutPage } from "./Pages/Checkout/CheckoutPage.jsx";
import { OrdersPage } from "./Pages/OrdersPage.jsx";
import { TrackingPage } from "./Pages/TrackingPage.jsx";
import { NotFound } from "./Pages/NotFound.jsx";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axious.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<Homepage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
