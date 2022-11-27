 import './style.css'
 import { useState } from 'react';
 import axios from 'axios';
const Register = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const check = {
      method: "post",
      url: "https://authbackend-p630.onrender.com/register",
      data: {
        email,
        password,
      },
    };
    axios(check)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
    return (
        <>
        <div className="main-container">
          <div className="bck-img">
            <img src="https://i.pinimg.com/originals/4a/90/33/4a903338c0e478248153bd8f3f6f6745.jpg" />
          </div>
          <div className="log-inform">
            <div className="greet">
              <h1>Create Account</h1>
              <p>
              Enter correct details to Create an Account.
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
                Sign-Up
              </button>
              <p>
                Already have an account? <a href='/'>Log-in</a>
              </p>
              {register ? (
                <p className="sucess">Your are  Registerd.</p>
              ) : (<p className="nscs">You are not Registerd.</p>)}
            </div>
          </div>
        </div>
      </>
  
    )
}

export default Register;