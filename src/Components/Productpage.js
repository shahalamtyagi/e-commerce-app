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

  const ProdctFilterData = productData.products?.filter((item) =>
    item.title.toLowerCase().includes(state.inputvalue.trim().toLowerCase())
  );
  const CategoryFilterdProducts = ProdctFilterData?.filter((item) =>
    state.selectedcategory?.includes(item.categoryName)
  );

  const ProductList =
    state.selectedcategory?.length === 0
      ? ProdctFilterData
      : CategoryFilterdProducts;

const sortProductByPriceHandler = ()=>{
  let list = [];
  if(state.sortQuery === "Low to high"){
    list = ProductList.sort((a , b )=> a.price - b.price);
  }
  if(state.sortQuery === "High to Low") {
    list = ProductList.sort((a , b)=> b.price - a.price);
  }
  return list;
}

const productListSortedByPrice = state.sortQuery ? sortProductByPriceHandler() : ProductList
// \\for ratting

const ProductListSortedByRatting  = productListSortedByPrice?.filter((item)=> {
  return item.ratting >= state.rattingValue;
})



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
          {ProductListSortedByRatting?.map((item) => {
            return <WatchCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </Layout>
  );
};
