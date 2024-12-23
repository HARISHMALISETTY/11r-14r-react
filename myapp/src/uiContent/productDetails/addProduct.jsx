import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";

import { collection, addDoc, getDocs } from "firebase/firestore";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [products_info, setProducts_info] = useState([]);

  useEffect(() => {
    console.log("Firestore instance:", db);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Product Name:", productName);
    console.log("Product Description:", productDescription);

    try {
      const docRef = await addDoc(collection(db, "product_details"), {
        name: productName,
        description: productDescription,
      });
      console.log("Document written with ID: ", docRef.id);

      setProductName("");
      setProductDescription("");
    } catch (e) {
      console.error("Error adding product: ", e);
    }
  };

  const getProducts = async () => {
    const data = await getDocs(collection(db, "product_details"));
    // console.log(data.docs)
    const productDetails = data.docs.map((x) => ({
      name: x.data().name,
      description: x.data().description,
    }));

    console.log(productDetails);
    setProducts_info(productDetails);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="p_name">Enter Product Name:</label>
          <input
            id="p_name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="p_desc">Enter Product Description:</label>
          <input
            id="p_desc"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <button onClick={getProducts}>get Data</button>

      <ul>
        {products_info.map((x, y) => (
          <li key={y}>
            <h1>{x.name}</h1>
            <p>{x.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
