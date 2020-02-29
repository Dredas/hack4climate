import React, {Component} from "react";
import {Map, Polygon, GoogleApiWrapper} from "google-maps-react";

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    render() {
        localStorage.setItem('liters', 50000000);

        const liters = localStorage.getItem('liters');
        const polls = liters / 2500000;

        const twentyFiveMeters = 0.00039;

        const startLat = 54.69386;
        const startLng = 25.27532;

        const polygons = [];

        var currentA = startLat;
        var currentB = startLng;

        for (let i = 0; i < polls; i++) {

            var currentB = currentB + 0.0005;

            const triangleCoords = [
                {lat: currentA, lng: currentB},
                {lat: currentA, lng: currentB + twentyFiveMeters},
                {lat: currentA + (twentyFiveMeters * 2), lng: currentB + twentyFiveMeters},
                {lat: currentA + (twentyFiveMeters * 2), lng: currentB},
            ];

            polygons.push(triangleCoords);
        }

        if (!this.props.google) {
            return <div>Loading...</div>;
        }

        return (

            <div>
                <Map
                    style={{
                        minWidth: "200px",
                        minHeight: "200px"
                    }}
                    google={this.props.google}
                    initialCenter={{
                        lat: startLat,
                        lng: startLng
                    }}
                    zoom={16}
                >

                    {polygons.map((polygon, i) => {
                        return (
                            <Polygon
                                paths={polygon}
                                strokeColor="#0000FF"
                                strokeOpacity={0.8}
                                strokeWeight={2}
                                fillColor="#0000FF"
                                fillOpacity={0.35}/>
                        )
                    })}


                </Map>

                <style jsx global>{`
                body {
                    display: block;
                    margin: 0px;
                    background-color: #98FB98;
                }
	    	    `}</style>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB7GYhX46baN2z1m93jdLaesNHshn-uG3w",
    v: "3"
})(MapContainer);
