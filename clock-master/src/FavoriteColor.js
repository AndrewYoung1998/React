import React from "react";

class FavoriteColor extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            favoriteColor: 'red'
        }
    }
    componentDidMount() {
        this.color = setTimeout(() => {
            this.setState({favoriteColor:"green"})
        },5000)
        setTimeout(()=>{
            this.setState({favoriteColor:'blue'})
        },10000)
    }

    render(){
        return(
            <h1>My favorite color is {this.state.favoriteColor}</h1>
        )
    }
}
export default FavoriteColor;
