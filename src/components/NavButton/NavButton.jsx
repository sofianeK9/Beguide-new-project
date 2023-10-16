import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
// import { useNavigate } from "react-router-dom";

// STYLES:
const btnStyle = {
  width: "40px",
  height: "40px",
  top : "-5px",
  borderRadius: "12px",
  transition: "0.3s",
  position: "absolute",
  right: "-5px",
  zIndex: "-1",
};

const hoverBtnStyle = {
  backgroundColor: "#333",
};

const IconStyle = {
  color: "#4EA7FD",
}

const hoverIconStyle = {
  fontSize: "30px"
};

// const selectedIconStyle: React.CSSProperties = {
//   backgroundColor: "#444",
// };

const NavButton = ({ isOpen, setIsOpen, icon, url }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // const navigate = useNavigate();


  // useEffect(() => {
  //     console.log('isOpen: ', isOpen);
      
  //     if(isOpen) {
  //       navigate(url);
  //     } else {
  //       console.log('pas open');
  //     }
  //   }, [isOpen, navigate, url]);


  // const handleNavigate = async () => {
  //   if (isOpen) {
  //     console.log("c'est open");
  //     navigate(url);
  //   } else {
  //     console.log("c'est pas open");
  //   }
  // }
  
  // const handleOpen = async () => {

  //   if (isSelected) {
  //     console.log("c'est selected");
  //     setIsOpen(true);
  //   } else {
  //     await setIsOpen(false);
  //     console.log("c'est pas selected");
  //   }
  // }

  useEffect(() => {
    console.log('isSelected dans useEffect1: ', isSelected);
    isSelected ? setIsOpen(true) : setIsOpen(false);

  //   handleOpen();
  //   handleNavigate()
  }, [isSelected, setIsOpen]);
  
  

  // const handleClick = () => {
  //   setIsSelected(!isSelected);

  //   console.log(isSelected);
  //   console.log(isOpen);

    // if (isSelected) {
    //   navigate(url);
    // }
  // };

  


  // const changeMenu = async () => {
  //   console.log('isSelected dans changeMenu: ', isSelected);
  //   try {
  //     setIsSelected(!isSelected); 
  //   } catch (error) {
  //     console.error('Erreur');
  //   }
  // }
  
  
  const handleClick = () => {
    setIsSelected(!isSelected)
    setTimeout(() => {
      // navigate(url);
    }, 300);
  }


    /* ici faire une fonction pour gérer le onClick : 
      - supprimer le Link qui empêche le onClick de s'exécuter
      - logique du onclick actuel 
      - puis redirect vers {url} -> return <Redirect to="/about" />
    */

  

  return (
    <div
      style={{ position: "relative", zIndex: "1"}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={isHovered ? { ...btnStyle, ...hoverBtnStyle } : { ...btnStyle }}
      ></div>
      <div> 

      <div style={isHovered ? {...IconStyle, ...hoverIconStyle} : {...IconStyle}} onClick={handleClick}>
        <Icon icon={icon} />
      </div>

        </div>
    </div>
  );
};

export default NavButton;
