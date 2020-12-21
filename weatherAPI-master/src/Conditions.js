import React from "react";

const Conditions = (props) => {
    return(
        <div>
            {props.responseObj.cod === 200 ?
                <div>
                    <p>
                            <img src ={`http://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}.png`} alt="wthr img" />
                    </p>
                    <p>
                        <strong>
                            {props.responseObj.name}
                        </strong>
                    </p>
                    <p>
                        <strong>
                            {props.responseObj.main.temp}° with {props.responseObj.weather[0].description}
                        </strong>
                    </p>
                </div>:null
            }
        </div>
    )
}
export default Conditions;