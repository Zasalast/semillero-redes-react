import React from "react";

import { Card, Col, Row, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import red_videojuegos from "./../../assets/red-vertical-color.png";

import red_trabaje from "./../../assets/trabaje.png";
import redesempresariales from "./../../assets/trabaje.png";
/* import redesempresariales from "./../../assets/redes-empresariales.png"; */
const { Meta } = Card;
const MisionVision = () => {
  return (
    <Row>
      {" "}
      <a href="https://sites.google.com/view/redes3d/qui%C3%A9nes-somos"></a>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={red_trabaje} />}
      >
        <Meta
          title="VISIÓN "
          description="El Semillero de Investigación Red3D será reconocido regionalmente en la formación de investigaciones aplicadas al uso de las redes informáticas, videojuegos y realidad mixta con fines sociales y académicos."
        />
      </Card>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={redesempresariales} />}
      >
        <Meta
          title="MISIÓN"
          description="Formar en el campo investigativo en temas relacionados con: redes informáticas, videojuegos y realidad mixta con fines académicos y sociales."
        />
      </Card>
      ,
    </Row>
  );
};
export default MisionVision;
