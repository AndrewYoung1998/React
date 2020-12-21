import React from "react";
import CarImage from "./car.png"

class Car extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    changeColor = color =>{
        this.setState({ changeColor: color });
    }
    render() {
        return(
            <div style={{backgroundColor: this.state.changeColor}}>
                <img src={CarImage} alt=''></img>
                <br></br>
                <button type="button" onClick={ () => this.changeColor('yellow')}>Yellow</button>
                <button type="button" onClick={ () => this.changeColor('blue')}>Blue</button>
                <button type="button" onClick={ () => this.changeColor('green')}>Green</button>
                <button type="button" onClick={ () => this.changeColor('orange')}>Orange</button>
            </div>
        );
    }
}
export default Car