import React from "react";
import './MovieStyle.css';
const Movie_Data = (props) => {
    return(
        <div className='content'>
            {props.responseObj.Response == "True" ?
                <div className='row'>
                    <div className='first-half'>
                        <p>
                            <img src={props.responseObj.Poster}/>
                        </p>
                    </div>
                    <div className='second-half'>
                        <p className='title'>
                            <strong>
                                {props.responseObj.Title}
                            </strong>
                        </p>
                        <p className='release'>
                            <strong>
                                {props.responseObj.Released}
                            </strong>
                        </p>
                        <p className='rating'>
                            <strong>
                                Rating: {props.responseObj.Ratings[1].Value}
                            </strong>
                        </p>
                        <p className='plot'>
                            <strong>
                                {props.responseObj.Plot}
                            </strong>
                        </p>
                        <p className='genre'>
                            <strong>
                                {props.responseObj.Genre}
                            </strong>
                        </p>
                    </div>
                </div>:null
            }
        </div>
    )
}
export default Movie_Data;