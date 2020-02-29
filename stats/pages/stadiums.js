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
        localStorage.setItem('co2', 11310);

        const co2 = localStorage.getItem('co2');

        const oneMeter = 0.0000156;
        const oneTreePerYear = 22;
        const treesInStadium = 300;

        const stadiums = Math.round(co2 / (treesInStadium * oneTreePerYear));

        const l = 105 * oneMeter;
        const h = 68 * oneMeter;

        const startLat = 54.69386;
        const startLng = 25.27532;

        const polygons = [];

        var currentA = startLat;
        var currentB = startLng;

        for (let i = 0; i < stadiums; i++) {

            var currentB = currentB + 0.0023;

            const triangleCoords = [
                {lat: currentA, lng: currentB},
                {lat: currentA, lng: currentB + l},
                {lat: currentA + h, lng: currentB + l},
                {lat: currentA + h, lng: currentB},
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
                                strokeColor="#008000"
                                strokeOpacity={0.8}
                                strokeWeight={2}
                                fillColor="#006400"
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
