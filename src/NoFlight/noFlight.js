import React from 'react';
import ReactDOM from 'react-dom';
import './noFlight.css';

export default class NoFlight extends React.Component {
    render() {
        return (
            <div className="noFlightBox">
                <br/>
                <div>
                <img src={require('./img/planecrash.png')} className="planecrash"></img>
                </div>
            </div>
        )    
    }
}