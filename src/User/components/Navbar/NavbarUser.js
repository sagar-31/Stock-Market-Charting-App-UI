import React, {Component, useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavbarUser.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

export const NavbarUser = () => {

    const [highlight, setHighlight] = useState(0);
    const location = useLocation();

    const handleNavClick = (i) => {
        switch(i) {
            case 0:
                setHighlight(0);
                break;
            case 1:
                setHighlight(1)
                break;
            case 2:
                setHighlight(2)
                break;
            case 3:
                setHighlight(3)
                break;
        }
    };

    useEffect(() => {
        switch(location.pathname){
            case "/IpoDetails":
                setHighlight(0);
                break;
            case "/CompareCompanies":
                setHighlight(1);
                break;
            case "/allCompanies":
                setHighlight(2);
                break;
            case "/Login":
                setHighlight(3);
                break;
        }
    }, []);

    return ( 
        <nav className="nav-admin">
            <ul className="nav-menu-admin">
                
                <li className={highlight === 0 ? "nav-item-admin active" : "nav-item-admin"} >
                    <Link to='/IpoDetails' style={{ textDecoration: 'none' }}>
                        <div onClick={() => handleNavClick(0)}>
                            Ipos
                        </div>
                    </Link>
                </li>
                
                <li className={highlight === 1 ? "nav-item-admin active" : "nav-item-admin"} >
                    <Link to='/CompareCompanies' style={{ textDecoration: 'none' }}>
                        <div style={{textDecoration:'none'}} onClick={() => handleNavClick(1)}>
                            Charts
                        </div>
                    </Link>
                </li>
                <li className={highlight === 2 ? "nav-item-admin active" : "nav-item-admin"} >
                    <Link to='/allCompanies' style={{ textDecoration: 'none' }}>
                        <div onClick={() => handleNavClick(2)}>
                            All Companies
                        </div>
                    </Link>
                </li>
                <li className={highlight === 3 ? "nav-item-admin active" : "nav-item-admin"} >
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <div style={{textDecoration:'none'}} onClick={() => handleNavClick(3)}>
                            Logout
                        </div>
                    </Link>
                </li>
                
            </ul>
        </nav>
    )
}