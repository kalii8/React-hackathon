import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetcher from './Search/search.js';
import Searcher from './Searcher/searcher.js';
import Header from './Header/header.js';


function FlightRow(props){
  const flight=props.flight;
  return <div > {flight.cityFrom} - {flight.cityTo} - {flight.conversion.EUR}</div>

}

export default class App extends React.Component {

  constructor(props){
      super(props);

      this.state = {
          data: null,
          selectedDepartureCity: null,
          selectedArrivalCity: null
      }
  }

selectDepartureCity(event){
  this.setState({
    selectedDepartureCity: event.target.value
  });
}

selectArrivalCity(event){
  this.setState({
    selectedArrivalCity: event.target.value
  });
}

  renderResultFromFetcher(data){
      if (data === null){
                 return <div> Loading.. </div>
             } else {
                  return (<div>
                      {data.map((flight) => <FlightRow key={flight.id} flight={flight}/>)}
                   </div>
          );
       }
  }


render(){
  console.log(this.state.selectedDepartureCity);
    return (
        
        <div>
            <Header />
            <Fetcher render={this.renderResultFromFetcher} departure={this.state.selectedDepartureCity} arrival={this.state.selectedArrivalCity}  />
            <Searcher onDepartureChange={this.selectDepartureCity.bind(this)} onArrivalChange={this.selectArrivalCity.bind(this)} />

        </div>
    )
  }
}
