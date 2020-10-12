import React from 'react';
import ReactDOM from 'react-dom';


import WeatherForecast from './js/components/weather_forecast';

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<WeatherForecast />, wrapper) : false;
