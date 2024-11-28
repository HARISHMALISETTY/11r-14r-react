function ConditionalRend(props) {



  // if (isLoggedin) {
  //   return (
  //     <>
  //       <h1>login successful</h1>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1>login unsuccessful</h1>
  //     </>
  //   );
  // }
  return props.isLoggedIn?<h1>login successful</h1>:<h1>login unsuccessful</h1>



}

export default ConditionalRend;


