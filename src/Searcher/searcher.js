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
                            <input type ="text" onChange={this.props.onDepartureChange} />
                        </span>
                </div>
              
                <div className="searchRow">
                    <span className="searcherCell">Arriving to:</span>
                        <span className="searcherCell">
                            <input type="text" onChange={this.props.onArrivalChange}/>
                        </span>
                </div>
             
                <div className="searchRow">
                    <span className="searcherCell">From date:</span>
                        <span className="searcherCell">
                            <input type="date" onChange={this.props.onDateFromChange} value="2018-06-29"/>
                        </span>
                </div>
              
                <div className="searchRow">
                    <span className="searcherCell">Until:</span>
                        <span className="searcherCell">
                            <input type="date" onChange={this.props.onDateToChange} value="2018-07-29"/>
                        </span>
                </div>
             
                <div className="searchRow">
                    <span className="searcherCell">Direct flights only:</span>
                        <span className="searcherCell">
                            <input type="checkbox" onChange={this.props.onDirectChange}/>
                        </span>
                </div>
           
            </div>
        )

    }

}