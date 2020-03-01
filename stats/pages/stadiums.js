import React, {Component} from "react";
import {Map, Polygon, GoogleApiWrapper} from "google-maps-react";
import Link from "next/link";
import {Button} from "@material-ui/core";

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
        //localStorage.setItem('co2', 113100);

        const co2 = localStorage.getItem('co2');

        const oneMeter = 0.0000156;
        const oneTreePerYear = 22;
        const treesInStadium = 300;
        const stadiums = Math.round(co2 / (treesInStadium * oneTreePerYear));

        const allTrees = 300 * stadiums;

        const l = 105 * oneMeter;
        const h = 68 * oneMeter;

        const startLat = 54.6806;
        const startLng = 25.2851;

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
                <div style={{position: "absolute", left: "50%", top: "5%"}}>
                    <div style={{
                        position: "relative",
                        zIndex: 10,
                        left: "-50%",
                        backgroundColor: "#fff",
                        padding: "5px",
                        fontSize: "25px",
                        fontWeight: "bold",
                        border: "2px solid red",
                        borderRadius: "25px",
                        textAlign: "center"
                    }}>
                        TAIP ATRODO {co2} kg co2
                    </div>
                </div>

                <div style={{position: "absolute", left: "50%", bottom: "10%"}}>
                    <div style={{
                        position: "relative",
                        zIndex: 10,
                        left: "-50%",
                        backgroundColor: "#fff",
                        padding: "5px",
                        fontSize: "25px",
                        fontWeight: "bold",
                        border: "2px solid red",
                        borderRadius: "25px",
                        textAlign: "center"
                    }}>
                        Išvalyti šiam orui per metus reikia {stadiums} futbolo aikščių, kuriuose yra {allTrees} medžiai
                    </div>
                </div>

                <Link href="/exel" passHref>
                    <Button className={"slide-button"} style={{
                        position: "absolute",
                        zIndex: 10,
                        right: "1%",
                        bottom: "1%",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }} variant="contained">Toliau</Button>
                </Link>

                <Link href="/pools" passHref>
                    <Button className={"slide-button"} style={{
                        position: "absolute",
                        zIndex: 10,
                        left: "1%",
                        bottom: "1%",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }} variant="contained">Atgal</Button>
                </Link>

                <Map
                    style={{
                        minWidth: "200px",
                        minHeight: "200px"
                    }}
                    google={this.props.google}
                    initialCenter={{
                        lat: startLat,
                        lng: startLng + 0.004
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
                                fillOpacity={0.5}/>
                        )
                    })}

                </Map>

                <style jsx global>{`
                body {
                    display: block;
                    margin: 0px;
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
