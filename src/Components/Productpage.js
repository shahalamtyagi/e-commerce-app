import { useEffect } from "react";
import { useState } from "react";
import { AirpodCard, WatchCard } from "./Card";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import "./ProductPage.css"
export const ProductPage = () => {
  const [productApi, setProductApi] = useState([]);
  const Api = "/api/products";
  useEffect(() => {
    fetch(Api)
      .then((response) => response.json())
      .then((data) => {
        setProductApi(data.products);
      });
  }, []);
  console.log(productApi);
  return (
    <Layout>
        <div className="sidebar-and-card-wrapper">
      <Sidebar />
      <div className="product-item">
        {productApi.map((item) => {
          return <WatchCard key={item} item={item} />;
        })}
      </div>
      </div>
    </Layout>
  );
};
