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
                From:<select>
                    {this.state.citiesFrom.map((city) => <option> {city} </option>)}
                </select>

                To:<select>
                {this.state.citiesTo.map((city) => <option> {city} </option>)}
                </select>
            </div>
        )

    }

}