import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { WatchCard } from "./Card";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import "./ProductPage.css";
import { getData } from "./ResuableFunction";
import { AppContext } from "../Context";
export const ProductPage = () => {
  const Context = useContext(AppContext);
  const { state } = Context;

  const [productData, setProductData] = useState({});

  const prodctFilterData = state.inputvalue? productData?.products?.filter((item) =>
    item.title.toLowerCase().includes(state.inputvalue.trim().toLowerCase())
  ): productData?.products;

  const categoryFilterdProducts = state.selectedcategory?.length > 0 ? prodctFilterData?.filter((item) =>
    state.selectedcategory?.includes(item.categoryName)
  ): prodctFilterData;


  
  const sortProductByPriceHandler = () => {
    let list = [];
    if (state.sortQuery === "Low to high") {
      list = categoryFilterdProducts?.sort((a, b) => a.price - b.price);
    }
    if (state.sortQuery === "High to Low") {
      list = categoryFilterdProducts?.sort((a, b) => b.price - a.price);
    }
    return list;
  };

  const productListSortedByPrice = state.sortQuery
    ? sortProductByPriceHandler()
    : categoryFilterdProducts;


  const productListSortedByRatting = state.rattingValue ?  productListSortedByPrice?.filter(
    (item) => {
      return item.ratting >= state.rattingValue;
    } 
  ) : prodctFilterData


  const productsApiurl = "/api/products";
  useEffect(() => {    
    getData(productsApiurl, setProductData);
  }, []);
  // console.log(productData);
  return ( 
    <Layout>
      <div className="sidebar-and-card-wrapper">
        <Sidebar />
        <div className="product-item">
          {productListSortedByRatting?.map((item) => {
            return <WatchCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </Layout>
  );
};
