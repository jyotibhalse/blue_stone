import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/header/nav";
import Header from "../components/header/header";
import Smallhead from "../components/header/smallhead";
import Carousel from "../components/carousel/carousel";
import { Button, Card, CardBody, Container } from "react-bootstrap";
import Cardbox from "../components/cardbox/cardbox";
import Photos from "../components/cartonic/photos";
import Multicard from "../components/multi-card/malticard";
import Secondnav from "../components/header/secondnav";
import fontbox from "../components/Font/fontbox";
import "./home.css";
import Fontbox from "../components/Font/fontbox";

export default () => {
  // const regData = useSelector(state=>state.register);
  // console.log(regData);
  return (
    <>
      <Smallhead />
      {/* <Header/> */}
     
      <Secondnav />
      <br />
      <Fontbox/>
      <div className=" my-4">
        <Carousel />
      </div>
      {/* <div className=" photos my-2">
        <img src="https://kinclimg4.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/valentine_static_desktop_home.jpg" />
        <p className="para1">
          DAZZLING DECEMBER: Fine jewellery, bright and beautiful
        </p>
      </div> */}
      <div className=" my-2">
        <Cardbox />
      </div>
      <div className=" my-4">
        <Photos />
      </div>
      <div className="store my-2">
        <br />
        <p>Drop in to BlueStone Store near you</p>
        <p1>
          Drop in to <h2>BlueStone Store</h2>
          <h6>Near You</h6>
        </p1>
        <p2>
          <Button
            style={{
              backgroundColor: "white",
              borderColor: "white",
              color: "black",
              marginTop: "-30px",
            }}
          >
            explore now
          </Button>
        </p2>
      </div>
      <div className="container dd1 mx-2  my-4">
        {/* <img src="https://kinnpimg1.bluestone.com/resources/themes/bluestone/images/new/new-icons-sprite.png"/> */}
        {/* <Multicard /> */}
      </div>
    </>
  );
};
