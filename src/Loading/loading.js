import React from 'react';
import ReactDOM from 'react-dom';
import './loading.css';

export default class Loading extends React.Component {
    render() {
        return (
            <div className="loadBox">
                <br/>
                <div>
                <img src={require('./img/plane.png')} className="plane"></img>
                </div>
            </div>
        )    
    }
}