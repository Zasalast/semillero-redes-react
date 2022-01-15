import React, { useEffect, useState } from "react";
import data from "./../Data.json";
import api from "../service/api2";
import { Card, Col, Row, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const Team = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(() => {
    this.fetchData();
  }, []);

  const fetchData = async () => {
    setState({ loading: true, error: null });
    try {
      const data = await api.teams.list;
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  const { id, userId, description, fistName, job } = data;
  if (this.State.loading === true) {
    return "Loading...";
  }
  if (this.state.error) {
    return `Error: ${this.State.error.message}`;
  }

  return (
    <>
      <h2>Team</h2>;
      <div className="site-card-wrapper">
        {" "}
        <Row gutter={16}>
          {" "}
          <a href="https://sites.google.com/view/redes3d/qui%C3%A9nes-somos">
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src={UserAddOutlined} />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="¿Qué hacemos? "
                description="This is the description"
              />
              <div>{data.team}</div>
            </Card>
          </a>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={UserAddOutlined} />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="¿Qué hacemos? "
              description="This is the description"
            />
          </Card>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={UserAddOutlined} />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Trabaja con Nosotros"
              description="This is the description"
            />
          </Card>
          ,
        </Row>
      </div>
    </>
  );
};
export { Team };
