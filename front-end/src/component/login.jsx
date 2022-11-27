import "./style.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const check = {
      method: "post",
      url: "https://authbackend-p630.onrender.com/login",
      data: {
        email,
        password,
      },
    };
    axios(check)
      .then((result) => {
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <>
      <div className="main-container">
        <div className="bck-img">
          <img src="https://i.pinimg.com/736x/e8/48/e7/e848e7b6e984218b1e45c09a7627ffb1.jpg" />
        </div>
        <div className="log-inform">
          <div className="greet">
            <h1>Hello ! Welcome back.</h1>
            <p>
              Login with your data that you entered,
              <br />
              during registration.
            </p>
          </div>
          <div className="form-data">
            <form onSubmit={(e) => handleSubmit(e)}>
              <p>Email Address</p>
              <input
                placeholder="Enter email"
                className="login-inp"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>Password</p>
              <input
                placeholder="Enter Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <button className="login-btn" onClick={(e) => handleSubmit(e)}>
              Login
            </button>
            <p>
              Don't have an account? <Link to='register'>Sign-up</Link>
            </p>
            {login ? (
              <p className="sucess">Your are  logged in</p>
            ) : (<p className="nscs">You are not logged in Enter credential.</p>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
