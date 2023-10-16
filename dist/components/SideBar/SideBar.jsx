import React, { useEffect } from "react";
// import { Icon } from "@iconify/react";
import NavButton from '../NavButton/NavButton.jsx'
// import logo from "../../../../../../../public/logo/icon-48.png";
import { Link } from "react-router-dom";
import './SideBar.css'


function SideBar({isOpen, setIsOpen, isLogged}) {

return (
    <div className="test">
      
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
            className="sidebar-container">
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

      <div>
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
