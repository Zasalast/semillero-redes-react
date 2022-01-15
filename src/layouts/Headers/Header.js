import React from "react";
import "./Header.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../components/LoginButton";
import { LogoutButton } from "../../components/LogoutButton";
import { Layout, Menu } from "antd";
import { useState } from "react";
import logo_red from "./../../assets/red-vertical-color.png";

import { Aside } from "../aside/Aside";
import { BrowserRouter as Router, Route, Link, Outlet } from "react-router-dom";
const { Header } = Layout;
const { SubMenu } = Menu;

function Headers() {
  const { isAuthenticated } = useAuth0();
  const browserWindowsSize = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    console.log(windowWidth);
    console.log(windowHeight);
  };
  return (
    <Header className="App-header App-link App-logo ">
      {" "}
      <Router>
        <header /* className="App-header" */>
          <picture /* className="header-picture" */>
            {/*  <div className="App-header-login">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Imagotipo_de_la_Universidad_de_la_Amazonia.svg/1024px-Imagotipo_de_la_Universidad_de_la_Amazonia.svg.png"
                className="App-logo"
              alt="logo"
            />
          </div> */}
            <a href="/home" title="Redes y Video Juegos">
              {" "}
              {/*    <img
              src={logo_red}
              className=" App-logo  App-header-login header-picture "
              alt="logo"
              title="Redes y Video Juegos"
            /> */}{" "}
              logo
            </a>
          </picture>
          <Menu
            className="App-header"
            mode="horizontal"
            defaultSelectedKeys={["9"]}
          >
            <Menu.Item to="/about" key="about">
              about
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/service" />
              Service
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/team" />
              Team
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/activity" />
              Activity
            </Menu.Item>
            <Menu.Item key="5" href="/w3d" title="Servidor Simulador">
              <Link to="/w3d" />
              W3d
              {/*    {browserWindowsSize() >= 360 ? (
                "W3d"
              ) : (
                <i className="fas fa-globe fa-2x" />
              )} */}
            </Menu.Item>
            <Menu.Item key="6" href="/mv" title="Misión y Visión">
              <Link to="/mv" />
              Misión visión
              {/*   {browserWindowsSize() >= 360 ? (
                "Misión visión"
              ) : (
                <>
                  <i class="fas fa-flag-checkered  fa-eye fa-2x"></i>
                </>
              )} */}
            </Menu.Item>
            <Menu.Item key="7" href="/team" title="Equipo">
              <Link to="/team" />
              Miembros
              {/*   {browserWindowsSize() >= 360 ? (
                "Miembros"
              ) : (
                <i className="fas fa-users fa-2x" />
              )} */}
            </Menu.Item>
            <Menu.Item key="8" href="/guide" title="Tutoriales">
              <Link to="/guide" />
              Tutoriales
              {/*   {browserWindowsSize() >= 360 ? (
                "Tutoriales"
              ) : (
                <i class="fas fa-people-carry fa-2x"></i>
              )} */}
            </Menu.Item>
            <Menu.Item key="9" href="/contact" title="contacto">
              <Link to="/contact" />
              contacto
              {/* {browserWindowsSize() >= 360 ? (
                <i className="fas fa-address-book  " />
              ) : (
                <i className="fas fa-address-book fa-2x" />
              )} */}
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/help" />
              Help
            </Menu.Item>
            <Outlet />
          </Menu>
          <a className="login">
            {" "}
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </a>
        </header>
      </Router>
    </Header>
  );
}

export { Headers };
