import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./Clock";
import FavoriteColor from './FavoriteColor';
const elements =
    <div>
        <Clock/>,
        <FavoriteColor/>
    </div>
    ReactDOM.render(
        elements,
      document.getElementById('root')
    );
