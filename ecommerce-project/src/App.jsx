import axious from "axios";
import { Homepage } from "./Pages/home/Homepage.jsx";
import { CheckoutPage } from "./Pages/Checkout/CheckoutPage.jsx";
import { OrdersPage } from "./Pages/orders/OrdersPage.jsx";
import { TrackingPage } from "./Pages/TrackingPage.jsx";
import { NotFound } from "./Pages/NotFound.jsx";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axious.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
    fetchAppData();
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<Homepage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage cart={cart} />} />
        <Route path="/tracking" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
