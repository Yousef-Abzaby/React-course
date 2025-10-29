import "./Tracking.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header.jsx";
import dayjs from "dayjs";
export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const fetchOrder = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrder(response.data);
    };
    fetchOrder();
  }, [orderId, setOrder]);
  if (!order) {
    return null;
  }
  let selectedProduct = order.products.find((product) => {
    return product.productId === productId;
  });
  let totalDeliveryTimeMs =
    selectedProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  let timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
  if (deliveryPercent > 100) {
    deliveryPercent = 100;
  }
  let isPreparing, isShipped, isDelivered;
  if (deliveryPercent < 33) {
    isPreparing = deliveryPercent;
  } else if (deliveryPercent < 100) {
    isShipped = deliveryPercent;
  } else {
    isDelivered = deliveryPercent;
  }
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />
      <title>Tracking</title>
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </a>

          <div className="delivery-date">
            {deliveryPercent < 100 ? `Arriving on: ` : `Delivered on: `}
            {dayjs(selectedProduct.estimatedDeliveryTimeMs).format(
              "dddd, MMMM D"
            )}
          </div>

          <div className="product-info">{selectedProduct.product.name}</div>

          <div className="product-info">
            Quantity: {selectedProduct.quantity}
          </div>

          <img className="product-image" src={selectedProduct.product.image} />

          <div className="progress-labels-container">
            <div
              className={`progress-label ${isPreparing && "current-status"}`}
            >
              Preparing
            </div>
            <div className={`progress-label ${isShipped && "current-status"}`}>
              Shipped
            </div>
            <div
              className={`progress-label ${isDelivered && "current-status"}`}
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${deliveryPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
