import React, { useState } from 'react';
// import logo from './logo.svg';

import { ManageCompanies } from '../../pages/ManageCompanies/ManageCompanies';
import { ImportData } from '../../pages/ImportData/ImportData';
import { ManageExchange } from '../../pages/ManageExchange/ManageExchange';
import { ManageSectors } from '../../pages/ManageSectors/ManageSectors';
import { Navbar } from '../../components/Navbar/Navbar';

import { NavbarUser } from '../../../User/components/Navbar/NavbarUser';
import { CompareCompanies } from '../../../User/pages/CompareCompanies/CompareCompanies';
import { CompareSecors } from "../../../User/pages/CompareSectors/CompareSectors";
import { IpoDetails } from '../../../User/pages/IpoDetails/IpoDetails';
import { Ipos } from '../../../User/pages/IpoDetails/ManageIpo';
import Modal from 'react-modal';
import './login.css'
import { postRequest, putRequest,getRequest } from "../../../services/NetworkRequests";
import { BASE_URL } from "../../../services/url";
import File from '../../../ImportExcel';
import SignUp from './SignUp';
import {ManageCompanies as allCompanies} from '../../pages/ManageCompanies/allCompanies'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Signup from './SignUp';

  export default function Login() {
    var [user, setUser] = useState("No");
    const [formData, setFormData] = useState({email: '', password: '',userType: ''});

    const login = (formData) => {
       if(formData.userType=='Admin' && formData.email=='admin@email.com' && formData.password=="admin@123"){
        setUser("Admin");
         
       }
        else{getRequest(BASE_URL+'/userByEmail/'+formData.email).then(
          (data) => {
              console.log(data);
              if(data.password==formData.password){
                setUser("Normal")
              }
              else{
                setUser("Nor")
                console.log("Wrong Password!")
              }
              // setData(data);
          }
      );
        }
    }

    return (
      <Router>
      <div >
        {user=="No" ?
            <div id='login'>
          <div className="heading-modal">Login</div>
          <div>
              <div className="single-input-container">
                <div>
                    User Email:
                </div>
                <div style={{paddingTop:3}}>
                    <input
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, email: e.target.value}))}
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
                    User Type(Admin/User):
                </div>
                <div style={{paddingTop:1}}>
                    <textarea
                        type = 'text'
                        onChange= {(e) => setFormData((data) => ({...data, userType: e.target.value}))}
                    />
                </div>
              </div>
          </div>
          <div> <button onClick={() => login(formData)}  class="btn btn-primary">Submit</button></div>
         
          <Route path="/SignUp" exact component={Signup}>New User? SignUp Here</Route>   
          <a href="/SignUp">New User ? Sign Up Here!</a>       </div> 
          : <div>{ user=="Admin" ? <div>
         <Navbar />
         <Switch>
           <Route exact path="/">
             <Redirect to="/ImportData"></Redirect>
           </Route>
           <Route path="/ImportData" exact component={File}></Route>

           <Route
             path="/ManageCompanies"
             exact
             component={ManageCompanies}
           ></Route>
           <Route
             path="/ManageExchange"
             exact
             component={ManageExchange}
           ></Route>
           <Route
             path="/ManageSectors"
             exact
             component={ManageSectors}
           ></Route>
            <Route
             path="/ManageIpos"
             exact
             component={Ipos}
           ></Route>
         </Switch>
       </div>
       : <div> {user=="Normal" ? <div>
                <NavbarUser />
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/IpoDetails"></Redirect>
                  </Route>
                  <Route path="/IpoDetails" exact component={IpoDetails}></Route>
                  <Route
                    path="/CompareCompanies"
                    exact
                    component={CompareCompanies}
                  ></Route>
                  <Route
                    path="/CompareSecors"
                    exact
                    component={CompareSecors}
                  ></Route> 
                  <Route
                    path="/allCompanies"
                    exact
                    component={allCompanies}
                  ></Route> 
                </Switch>
              </div>
              : 
              alert("Wrong Email or Password!!")}</div>
              }</div>}
      </div>
      </Router>
    );
  }