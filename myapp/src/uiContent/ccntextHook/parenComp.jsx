import React, { createContext, useState } from "react";
import ChildComp1 from "./childComp1";

export const userInfo = createContext();
export const productInfo = createContext();

export default function ParenComp() {
  const [user, setUser] = useState("harish");
  const [products, setProducta] = useState({
    p_id: 1,
    p_name: "mobile",
    p_price: "25000",
    P_model: "2024",
  });
  return (
    <div>
      <productInfo.Provider value={products}>
        <userInfo.Provider value={user}>
          <ChildComp1 />
        </userInfo.Provider>
      </productInfo.Provider>
    </div>
  );
}
