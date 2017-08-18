import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends Component {
    
  static defaultProps = {
    center: {lat: 39.95, lng: -75.16},
    zoom: 12
  };

  render() {
    return (
       <GoogleMapReact bootstrapURLKeys={{
            key: "AIzaSyDfuZzed_XvToL0wEDowa20VhPlcri2Who"
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      />
    );
  };
}




export default GoogleMap; 



/*import React, { Component } from 'react';

// Google map already knows how to render. but we are gonna use a different approach to integrate it with React

class GoogleMap extends Component {
    
    // Lifecyle methods. This is how to create embedded google map with keyword new.s
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: 39.95,
                lng: -75.16
            }
        });
    }
    
    
    render (){
        return <div ref="map" />; // this.refs.map  It is a direct reference to actual HTML element
    }
}

export default GoogleMap; */