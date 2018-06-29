import React from 'react';
import ReactDOM from 'react-dom';
import './results.css';
import { DateTime } from 'luxon';


export default class Result extends React.Component {
    
    convertTime(time) {
        return DateTime.fromMillis(time * 1000).toFormat('hh:mm')
    }

    convertDate(date) {
        return DateTime.fromMillis(date * 1000) .toFormat('dd/MM/yyyy')
    }

    render() {
        const flight=this.props.flight;
        return (
                <div className="resultRow">
                    <span className="cell">{flight.cityFrom}</span>
                    <span className="cell">{flight.cityTo}</span>
                    <span className="cell">${flight.conversion.EUR}</span>
                    <span className="cell">{flight.route.length -1}</span>
                    <span className="cell">{this.convertTime(flight.dTime)}</span>
                    <span className="cell">{this.convertTime(flight.aTime)}</span>
                    <span className="cell">{this.convertDate(flight.aTime)}</span>
                </div>  
        )
  }
}
