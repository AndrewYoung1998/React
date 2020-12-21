import React from "react";

class Greeting extends React.Component{
    constructor() {
        super();
        this.state = {value: "Type your name"}
    }
    handleChange = (e) =>{
        this.setState({value: e.target.value});
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder={this.state.value}
                    onChange={this.handleChange}
                />
                <p>Hello, {this.state.value}</p>
            </div>
        );
    }
}

export default Greeting;
