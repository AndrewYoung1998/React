import React from 'react';
import GoogleMapReact from 'google-map-react'

const img = <img src = "./iss.svg" alt = "iss" height = "30px"/>
const SpaceStation = ({ img }) => <div>{img}</div>

class Map extends React.Component{

    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 1
    }
    componentDidMount() {
        this.getCoordinates()
        this.interval = setInterval(this.getCoordinates, 5000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    getCoordinates = () =>{
        fetch("http://api.open-notify.org/iss-now.json")
            .then(res => res.json())
            .then(data =>this.setState({
                center:{
                    lat:data.iss_position.latitude,
                    lng:data.iss_position.longitude,
                }
            }))
        console.log(this.state.center)
    }

    render(){
        return(
            <div className = "map" style={{ height: '100vh', width: '100vw' }}>
                <GoogleMapReact className = "map"
                                bootstrapURLKeys={{key:"AIzaSyCLOXOzLoo3XYUAaO10XxtKNQTrb8N2wT8" }}
                                center={this.state.center}
                                zoom={this.state.zoom}
                >
                    <SpaceStation
                        lat = {this.state.center.lat}
                        lng = {this.state.center.lng}
                        img = {img}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
export default Map
