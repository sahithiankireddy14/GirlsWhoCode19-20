 // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.

import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {CurrentLocation} from './CurrentLocation.js';

import React from "react";
class Maps extends React.Component{
    constructor(props){
        // calls default const
        super(props);
       
    
      }
      state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
      };
    
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
    
      onClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      };

      render() {
        return (
          <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
          >
            <Marker onClick={this.onMarkerClick} name={'current location'} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </CurrentLocation>
        );
      }

    }

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyDcHzenedJlvvE5eZ7gRh2gkELHGE2WgQY'
      })(Maps);
      