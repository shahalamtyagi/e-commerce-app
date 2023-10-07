import { useContext, useState } from "react";
import { getData } from "./ResuableFunction";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { AppContext } from "../Context";

export const Sidebar = () => {
  // const Context = useContext(AppContext);
  const Context = useContext(AppContext);
  const { dispatch, state } = Context;
  const [CategoryData, setcategoryData] = useState({});

  const onchangeHandler = (e, categoryobj) => {
    console.log(e, categoryobj);
    if (e.target.checked) {
      dispatch({
        type: "selectedcategory",
        payload: [...state.selectedcategory, e.target.value],
      });
    } else {
      const filteredCategories = state.selectedcategory?.filter(
        (item) => item !== categoryobj.categoryName
      );
      dispatch({ type: "selectedcategory", payload: filteredCategories });
    }
  };
  const setQueryHandler = (e) => {
    dispatch({ type: "sortQuery", payload: e.target.value });
  };

  const rattingHandler = (e) => {
    dispatch({ type: "rattingValue", payload: e.target.value });
  };

  const categoryApiurl = "/api/categories";
  useEffect(() => {
    getData(categoryApiurl, setcategoryData);
  }, []);
  return (
    <div className="e-shop-sidebar-wrapper">
      <div className="sidebar-top-headding">
        <h3 className="filter-headding">
          <Link to="" className="filter-link">
            Filter
          </Link>
        </h3>
        <h3 className="clear-heading">
          <Link to="" className="clear-link">
            Clear{" "}
          </Link>{" "}
        </h3>
      </div>
      <div>
        <h3>Price</h3>
      </div>
      <div className="sidebar-range-input-wrappper">
        <div className="label-container">
          <label for="100">100-</label>
          <label for="100">1500-</label>
          <label for="100">3000</label>
        </div>
        <input type="range" step="100" min="100" max="3000" />
      </div>

      <h3>Category</h3>

      {CategoryData.categories?.map((item) => {
        return (
          <div key={item.id}>
            <input
              value={item.categoryName}
              onChange={(e) => onchangeHandler(e, item)}
              type="checkbox"
              id="men-label"
              name="men-label"
              // value="men"
            />
            <label for="men-label">{item.categoryName}</label>
          </div>
        );
      })}

      <div className="sidebar-rating-wrapper">
        <h3>Rating</h3>
        <div>
          <input type="radio" id="4-star" name="rating" value="d" 
          onChange={(e)=> rattingHandler(e)}
          />
          <label for="4-star">4 Star & Above</label>
        </div>
        <div>
          <input type="radio" id="3-star" name="rating" value="c"
          onChange={(e)=> rattingHandler(e)}
          />
          <label for="3-star">3 Star & Above</label>
        </div>
        <div>
          <input type="radio" id="2-star" name="rating" value="b"
          onChange={(e)=> rattingHandler(e)}
          />
          <label for="2-star">2 Star & Above</label>
        </div>
        <div>
          <input type="radio" id="1-star" name="rating" value="a"
          onChange={(e)=> rattingHandler(e)}
          />
          <label for="1-star">1 Star & Above</label>
        </div>
      </div>

      <div className="sidebar-sortprice-wrapper">
        <h3>Sort by price</h3>
      </div>
      <div className="sortprice-input-wrapper">
        <div>
          <input
            type="radio"
            id="low-to-high"
            value="Low to high"
            name="price"
            onChange={(e) => setQueryHandler(e)}
          />
          <label for="low-to-high">Low to high</label>
        </div>
        <div>
          <input
            type="radio"
            id="high-to-low"
            value="High to Low"
            name="price"
            onChange={(e) => setQueryHandler(e)}
          />
          <label for="high-to-low">high to Low </label>
        </div>
      </div>
    </div>
  );
};
