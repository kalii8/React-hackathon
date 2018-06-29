import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="logo">FLIGHT SITE</div>
                <div className="navItem">Search</div>
                <div className="navItem">Browse</div>
            </nav> 
        )  
    }
}