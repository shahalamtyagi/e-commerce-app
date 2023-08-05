import { createContext, useReducer } from "react";

export const AppContext = createContext();
const initialState = { wishlistitemcount: 0 ,
countcartitem : 0 };
const reducer = (action ,state)=>{
switch (action.type) {
  case "get_wishlist":
    return{
      ...state,
      wishlistitemcount: action.payload
    }
case "get_cartitem":
  return{
    ...state,
    countcartitem: action.payload
  }
  default:
    return state
}
}

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <AppContext.Provider value={{ state, dispatch }}>
          {children}
        </AppContext.Provider>
      </div>
    </>
  );
};
