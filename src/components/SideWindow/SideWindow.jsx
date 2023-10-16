import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const windowStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
};

function SideWindow({ isLogged }) {
  // Si connecté, on affiche l'Outlet et sinon la page Login
  return (
    <div style={{ ...windowStyle }}>
      <Header />
      <p style={{ flexGrow: "1" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et
        odio harum provident numquam, laboriosam consequuntur, beatae magni odit
        voluptate saepe ex veritatis aspernatur optio dolorem ducimus nulla
        nostrum tempore!
      </p>

      {/* {isLogged ? <Outlet /> : <Login />} */}

      <Footer />
    </div>
  );
}

export default SideWindow;
