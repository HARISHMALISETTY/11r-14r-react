import React from 'react';
import { useContext } from 'react';
import { userInfo } from './parenComp';
import { productInfo } from './parenComp';

export default function ChildComp3() {

    const data=useContext(productInfo)
  return (
    <div>
        <h1>{data.p_name}</h1>
        <h2>{data.P_model}</h2>
        <h3>{data.p_price}</h3>

    </div>
  )
}
