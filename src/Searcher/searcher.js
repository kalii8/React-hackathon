import React from 'react';
import ReactDOM from 'react-dom';
import './searcher.css';

export default class Searcher extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            citiesFrom: ['Madrid', 'Rome', 'Riga', 'New York'],
            citiesTo: ['Bari', 'Manila', 'London']
        }
    }

    render(){
        return (
            <div>
                From:<select onChange={this.props.onDepartureChange}>
                    {this.state.citiesFrom.map((city) => <option> {city} </option>)}
                </select>

                To:<select onChange={this.props.onArrivalChange}>
                {this.state.citiesTo.map((city) => <option> {city} </option>)}
                </select>
                <button> </button>
            </div>
        )

    }

}