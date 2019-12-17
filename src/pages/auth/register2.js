import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import SignUpFormNew from "../../components/registerForm/SignUpForm"
import Secret from "../../components/secrets/Secret"
class RegisterNew extends Component {

    state = {
        username:"",
        password:"",
        loggedInUser:"",
        url:"http://localhost:8080",
        // url:"https://manateepi.herokuapp.com",
        manatees:[]
      }
      componentDidMount(){
        this.readSessions();
      }
    
      handleChange= event=>{
        const {username,value}=event.target;
        this.setState({
          [username]:value
        })
      }
    
      readSessions = ()=>{
        Axios.get(`${this.state.url}/auth/readsessions`,{withCredentials:true}).then(res=>{
          console.log(res.data)
          this.setState({loggedInUser:res.data.user})
        })
      }

      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit = e => {
        e.preventDefault();
    const newUser = {
          username: this.state.username,
          password: this.state.password,
        };
      
    }
    
   
      handleSignupFormSubmit = event=>{
        event.preventDefault();
        Axios.post(`${this.state.url}/auth/signup`,{username:this.state.username,password:this.state.password},{withCredentials:true}).then(res=>{
          console.log(res.data,res.status)
          this.handleLoginFormSubmit();
        }).catch(err=>{
          console.log(err.response);
        })
      }

  

    render() {
        const { errors } = this.state;
        return (
            <div>
         
            <SignUpFormNew username={this.state.username} password={this.state.password}handleChange={this.handleChange} handleSignupFormSubmit={this.handleSignupFormSubmit}/>
             {this.state.loggedInUser?(
               <div>
                 <Secret username={this.state.loggedInUser.username}/>
           
               </div>
               ):(null)}
          
           </div>
    );
    }
}
export default RegisterNew;