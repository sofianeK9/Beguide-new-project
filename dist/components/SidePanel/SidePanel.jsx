import React, { useEffect } from "react";
import SideBar from '../SideBar/SideBar.jsx'
import SideWindow from '../SideWindow/SideWindow.jsx'
import './SidePanel.css'
// import "./style.scss";

function SidePanel() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(true);
  
  useEffect(() => {
    console.log('useeffect');

    if (isOpen) {
      const root = document.getElementById("beguide");
      root.style.width = "400px";
    } else {
      const root = document.getElementById("beguide");
      root.style.width = "60px";
    }
  }, [isOpen]);

  return (
    <>
      <div className="sidePanel">
        {isOpen && <SideWindow isLogged= {isLogged} />}
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} isLogged= {isLogged} />
      </div>
    </>
  );
}

export default SidePanel;