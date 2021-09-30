import React from "react";
import CarImage from "./car.png";


class Car extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    changeColor = color =>{
        this.setState({ changeColor: color });
    }
    render() {
        const container = {
            display:'flex',
            flexDirection:'column',
            width:'750px',
            justifyContent:'center'
        };
        return(
            <div style={container}>
                <img src={CarImage} alt='Car' style={{height:'150px', width:'750px',backgroundColor: this.state.changeColor}}/>
                <br/>
                <button type="button" onClick={ () => this.changeColor('yellow')}>Yellow</button>
                <br/>
                <button type="button" onClick={ () => this.changeColor('blue')}>Blue</button>
                <br/>
                <button type="button" onClick={ () => this.changeColor('green')}>Green</button>
                <br/>
                <button type="button" onClick={ () => this.changeColor('orange')}>Orange</button>
            </div>
        );
    }
}
export default Car
