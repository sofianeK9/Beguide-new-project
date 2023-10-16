import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer.jsx'

const Login = () => {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    // For this example, let's just log the inputs
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <div>
        <h2>Welcome to Beguide</h2>

        {displayLogin ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button type="submit">
                Login
              </button>
            </div>
            <p
              onClick={() => setDisplayLogin(false)}>
              Pas encore inscrit ? Créer un compte.
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">
                Confirm password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button type="submit">
                Login
              </button>
            </div>
            <p
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
