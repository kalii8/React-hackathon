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
                From:<input type="text" onChange={this.props.onDepartureChange} />
                   {/* // {this.state.citiesFrom.map((city) => <option> {city} </option>)}
                </select> */}

                To:<input type="text" onChange={this.props.onArrivalChange} />
                {/* {this.state.citiesTo.map((city) => <option> {city} </option>)}
                </select> */}
                From:<input type="date" onChange={this.props.onDateFromChange}/>
                To:<input type="date" onChange={this.props.onDateToChange}/>
            </div>
        )

    }

}