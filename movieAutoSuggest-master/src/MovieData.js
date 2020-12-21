import React from "react";
const MovieData = () =>{

        fetch('https://api.themoviedb.org/3/search/movie/550?api_key=ff3553b45112826583a066d606081b55',{
            "method": "GET"
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            .catch(err =>{
                console.log(err)
            })
}

export default MovieData