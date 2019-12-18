import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";
export default function LoginFormNew(props) {
  
  

return (
      
    <div className="container inputS">
      <div className="landing3">
        <div className="home-wrap3">
          <div className="home-inner3"></div>
        </div>
      </div>
      <div className="nes-container is-rounded is-dark">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s8 offset-s2">
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Login</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Don't have an account? <Link to="/registerNew">Register</Link>
            </p>
          </div>
          <form>
              <div className="nes-field is-inline col s12">
                <label htmlFor="username">Username</label>
                <input
                  value={props.username}
                  onChange={props.handleChange} 
                  type="username"
                  id="username"
                  className="nes-input nes-pointer neon1"
                />
              </div>
              <div className="nes-field is-inline col s12">
                <label htmlFor="password">Password</label>
                <input
                  className="nes-input neon1 nes-pointer"
                  onChange={props.handleChange}
                  value={props.password}
                  id="password"
                  type="password"
                />
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  type="submit"
                  className="loginBtn nes-pointer neon1 mb-3 nes-btn"
                >
                  Login
                </button>
              </div>
            </form>
        </div>
      </div>
      </div>
    </div>
  );
}

{/* <form>
<input username="username" value={props.username} onChange={props.handleChange} />
<input username="password" value={props.password} type="password" onChange={props.handleChange} />
<input type="submit" onClick={props.handleLoginFormSubmit} />
</form> */}

{/* <form noValidate onSubmit={props.handleLoginFormSubmit}>
<div className="nes-field is-inline col s12">
  <label htmlFor="username">Username</label>
  <input
    value={props.username}
    onChange={props.HandleChange} 
    type="username"
    id="username"
    className="nes-input nes-pointer neon1"
  />
</div>
<div className="nes-field is-inline col s12">
  <label htmlFor="password">Password</label>
  <input
    className="nes-input neon1 nes-pointer"
    onChange={props.HandleChange}
    value={props.password}
    id="password"
    type="password"
  />
</div>
<div className="col s12" style={{ paddingLeft: "11.250px" }}>
  <button
    type="submit" onClick={props.handleLoginFormSubmit}
    className="loginBtn nes-pointer neon1 mb-3 nes-btn"
  >
    Login
  </button>
</div>
</form> */}
