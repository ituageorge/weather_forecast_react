import React, { useState, useEffect } from 'react';
import LoadingMask from 'react-loadingmask';
import 'react-loadingmask/dist/react-loadingmask.css';

import ModalError from '../modal/Modal'
import './weather_forecast.css';

const dayjs = require('dayjs');
let now = dayjs();

{
  /* <LoadingMask loading={loading} text={'loading...'}> */
}
const WeatherForecast = () => {
  const key = 'API_KEY';
  const [feels_like, setFeelsLike] = useState('');
  const [dayTemp, setDayTemp] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('lagos');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [pressure, setPressure] = useState('');
  const [humidity, setHumidity] = useState('');
  const [iconID, setIconID] = useState('');
  const [payload, setPayload] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  let [weatherD, setWeatherD] = useState([]);
  let [periodD, setPeriodD] = useState([]);
  let [humidityD, setHumidityD] = useState([]);
  let [tempD, setTempD] = useState([]);
  let [descriptionD, setDescriptionD] = useState([]);

  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  
  const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!modal)
        }
  

  const forecastedWeather = async () => {
    // async function forecastedWeather() {
    setLoading(true);
    setModal(false);
    setError(false)
    // try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}
    &units=metric&appid=e4cf0bec055e645405a30c6e7f389ac7`);
   
    if (response.status == 200) {
      let data = await response.json()
     
        console.log('dtempe', data);
        setDayTemp(data.list[0].main.temp);
        setDate(dayjs.unix(data.list[0].dt).format('dddd, MMMM D h:mm:ss a'));
        setCity(data.city.name);
        setCountry(data.city.country);
        setFeelsLike(data.list[0].main.feels_like);
        setDescription(data.list[0].weather[0].description);
        setIconID(data.list[0].weather[0].icon);
        setPressure(data.list[0].main.pressure);
        setHumidity(data.list[0].main.humidity);
        setWindSpeed(data.list[0].wind.speed);
        setError(false);

        let payload = [];
        for (let i = 0; i < 10; i++) {
          let weatherDataD = data.list[i];
          weatherD = weatherDataD.weather[0].icon;
          periodD = weatherDataD.dt;
          humidityD = weatherDataD.main.humidity;
          tempD = weatherDataD.main.temp;
          descriptionD = weatherDataD.weather[0].description;

          let row = (
            <tr key={data.list[i].dt.toString()}>
              <td>{dayjs.unix(periodD).format('ddd, hh:mm:ss a')}</td>
              <td>{humidityD}</td>
              <td>{tempD}</td>
              <td className="">
                <img
                  src={`http://openweathermap.org/img/w/${weatherD}.png`}
                  alt="icon"
                />
              </td>
              <td>{descriptionD}</td>
            </tr>
          );
          payload.push(row);
        }
        setLoading(false);
        setPayload(payload);
       
    // }
    // )

    } else {
      let data = await response.json();
      setErrorMessage(data.message);
        console.log('errorb/4', error)
        setError(true)
        console.log('errorAfter', error)
        setModal(true)
        
        console.log('error', error)
        setLoading(false);  
         console.log("modal",modal)   
            
        // <ModalError />
    }
     
  };

  useEffect(() => {
    forecastedWeather(); 
  }, []);

  const handleChange = (e) => {
    setCity(e.target.value);
    console.log('cityChange', city);
    
  };

  const getWeatherInfo = async (e) => {
    e.preventDefault();
    setLoading(true);
    forecastedWeather()
   
  };

  

  return (
    <LoadingMask loading={loading} text={'loading...'}>
      <div className="loadingStyle">
      <div className="container-fluid home">
        
        <div className="container rounded px-2">
          <div className="row px-2">
            <div className="col-md-8 first">
              <div className="m-5 ">
                <div className=" justify-content-md-center">
                  <h1 className="text-center">Weather Forecast</h1>
                </div>
                {/* <div className="col"> */}
                {/* <div className="form-group py-5">
                 <label >Password: `${iconID.png}`</label> 
                <img src={`http://openweathermap.org/img/w/${iconID}.png`} alt="icon"/>
                <input type="text" className="form-control" id="pwd"/>
              </div>  */}

                <div className="">
                  <form
                    className="form-inline mr-auto mb-4 justify-content-center"
                    onSubmit={getWeatherInfo}
                  >
                    <div className="">
                      <input
                        className="form-control mr-sm-2"
                        type="text"
                        name="city"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={handleChange}
                      />
                    </div>
                  
                    <input type="submit" value="Check Weather" />
                    
                 {error ?  <ModalError handleModal={handleModal} modal={modal} 
                 errorMessage={errorMessage} handleChange={handleChange} getWeatherInfo={getWeatherInfo}
                  /> : null}
                  </form>
                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th className="py-2" scope="col">
                      Time
                    </th>
                    <th className="py-2" scope="col">
                      humidity(%)
                    </th>

                    <th className="py-2" scope="col">
                      temp(oC)
                    </th>
                    <th className="py-2" scope="col">
                      weather
                    </th>
                    <th className="py-2" scope="col">
                      description
                    </th>
                  </tr>
                </thead>
                <tbody>{payload}</tbody>
              </table>
            </div>

            <div className="col-md-4 second">
              <div className="row ">
                <div className="col-md-8 justify-content-center text-center d-flex present_date">
                  <div className=" ">
                    <img
                      src={`http://openweathermap.org/img/w/${iconID}.png`}
                      className="todayImgStyle"
                      alt="icon"
                    />
                  </div>
                  <div className="present_day">
                    <p className="today">Today</p>
                    <p>{date}</p>
                  </div>
                </div>
              </div>


            <div className="alert alert-light" role="alert">
              {`${dayTemp}`}
              
              <sub>o</sub>c - temperature
              {/* <span className="O_deg align-top"> oC</span> */}
            </div>

            <div className="alert alert-light" role="alert">
            <p>
                      {' '}
                      {error ? 'city not found' : city},{error ? null : country}
                    </p>{' '}
                    <p>
                      Feels like {feels_like}.{description}{' '}
                    </p>
            </div>

            <div className="alert alert-light" role="alert">
            <i
                    className="fas fa-wind px-2"
                    style={{ fontSize: '20px', color: '#4b95ea' }}
                  ></i>
                  {windSpeed} <span>m/h</span> - windspeed
            </div>

            <div className="alert alert-light" role="alert">
            <i
                    className="fas fa-smog px-2"
                    style={{ fontSize: '20px', color: '#4b95ea' }}
                  ></i>
                  {humidity} <span>%</span> - humidity
            </div>

            <div className="alert alert-light" role="alert">
            <i
                    className="fas fa-smog px-2"
                    style={{ fontSize: '20px', color: '#4b95ea' }}
                  ></i>
                  {pressure} <span>hpa</span> - pressure
            </div>

            </div>
          </div>
        </div>
      </div>
      </div>
    </LoadingMask>
  );
};

export default WeatherForecast;
