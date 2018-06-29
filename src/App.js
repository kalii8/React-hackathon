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
          selectedArrivalCity: null,
          selectedFromDate: null,
          selectedToDate: null,
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

selectFromDate(event){
  this.setState({
    selectedFromDate:event.target.value
  })
}

selectToDate(event){
  this.setState({
    selectedToDate:event.target.value
  })
}

convertInputDate(date){

}

  renderResultFromFetcher(data){
      if (data === null){
                 return <Loading />
             } else {
                  return (<div className="resultsPage">
                      {data.map((flight) => <Result key={flight.id} flight={flight}/>)}
                   </div>
          );
       }
  }


render(){
  console.log(this.state.selectedFromDate);
    return (
        
        <div>
            <Header />
            <Fetcher render={this.renderResultFromFetcher} departure={this.state.selectedDepartureCity} arrival={this.state.selectedArrivalCity}  />
            <Searcher onDepartureChange={this.selectDepartureCity.bind(this)} onArrivalChange={this.selectArrivalCity.bind(this)}
                      onDateFromChange={this.selectFromDate.bind(this)} onDateToChange={this.selectToDate.bind(this)}/>

        </div>
        
    )
  }
}
