import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer.jsx'

const Login = () => {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background:
      "linear-gradient(141deg, rgba(130,17,145,1) 0%, rgba(57,192,240,1) 100%)",
    //background: `url('../../../../../../assets/img/backgroungLogin.png') no-repeat center`,
  };

  const containerStyle = {
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    width: "75%",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "25px",
    // background: "url('https://unsplash.com/fr/photos/YxpJAhF8ol8')"
  };

  const formStyle = {
    width: "100%",
  };

  const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flexStart",
    marginBottom: "10px",
  };

  const labelStyle = {
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    marginBottom: "5px",
    borderRadius: "4px",
    border: '1px solid "#ccc',
  };

  const buttonStyle = {
    color: "#222",
    textAlign: "center",
    padding: "5px 8px",
    borderRadius: "25px",
    border: "none",
    fontSize: "14px",
    backgroundColor: "#4EA7FD",
    cursor: "pointer",

    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const switchFormStyle = {
    color: "#4EA7FD",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    // For this example, let's just log the inputs
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div style={formContainer}>
      <div style={containerStyle}>
        <h2>Welcome to Beguide</h2>

        {displayLogin ? (
          <form style={formStyle} onSubmit={handleSubmit}>
            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <button type="submit" style={buttonStyle}>
                Login
              </button>
            </div>
            <p
              style={{ ...switchFormStyle }}
              onClick={() => setDisplayLogin(false)}>
              Pas encore inscrit ? Créer un compte.
            </p>
          </form>
        ) : (
          <form style={formStyle} onSubmit={handleSubmit}>
            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
              <label style={labelStyle} htmlFor="password">
                Confirm password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <button type="submit" style={buttonStyle}>
                Login
              </button>
            </div>
            <p
              style={{ ...switchFormStyle }}
              onClick={() => setDisplayLogin(true)}>
              Déjà un compte ? Se connecter.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
