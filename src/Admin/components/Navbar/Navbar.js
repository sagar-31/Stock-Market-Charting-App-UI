import React, {Component, useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.css';

export const Navbar = () => {

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
                setHighlight(3);
                break;
            case 4:
                setHighlight(4);
                break;
            case 5:
                setHighlight(5);
                break;
        }
    };

    useEffect(() => {
        switch(location.pathname){
            case "/ImportData":
                setHighlight(0);
                break;
            case "/ManageCompanies":
                setHighlight(1);
                break;
            case "/ManageExchange":
                setHighlight(2);
                break;
            case "/ManageSectors":
                setHighlight(3);
                break;
            case "/ManageIpos":
                setHighlight(4);
                break;
            case "/login":
                setHighlight(5);
                break;
        }
    }, []);

    return (
        <nav className="nav-admin">
            <ul className="nav-menu-admin">
                
                <li className={highlight === 0 ? "nav-item-admin active" : "nav-item-admin"}>
                    <Link to='/ImportData' style={{ textDecoration: 'none' }}>
                        <div  onClick={() => handleNavClick(0)}>
                            Import Data
                        </div>
                    </Link>
                </li>
                
                <li className={highlight === 1 ? "nav-item-admin active" : "nav-item-admin"}>
                    <Link to='/ManageCompanies' style={{ textDecoration: 'none' }}>
                        <div style={{textDecoration:'none'}}  onClick={() => handleNavClick(1)}>
                            Companies
                        </div>
                    </Link>
                </li>

                <li className={highlight === 2 ? "nav-item-admin active" : "nav-item-admin"}>
                    <Link to='/ManageExchange' style={{ textDecoration: 'none' }}>
                        <div style={{textDecoration:'none'}}  onClick={() => handleNavClick(2)}>
                            Stock Exchanges                      
                        </div>
                    </Link>
                </li>

                <li className={highlight === 3 ? "nav-item-admin active" : "nav-item-admin"}>
                    <Link to='/ManageSectors' style={{ textDecoration: 'none' }}>
                        <div style={{textDecoration:'none'}}  onClick={() => handleNavClick(3)}>
                            Sectors
                        </div>
                    </Link>
                </li>
                <li className={highlight === 4 ? "nav-item-admin active" : "nav-item-admin"}>
                    <Link to='/ManageIpos' style={{ textDecoration: 'none' }}>
                        <div style={{textDecoration:'none'}}  onClick={() => handleNavClick(4)}>
                            Ipos
                        </div>
                    </Link>
                </li>
                <li className={highlight === 5 ? "nav-item-admin active" : "nav-item-admin"}>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <div style={{textDecoration:'none'}}  onClick={() => handleNavClick(5)}>
                            Logout
                        </div>
                    </Link>
                </li>
                
            </ul>
        </nav>
    )
}