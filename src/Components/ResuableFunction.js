 export const getData = (productApi, setProductApi)=>{
    fetch(productApi)
    .then((response)=>response.json())
    .then((data)=> setProductApi(data))
};