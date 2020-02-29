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
        //54.69386, 25.27532
        //54.69386, 25.27571
        //54.69341, 25.27533
        const triangleCoords = [
            {lat: 54.69386, lng: 25.27532},
            {lat: 54.69386, lng: 25.27571},
            {lat: 54.69341, lng: 25.27572},
            {lat: 54.69341, lng: 25.27533},
        ];

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
                    zoom={14}
                >
                    <Polygon
                        paths={triangleCoords}
                        strokeColor="#0000FF"
                        strokeOpacity={0.8}
                        strokeWeight={2}
                        fillColor="#0000FF"
                        fillOpacity={0.35} />
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
