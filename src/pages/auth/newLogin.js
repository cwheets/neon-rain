import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./style.css";
import LoginFormNew from "../../components/loginForm/loginForm"
import Secret from "../../components/secrets/Secret"
class LoginNew extends Component {

    state = {
        username:"",
        password:"",
        loggedInUser:"",
        url:"http://localhost:8080",
        // url:"https://manateepi.herokuapp.com",
 
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
    
    
      handleLoginFormSubmit = event=>{
        if(event){
    
          event.preventDefault();
        }
        Axios.post(`${this.state.url}/auth/login`,{username:this.state.username,password:this.state.password},{withCredentials:true}).then(res=>{
          console.log(res.data,res.status)
          this.setState({
            username:"",
            password:"",
            loggedInUser:res.data.user
          });
    
        }).catch(err=>{
          console.log(err.response);
          this.setState({
            username:"",
            password:"",
            loggedInUser:""
          })
        })
      }
    





    
  render() {
    const { errors } = this.state;
    return (
        <div>
        <LoginFormNew username={this.state.username} password={this.state.password}handleChange={this.handleChange} handleLoginFormSubmit={this.handleLoginFormSubmit}/>
 
         {this.state.loggedInUser?(
           <div>
             <Secret username={this.state.loggedInUser.username}/>
             {/* <ManateeForm manateeName={this.state.manateeName} handleChange={this.handleChange} handleManateeCreate={this.handleManateeCreate}/>
             <h5>All the manatees!</h5>
             {this.state.manatees.map(tee=><Manatee key={tee.id}name={tee.username}/>)} */}
           </div>
           ):(null)}
      
       </div>
        );
    }
  }
  export default LoginNew;
  