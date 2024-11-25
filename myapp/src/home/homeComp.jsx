import { Component } from "react";
import Footer from "../footer/footerComp";
import HeaderComp from "../header/headerComp";
import Main from "../main/mainComp";
import Menu from "../menu/menu";
import ProfileCard from "../uiContent/profile/profileCard";
import Notifications from "../uiContent/notifications/notificationCard";
import ProductCard from "../uiContent/products/productCard";

class Home extends Component {
  render() {
    return (
      <div
      style={{ display: 'flex', flexDirection: 'column',
         // Make the content column-oriented 
         justifyContent: 'center', // Center vertically 
         alignItems: 'center', // Center horizontally 
         //height: '100vh' // Set the height to 100% of the viewport height
          }}
      >
        {/* <HeaderComp />
        <Main />
        <Footer /> */}
        {/* <Menu name="harish" city="hyd" gender="male"/> */}

        <ProfileCard name="harish" city="hyd"  role="developer"/>
        <ProfileCard name="prasad" city="hyd" role="developer"/>
        <ProfileCard name="santhoshi" city="hyd" role="developer"/>
        <Notifications type="liked" name="mohan"/>
        <Notifications type="commented" name="yogesh"/>
        <Notifications type="shared" name="sujatha"/>
        <Notifications type="saved" name="divya"/>
        <ProductCard>
          <h1>mobile</h1>
          <p>samsung-s24</p>
          <h2>hello</h2>
          <h2>vivo</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum consectetur ex veritatis. Officia tenetur cum earum doloremque excepturi labore est! Fugit nulla cum, maxime eveniet consequuntur recusandae assumenda ipsam non?</p>
        </ProductCard>



        
      </div>
    );
  }
}

export default Home;
