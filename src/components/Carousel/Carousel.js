import React from "react";
import ReactDOM from "react-dom";
import ima_udla from "./../../assets/3D_computer_animation3.jpg";
import ima_udla2 from "./../../assets/piedra-del-indio-apolinar-yurayaco.jpg";
import ima_udla3 from "./../../assets/photo_2021-06-17_13-54-49.jpg";
import ima_udla4 from "./../../assets/construccion-large.jpg";
import { Carousel } from "antd";

const contentStyle = {
  height: "32vh",
  color: "#fff",
  lineHeight: "30vh",
  textAlign: "center",
  background: "#364d79",
  justify: "center",
  orientation: "left",
};

function Carouse() {
  let mountNode = document.getElementById("container");
  return (
    <div>
      <div id="container" />
      <Carousel autoplay style={contentStyle}>
        <div style={contentStyle}>
          <img alt="Es un computador" src={ima_udla} height="195vh" />
        </div>
        <div style={contentStyle}>
          <img alt="Es un computador" src={ima_udla2} height="195vh" />
        </div>
        <div style={contentStyle}>
          <img alt="Es un computador" src={ima_udla3} height="195vh" />
        </div>
        <div style={contentStyle}>
          <img alt="Es un computador" src={ima_udla4} height="195vh" />
        </div>
      </Carousel>
      ,
    </div>
  );
}

export default Carouse;
