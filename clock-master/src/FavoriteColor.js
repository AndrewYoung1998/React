import React from "react";

class FavoriteColor extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            favoriteColor: 'red'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor:"green"})
        },5000)
    }

    render(){
        return(
            <h1>My favorite color is {this.state.favoriteColor}</h1>
        )
    }
}
export default FavoriteColor;