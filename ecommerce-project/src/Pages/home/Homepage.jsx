import "./HomePage.css";
import axious from "axios";
import { ProductsGrid } from "./ProductsGrid.jsx";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header.jsx";

export function Homepage({ cart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axious.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>Ecommerce project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
