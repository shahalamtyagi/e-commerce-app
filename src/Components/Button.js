import { useContext } from "react"
import { CountContext } from "../count";


export const Button = ()=>{
    const Context = useContext(CountContext);
            return(
        <div>
                <button onClick={()=> Context.dispatch("increase")}>
                    increase+</button>
                <button onClick={()=> Context.dispatch("decrease")}>decrease-</button>
            </div>
    )
}