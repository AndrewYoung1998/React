import React, {useState} from "react";
import MovieData from "./movieData";
import './MovieStyle.css';
const Movie = () =>{
    let [responseObj, setResponseObj] = useState({});
    let [movie_title, setTitle] = useState('');

    function getMovie(e){
        e.preventDefault();
        fetch(` http://www.omdbapi.com/?t=${movie_title}&apikey=62bb7a53`, {
            "method": "GET"
        })
            .then(response => response.json())
            .then(response =>{
                setResponseObj(response)
            })
            .catch(err => {
                console.log(err);
            })
    }
    return(
        <div className='container'>
            <h1>Get Movie</h1>
            {/*<div><pre>{JSON.stringify(responseObj, null, 2)}</pre></div>}*/}
            <MovieData responseObj={responseObj}/>
            <form onSubmit={getMovie}>
                <input type='text' placeholder='Enter Movie' value={movie_title} onChange={(e) => setTitle(e.target.value)}/>
                <button type='submit'>Get Movie</button>
            </form>
        </div>


    )
}
export default Movie;
