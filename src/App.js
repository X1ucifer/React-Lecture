import React, { useState, useEffect } from 'react';
import axios from "axios"
import Demo from './demo';

function App() {

  const [product, setProduct] = useState([]);

  const getData = async()=>{
    try{
      const data = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
      console.log(data.data)
      setProduct(data.data)

    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, [])



  return (
    <>
     <h1 style={{textAlign:"center"}}>Let's code</h1>
     {product.map((item) => {
       return(
         <p>
           {item.price}
         </p>
       )
     })}
    </>
  );

}

export default App;
