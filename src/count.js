
import { createContext, useReducer } from "react";
import { Button } from "./Components/Button";

export const  CountContext = createContext();

const initialState = 0;
const reducer = (state , action) =>{
  switch(action){
    case "increase":
        return state + 1
        case "decrease"  :
            return state - 1
            default :break;
  }


}

 export const UseReducer = () =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <>
        <div>
            <p>{state}</p>
            <CountContext.Provider value={{state , dispatch}}>
            <Button/>

            </CountContext.Provider>
        </div>
        </>
    )
}
