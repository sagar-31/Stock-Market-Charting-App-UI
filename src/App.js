import Login from './Admin/components/LoginSignUp/LogIn';
import Signup from './Admin/components/LoginSignUp/SignUp';
import Header from './Components/Header';
import File from './ImportExcel';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { useState } from 'react';


function App() {
    const [isAdmin, setIsAdmin] = useState(true);
  return (
    <Router>
     <Header/>
     <Route path='/login' component={Login}/>
     <Route path='/signup' component={Signup}/>
    
    </Router>
  );
}

export default App;
    