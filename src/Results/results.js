import React from 'react';
import ReactDOM from 'react-dom';
import './results.css';

export default class Result extends React.Component {
    
    render() {
        const flight=this.props.flight;
        return (
                <div className="resultRow"> {flight.cityFrom} - {flight.cityTo} - {flight.conversion.EUR}</div>  
        )
  }
}
