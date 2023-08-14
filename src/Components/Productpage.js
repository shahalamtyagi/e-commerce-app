import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { WatchCard } from "./Card";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import "./ProductPage.css"
import { getData } from "./ResuableFunction";
import { AppContext } from "../Context";
export const ProductPage = () => {
const Context = useContext(AppContext)
const {state}= Context




  const [productData, setProductData] = useState([]);

  const filterCard = productData.products?.filter((item) =>
  item.title.toLowerCase().includes(state.inputvalue.toLowerCase())
);
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
        {filterCard?.map((item) => {
          return <WatchCard key={item.id} item={item} />;
        })}
      </div>
      </div>
    </Layout>
  );
};
