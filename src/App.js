import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetcher from './Search/search.js';
import Searcher from './Searcher/searcher.js';
import Header from './Header/header.js';
import Loading from './Loading/loading.js';
import Result from './Results/results.js';
import { DateTime } from 'luxon';





export default class App extends React.Component {

  constructor(props){
      super(props);

      this.state = {
          data: null,
          selectedDepartureCity: null,
          selectedArrivalCity: null,
          selectedFromDate: '2018-06-29',
          selectedToDate: '2018-07-29',
          directFlights: 0
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

directFlight(event){
  if(!this.state.directFlights){
          this.setState({
            direct: 1
  })
      } else {
        this.setState({
          direct: 0
      })
    }
}

convertInputDate(date){
return DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('dd/MM/yyyy');
}

  renderResultFromFetcher(data){
      if (data === null){
                 return <Loading />
             } else if (data.length == 0){
                return <div> </div>;
             } else {
                  return (
                    <div className="background">
                        <div className="mainPage">
                        <div class="resultHead">
                            <span className="cell">From</span>
                            <span className="cell">To</span>
                            <span className="cell">Price</span>
                            <span className="cell">Stops</span>
                            <span className="cell">Departs</span>
                            <span className="cell">Arrives</span>
                            <span className="cell">On</span>
                            </div>
                            {data.map((flight) => <Result key={flight.id} flight={flight}/>)}
                        </div>
                    </div>
          );
       }
    }


render() {
    return (
        
        <div>
            <Header />
            <Fetcher render={this.renderResultFromFetcher} departure={this.state.selectedDepartureCity} 
                      arrival={this.state.selectedArrivalCity} 
                      departureDate={this.convertInputDate(this.state.selectedFromDate)}
                      arrivalDate={this.convertInputDate(this.state.selectedToDate)}  />
            <div className="background">
                <div className="mainPage">
                    <Searcher onDepartureChange={this.selectDepartureCity.bind(this)} onArrivalChange={this.selectArrivalCity.bind(this)}
                        onDateFromChange={this.selectFromDate.bind(this)} 
                        onDateToChange={this.selectToDate.bind(this)}
                        onDirectChange={this.directFlight.bind(this)}
                        />
                </div>
            </div>    
        </div>
        
    )
  }
}
