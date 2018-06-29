import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetcher from './Search/search.js';
import Searcher from './Searcher/searcher.js';
import Header from './Header/header.js';
import Loading from './Loading/loading.js';
import Result from './Results/results.js';





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
                 return <Loading />
             } else {
                  return (
                    <div className="background">
                        <div className="resultsPage">
                        <div class="resultHead"><span className="cell">From</span><span className="cell">To</span><span className="cell">Price</span><span className="cell">Departs</span><span className="cell">Arrives</span></div>
                            {data.map((flight) => <Result key={flight.id} flight={flight}/>)}
                        </div>
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
