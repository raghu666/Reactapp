import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
    
    constructor(props){
        super(props);
        
        this.state = { term: '' };
        
        // instead of using fat arrow in onChange. you have to bind this to this meaning bind this mystery component to the callback function. Overriding
        // Bind the context
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this); // Cannot read property "props" of null error message you will get
    }
    
    onInputChange(event){
        this.setState({ term: event.target.value });
    }
    
    onFormSubmit(event){
        event.preventDefault(); //tells the browser dont submit the form. This is an HTML property used throughout all forms.
        
        // We need to go and fetch weather data
        
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' }); // Input gets cleared. Causes component to rerender
    }
    
    
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                placeholder="Get a five-day forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch );
    
}

export default connect(null,mapDispatchToProps)(SearchBar); // this container doesnt care about state hence passing null as first argument
