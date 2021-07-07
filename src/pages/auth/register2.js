// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Axios from "axios";

// import SignUpFormNew from "../../components/registerForm/RegisterForm"
// import Secret from "../../components/secrets/Secret"
// class RegisterNew extends Component {

//     state = {
//         username:"",
//         password:"",
//         loggedInUser:"",
//         errors: {},
//         url:"http://localhost:8080",
//         // url:"https://manateepi.herokuapp.com",
       
//       }
  

//     handleSignupFormSubmit = event=>{
//       event.preventDefault();
//       Axios.post(`${this.state.url}/auth/signup`,{username:this.state.username,password:this.state.password},{withCredentials:true}).then(res=>{
//         console.log(res.data,res.status)
//         this.handleLoginFormSubmit();
//       }).catch(err=>{
//         console.log(err.response);
//       })
//     }

//     handleChange= event=>{
//       const {username,value}=event.target;
//       this.setState({
//         [username]:value
//       })
//     }
//     onChange = e => {
//       this.setState({ [e.target.id]: e.target.value });
//     };
//   //   onSubmit = e => {
//   //     e.preventDefault();
//   // const newUser = {
//   //       username: this.state.username,
//   //       password: this.state.password,
//   //     };
//   // console.log(newUser);
//   // Axios.post("https://express-neon-rain-game.herokuapp.com/api/users/register", newUser).then(data => {
//   //   console.log(data);
//   //   this.props.history.push("/storypage")
//   // }).catch (err=> {
//   //   console.log(err);
//   //   alert("Username already exists or password could not be validated")
    
//   // })

  

//     render() {
//         const { errors } = this.state;
//         return (
//             <div>
         
//          <SignUpFormNew username={this.state.username} password={this.state.password}handleChange={this.handleChange} handleSignupFormSubmit={this.handleSignupFormSubmit}/>
//         {this.state.loggedInUser?(
//           <div>
//             <Secret username={this.state.loggedInUser.username}/>
       
//           </div>
//           ):(null)}
          
//            </div>
//     );
//     }
// }
// export default RegisterNew;