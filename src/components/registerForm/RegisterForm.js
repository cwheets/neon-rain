import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";
export default function SignUpFormNew(props) {
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
                    <b>Register</b> below
    </h4>
                <p className="grey-text text-darken-1">
                    Already have an account? <Link className="register" to="/loginNew">Log in</Link>
                </p>
            </div>
            <form noValidate onSubmit={props.handleSignupFormSubmit}>
                <div className="nes-field is-inline col s12">
                    <label htmlFor="username">Username</label>
                    <input
                    name="username"
                        onChange={props.handleChange}
                        value={props.username}
                        id="username"
                        type="text"
                        className="nes-input nes-pointer neon1"
                    />
                </div>
                <div className="nes-field is-inline col s12">
                    <label htmlFor="password">Password</label>
                    <input
                    name="password"
                        onChange={props.handleChange}
                        value={props.password}
                        id="password"
                        type="password"
                        className="nes-input nes-pointer neon1"
                    />
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button
                        type="submit" onClick={props.handleSignupFormSubmit}
                        className="loginBtn nes-pointer neon1 mb-3 nes-btn"
                    >
                        Sign up
      </button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
    )
}

// <div className="container inputS">
// <div className="landing3">
//     <div className="home-wrap3">
//         <div className="home-inner3"></div>
//     </div>
// </div>
// <div className="nes-container is-rounded is-dark">
//     <div style={{ marginTop: "4rem" }} className="row">
//         <div className="col s8 offset-s2">
//             <div className="col s12" style={{ paddingLeft: "11.250px" }}>
//                 <h4>
//                     <b>Register</b> below
//     </h4>
//                 <p className="grey-text text-darken-1">
//                     Already have an account? <Link className="register" to="/loginNew">Log in</Link>
//                 </p>
//             </div>
//             <form noValidate onSubmit={this.onSubmit}>
//                 <div className="nes-field is-inline col s12">
//                     <label htmlFor="username">Username</label>
//                     <input
//                         onChange={this.onChange}
//                         value={this.state.username}
//                         id="username"
//                         type="text"
//                         className="nes-input nes-pointer neon1"
//                     />
//                 </div>
//                 <div className="nes-field is-inline col s12">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         onChange={this.onChange}
//                         value={props.password}
//                         id="password"
//                         type="password"
//                         className="nes-input nes-pointer neon1"
//                     />
//                 </div>
//                 <div className="col s12" style={{ paddingLeft: "11.250px" }}>
//                     <button
//                         type="submit" onClick={props.handleSignupFormSubmit}
//                         className="loginBtn nes-pointer neon1 mb-3 nes-btn"
//                     >
//                         Sign up
//       </button>
//                 </div>
//             </form>
//         </div>
//     </div>
// </div>
// </div>
