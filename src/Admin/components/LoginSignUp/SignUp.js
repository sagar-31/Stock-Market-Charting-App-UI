import React, { useState } from 'react';
import './login.css'
import { postRequest, putRequest,getRequest } from "../../../services/NetworkRequests";
import { BASE_URL } from "../../../services/url";
import Login from './LogIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

  export default function SignUp() {
    var [user, setUser] = useState("No");
    const [formData, setFormData] = useState({userName:'',password: '',userType: '',email: '',mobileNumber:'',confirmed:'' });

    const signup = (formData) => {
      console.log(formData);
       postRequest(BASE_URL+'/signup',formData).then(
        (data) => {
            console.log(data);
        }
    ).catch(
        error => console.log(error)
    )
    alert("User Created!! Go to Back to LogIn Page.");
    // this.setFormData({userName:'',password: '',userType: '',email: '',mobileNumber:'',confirmed:'' });
}


    return (
      <Router>
            <div id='signup'>
          <div className="heading-modal">SignUp</div>
          <div>
              <div className="single-input-container">
                <div>
                    User Name:
                </div>
                <div style={{paddingTop:3}}>
                    <input
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, userName: e.target.value}))}
                    />
                </div>
              </div>
              <div className="single-input-container">
                <div>
                    Password:
                </div>
                <div style={{paddingTop:1}}>
                    <textarea
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, password: e.target.value}))}
                    />
                </div>
              </div>
              <div className="single-input-container">
                <div>
                    UserType(Admin/Normal):
                </div>
                <div style={{paddingTop:1}}>
                    <textarea
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, userType: e.target.value}))}
                    />
                </div>
              </div>
              <div className="single-input-container">
                <div>
                    Email:
                </div>
                <div style={{paddingTop:1}}>
                    <textarea
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, email: e.target.value}))}
                    />
                </div>
              </div>
              <div className="single-input-container">
                <div>
                    Mobile Number:
                </div>
                <div style={{paddingTop:1}}>
                    <textarea
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, mobileNumber: e.target.value}))}
                    />
                </div>
              </div>
          </div>
          <div> <button onClick={() => signup(formData)}  class="btn btn-primary">Submit</button></div>
          <Route path="/login" exact component={Login}></Route>   
          <a href="/login">Go Back To LogIn!!!</a>  
       
             </div> 
          
      </Router>
    );
  }