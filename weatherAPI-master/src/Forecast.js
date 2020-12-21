import React, {useState} from "react";
import Conditions from "./Conditions";

const Forecast = () =>{
    let [city, setCity] = useState('');
    let [responseObj, setResponseObj] = useState({});
    const encodedCity = encodeURIComponent(city);
    let query = 'q';

    function getForecast(e){
        e.preventDefault();
        if(!isNaN(encodedCity))
            query='zip'
        fetch(`https://api.openweathermap.org/data/2.5/weather?${query}=${encodedCity}&units=imperial&appid=76084cd5721c47f439973e4fd9d9d49b`, {
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
        <div>
            <h1>Get Current Weather</h1>
            {/*<div><pre>{JSON.stringify(responseObj, null, 2) }</pre></div>*/}
            <Conditions responseObj={responseObj}/>
            <form onSubmit={getForecast}>
                <input type='text' placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)}/>
                <button type='submit'>Get Forecast</button>
            </form>
        </div>
    )
}
export default Forecast;
