import { Homepage } from "./Pages/Homepage.jsx";
import { CheckoutPage } from "./Pages/Checkout/CheckoutPage.jsx";
import { OrdersPage } from "./Pages/OrdersPage.jsx";
import { TrackingPage } from "./Pages/TrackingPage.jsx";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
