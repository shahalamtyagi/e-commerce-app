import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  wishlistitemcount: 0,
  countcartitem: 0,
  inputvalue: "",
  selectedcategory: [],
  sortQuery: "",
  rattingValue: null,
  cartProductItem: "",
  deleteCartValue: [],
  cartTotalPrice: [],
  cartArray:[],
  wishListArray:[],
  selectedWishList : [],
  cartListCart:[],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "get_wishlist":
      return {
        ...state,
        wishlistitemcount: action.payload,
      };
    case "get_cartitem":
      return {
        ...state,
        countcartitem: action.payload,
      };
    case "delete_item":
      return {
        ...state,
        deleteitem: action.payload,
      };
    case "input_value":
      return {
        ...state,
        inputvalue: action.payload,
      };
    case "selectedcategory":
      return {
        ...state,
        selectedcategory: action.payload,
      };

    case "sortQuery":
      return {
        ...state,
        sortQuery: action.payload,
      };

    case "rattingValue":
      return {
        ...state,
        rattingValue: action.payload,
      };

    case "cartProductItem":
      return {
        ...state,
        cartProductItem: action.payload,
      };
      case "delete-Cart-Value":
        return {
          ...state,
          deleteCartValue: action.payload,
        };
        case "cartItem":
          return {
            ...state, 
            cartArray: action.payload
          };
          case "wish-Item":
            return {
              ...state, 
              wishListArray: action.payload
            };
            case "selected-Wish-List":
              return {
                ...state, 
                selectedWishList: action.payload
              }
              case "cart-List-Cart":
                return {
                  ...state, 
                  cartListCart: action.payload
                }
      
    default:
      return state;
  }
  
};

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
