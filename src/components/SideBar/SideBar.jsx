import React, { useEffect } from "react";
// import { Icon } from "@iconify/react";
import NavButton from '../NavButton/NavButton.jsx'
// import logo from "../../../../../../../public/logo/icon-48.png";
import { Link } from "react-router-dom";


function SideBar({isOpen, setIsOpen, isLogged}) {

return (
    <div className="test"
      style={{
        right: "0",
        // corriger ça 
        height: "95.5vh",
        width: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingRight: "5px",
        paddingLeft: "5px",
        backgroundColor: "#222",
      }}
    >
      
      <div>
        <Link to='/home'>
          {/* <img
            src={logo}
            alt="logo"
            style={{ width: "32px", marginBottom: "24px" }}
          /> */}
        </Link>

        {isLogged && (
          <div
            className="sidebar-container"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              borderTop: "solid 1px #333",
              borderBottom: "solid 1px #333",
              fontSize: "28px",
              color: "#4EA7FD",
            }}
          >
            <NavButton 
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              icon={"carbon:course"}
              url={"#"}
            />


            <NavButton
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              icon={"ph:books-light"}
              url={"#"}
            />

            <NavButton 
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              icon={"fluent:people-team-28-regular"}
              url={"#"}
            />

            <NavButton 
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              icon={"carbon:notification"}
              url={"#"}
            />
          </div>
        )}
      </div>

      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          borderTop: "solid 1px #333",
          fontSize: "28px",
          color: "#4EA7FD",
        }}
      >
        {isLogged ? (
          <NavButton
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            icon={"solar:logout-linear"}
            url={"/login"}
          />
        ) : (
          <NavButton
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            icon={"solar:user-outline"}
            url={"#"}
          />
        )}

        <NavButton
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          icon={"uiw:setting-o"}
          url={"#"}
        />
      </div>
    </div>
  );
}

export default SideBar;
