import { useEffect } from "react";
import { useState } from "react";
import { AirpodCard, WatchCard } from "./Card";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import "./ProductPage.css"
import { getData } from "./ResuableFunction";
export const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const productsApiurl = "/api/products";
  useEffect(() => {
    getData(productsApiurl, setProductData)
  }, []);
  console.log(productData);
  return (
    <Layout>
        <div className="sidebar-and-card-wrapper">
      <Sidebar />
      <div className="product-item">
        {productData.products?.map((item) => {
          return <WatchCard key={item.id} item={item} />;
        })}
      </div>
      </div>
    </Layout>
  );
};
