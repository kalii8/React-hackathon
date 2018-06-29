import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetcher from './Search/search.js';


function FlightRow(props){
  const flight=props.flight;
  return <div > {flight.cityFrom} - {flight.cityTo} - {flight.conversion.EUR}</div>

}

export default class App extends React.Component {

  constructor(props){
      super(props);

      this.state = {
          data: null
      }

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
    return (<div>
          <Fetcher render={this.renderResultFromFetcher} />
          </div>
    )
  }
}
