import React from 'react';
import ReactDOM from 'react-dom';
import './searcher.css';

export default class Searcher extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            citiesFrom: ['Prague', 'Berlin', 'Warszaw', 'Pardubice'],
            citiesTo: ['Bari', 'London' , 'Madrid', 'Rome', 'Valencia', 'Milano', 'Athens']
        }
    }

    render(){
        return (
            <div>
                <div className="searchRow">
                    <span className="searcherCell">Departing from:</span>
                        <span className="searcherCell">
                            <select onChange={this.props.onDepartureChange}>
                                {this.state.citiesFrom.map((city) => <option> {city} </option>)}
                            </select>
                        </span>
                </div>
                <br/>
                <div className="searchRow">
                    <span className="searcherCell">Arriving to:</span>
                        <span className="searcherCell">
                            <select onChange={this.props.onArrivalChange}>
                                {this.state.citiesTo.map((city) => <option> {city} </option>)}
                            </select>
                        </span>
                </div>
                <br/>
                <div className="searchRow">
                    <span className="searcherCell">From date:</span>
                        <span className="searcherCell">
                            <input type="date" onChange={this.props.onDateFromChange}/>
                        </span>
                </div>
                <br/>
                <div className="searchRow">
                    <span className="searcherCell">Until:</span>
                        <span className="searcherCell">
                            <input type="date" onChange={this.props.onDateToChange}/>
                        </span>
                <br/>
                </div>
            </div>
        )

    }

}