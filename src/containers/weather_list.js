import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    
    renderWeather(cityData) {
        
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => (weather.main.temp * 1.8 - 459.67)); // If you want to convert it into celsius or fahrenheit. do it here
        
        
        
    /*    const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        OLD syntax
    */
        //ES6 syntax below
        
       
      //   console.log(cityData.city);
        
        // if we map the array we get one city at one point of time
        return (
            <tr key={name}>
                <td><span>{name}</span><Chart data={temps} color="aqua" units="F" /></td>
            </tr>
        )
    }
    
    
    
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Temperature (F)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}


/* OLD SYNTAX Vanilla
function mapStateToProps(state){
    return { weather: state.weather };
} */

// NEW ES6

function mapStateToProps({ weather }) {
    return { weather }; // weather : weather (state is getting only one property)
}

// For charts use React sparkline

export default connect(mapStateToProps)(WeatherList);