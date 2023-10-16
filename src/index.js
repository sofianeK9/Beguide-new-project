import React from 'react';
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App.jsx';
// import reportWebVitals from './reportWebVitals';


const appContainer = document.createElement("div");
appContainer.id = "beguide";
// Set inline CSS styles for absolute positioning
appContainer.style.position = "fixed";
appContainer.style.zIndex = "1000";
appContainer.style.top = "0px"; // Adjust the top position as needed
appContainer.style.right = "0px"; // Adjust the left position as needed
// Set other inline CSS styles
appContainer.style.width = "60px";
appContainer.style.height = "100vh";
appContainer.style.backgroundColor = "#333333";
appContainer.style.color = "#eee";
appContainer.style.fontSize = "16px";
// root.style.padding = "10px";
// root.style.paddingLeft = "10px";


document.body.append(appContainer);


const rootIntoShadow = document.createElement("div");
rootIntoShadow.id = "shadow-root";

const shadowRoot = appContainer.attachShadow({ mode: "open" });
shadowRoot.appendChild(rootIntoShadow);

createRoot(rootIntoShadow).render(<App />);
