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
          data: null
      }

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
    return (
        
        <div>
            <Header />
            <Fetcher render={this.renderResultFromFetcher} />
        </div>
    )
  }
}
