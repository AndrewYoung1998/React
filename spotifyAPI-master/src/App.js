import React, {Component} from 'react';
import Player from "./Player";
import * as $ from "jquery";
import "./App.css"
//Vars to access spotify
const authEndpoint  = "https://accounts.spotify.com/authorize?";
const clientID      = "4aac1416e9c145f1aa984c49af90fe5c";
const redirectURI   = "http://localhost:3000";
const scopes        = ["user-read-currently-playing", "user-read-playback-state"];

let parts
//create hash return
const hash = window.location.hash.substring(1).split('&').reduce(function (initial,item){
  if(item){
      parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
  },
    {});
window.location.hash="";

class App extends React.Component{
    constructor() {
        super();
        this.state ={
            toke:null,
            item:{
                album:      {images: [{url:""}]},
                name:       "",
                artists:     [{name:""}],
                duration:   0,
            },
            is_playing:     "Paused",
            progress_ms:    0,
            no_data:false,
        }
        this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
        this.tick = this.tick.bind(this);
    }

    getCurrentlyPlaying(token){
        //Make AJAX call using token
        $.ajax({
            url:"https://api.spotify.com/v1/me/player",
            type:"GET",
            beforeSend:(xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: (data) =>{
              if(!data){
                  this.setState({
                    no_data:true
                  })
              }else{
                this.setState({
                    item:data.item,
                    is_playing: data.is_playing,
                    progress_ms: data.progress_ms,
                    no_data:false
                })
              }
            }
        })

    }

    tick(){
        if(this.state.toke)
            this.getCurrentlyPlaying(this.state.token)
    }
  componentDidMount() {
    //Get access token from return
    let _token = hash.access_token;
    if(_token){
      this.setState({
            token: _token,
          });
      this.getCurrentlyPlaying(_token);
    }
    this.interval = setInterval(() => this.tick(), 1000);
  }
  render(){
    return(
        <div className="App">
          <header className="App-header">
            {!this.state.token &&(
                  <a href={`${authEndpoint}client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>Login to Spotify</a>
            )}
            {this.state.token &&(
               //Display spotify player
                <Player item={this.state.item} is_playing={this.state.is_playing} progress_ms={this.state.progress_ms}/>
            )}
          </header>
        </div>
    );
  }
}


export default App;
