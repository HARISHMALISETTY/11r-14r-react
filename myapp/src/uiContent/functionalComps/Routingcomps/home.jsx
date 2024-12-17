// import React, { useEffect } from 'react'

// export default function Home() {


//   useEffect(()=>{
//     console.log("mounted-home component")
//   },[])

//   useEffect(()=>{
//     return ()=>{
//       console.log("unmounted-home component")
//     }

//   })
//   return (
//     <div>Home</div>
//   )
// }


import { Component } from "react";
import React from "react";

class Home extends Component{



  componentDidMount(){
    console.log("mounted-home component")
  }
  componentWillUnmount(){
    console.log("unmounted-home component")
  }

  render(){
    return(<h1>home component</h1>)
  }
}

export default Home