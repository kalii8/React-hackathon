import React from 'react';
import ReactDOM from 'react-dom';
import './search.css';

export default class Fetcher extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    async componentDidMount(){
        const response = await fetch(
            'https://api.skypicker.com/flights?flyFrom=PRG&to=Madrid&dateFrom=08/08/2018&dateTo=20/08/2018&limit=5'
        );
        const json = await response.json()
        this.setState({
            data: json.data
        })
    }

    render(){
        return this.props.render(this.state.data)
    }
}