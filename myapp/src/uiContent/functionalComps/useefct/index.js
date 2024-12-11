import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseefctComp() {
  const [value, setValue] = useState(1);

  const [message, setMessage] = useState("hi");

  const [cart, setCart] = useState(0);

  const [product,setProduct]=useState("")

  const handleMessage = () => {
    setMessage(message + "10k");
  };

  const handleCart = () => {
    setCart(cart + 1);
  };

  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {

        setProduct(product+res.data[0].title)
     
    });
  },[cart]);
  return (
    <div>
      <h1>value:{value}</h1>
      <h1>message:{message}</h1>
      <h1>cart:{cart}</h1>
      <h1>product:{product}</h1>
      <button onClick={handleMessage}>click me</button>
      <button onClick={handleCart} >add to cart</button>
    </div>
  );
}
