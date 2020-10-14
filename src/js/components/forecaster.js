import React, {useState, useEffect} from 'react';
import LoadingMask from 'react-loadingmask';
import 'react-loadingmask/dist/react-loadingmask.css';

import './weather_forecast.css';

const dayjs = require('dayjs');
let now = dayjs();

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

  const [weather_01, setWeather_01] = useState('');
  const [weather_02, setWeather_02] = useState('');
  const [weather_03, setWeather_03] = useState('');
  const [weather_04, setWeather_04] = useState('');
  const [weather_05, setWeather_05] = useState('');
  const [weather_06, setWeather_06] = useState('');
  const [weather_07, setWeather_07] = useState('');
  const [weather_08, setWeather_08] = useState('');
  const [weather_09, setWeather_09] = useState('');
  const [weather_10, setWeather_10] = useState('');

  const [period_01, setPeriod_01] = useState('');
  const [period_02, setPeriod_02] = useState('');
  const [period_03, setPeriod_03] = useState('');
  const [period_04, setPeriod_04] = useState('');
  const [period_05, setPeriod_05] = useState('');
  const [period_06, setPeriod_06] = useState('');
  const [period_07, setPeriod_07] = useState('');
  const [period_08, setPeriod_08] = useState('');
  const [period_09, setPeriod_09] = useState('');
  const [period_10, setPeriod_10] = useState('');

  const [humidity_01, setHumidity_01] = useState('');
  const [humidity_02, setHumidity_02] = useState('');
  const [humidity_03, setHumidity_03] = useState('');
  const [humidity_04, setHumidity_04] = useState('');
  const [humidity_05, setHumidity_05] = useState('');
  const [humidity_06, setHumidity_06] = useState('');
  const [humidity_07, setHumidity_07] = useState('');
  const [humidity_08, setHumidity_08] = useState('');
  const [humidity_09, setHumidity_09] = useState('');
  const [humidity_10, setHumidity_10] = useState('');

  const [temp_01, setTemp_01] = useState('');
  const [temp_02, setTemp_02] = useState('');
  const [temp_03, setTemp_03] = useState('');
  const [temp_04, setTemp_04] = useState('');
  const [temp_05, setTemp_05] = useState('');
  const [temp_06, setTemp_06] = useState('');
  const [temp_07, setTemp_07] = useState('');
  const [temp_08, setTemp_08] = useState('');
  const [temp_09, setTemp_09] = useState('');
  const [temp_10, setTemp_10] = useState('');

  const [description_01, setDescription_01] = useState('');
  const [description_02, setDescription_02] = useState('');
  const [description_03, setDescription_03] = useState('');
  const [description_04, setDescription_04] = useState('');
  const [description_05, setDescription_05] = useState('');
  const [description_06, setDescription_06] = useState('');
  const [description_07, setDescription_07] = useState('');
  const [description_08, setDescription_08] = useState('');
  const [description_09, setDescription_09] = useState('');
  const [description_10, setDescription_10] = useState('');

  const [forecastTime, setForecastTime] = useState('null');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setCity(e.target.value);
    console.log('cityChange', city);
  };

  const getWeatherInfo = async (e) => {
    // const [city, setCity] = useState('');
    // fetchWeather(city)
    // city = "ikeja"
    setLoading(true);

    e.preventDefault();
    try {
      setError({});

      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}
    &units=metric&appid=e4cf0bec055e645405a30c6e7f389ac7`)
        .then((res) => res.json())
        .then((data) => {
          console.log('dtempe', data);

          for (let d in data) {
            setDayTemp(data.list[0].main.temp);
            setDate(
              dayjs.unix(data.list[1].dt).format('dddd, MMMM D h:mm:ss a'),
            );
            setCity(city);
            setCountry(data.city.country);
            setFeelsLike(data.list[0].main.feels_like);
            setDescription(data.list[0].weather[0].description);
            setIconID(data.list[0].weather[0].icon);
            setPressure(data.list[0].main.pressure);
            setHumidity(data.list[0].main.humidity);
            setWindSpeed(data.list[0].wind.speed);

            setWeather_01(data.list[0].weather[0].icon);
            setPeriod_01(data.list[0].dt);
            setHumidity_01(data.list[0].main.humidity);
            setTemp_01(data.list[0].main.temp);
            setDescription_01(data.list[0].weather[0].description);
          }
          // setDayTemp(data.list[0].main.temp);
          // setDate(data.list[0].dt_txt);
          // setCity(city);
          // setCountry(data.city.country);
          // setFeelsLike(data.list[0].main.feels_like);
          // setDescription(data.list[0].weather[0].description);
          // setIconID(data.list[0].weather[0].icon);
          // setPressure(data.list[0].main.pressure);
          // setHumidity(data.list[0].main.humidity);
          // setWindSpeed(data.list[0].wind.speed);

          setWeather_01(data.list[0].weather[0].icon);
          setWeather_02(data.list[1].weather[0].icon);
          setWeather_03(data.list[2].weather[0].icon);
          setWeather_04(data.list[3].weather[0].icon);
          setWeather_05(data.list[4].weather[0].icon);
          setWeather_06(data.list[5].weather[0].icon);
          setWeather_07(data.list[6].weather[0].icon);
          setWeather_08(data.list[7].weather[0].icon);
          setWeather_09(data.list[8].weather[0].icon);
          setWeather_10(data.list[9].weather[0].icon);

          // let now2 = dayjs.unix(period_02);
          // console.log('now2', now2.format("ddd, MMMM D h:mm:ss a"))

          setPeriod_01(dayjs.unix(data.list[0].dt).format('ddd, hh:mm:ss a'));
          setPeriod_02(dayjs.unix(data.list[1].dt).format('ddd, hh:mm:ss a'));
          setPeriod_03(dayjs.unix(data.list[2].dt).format('ddd, hh:mm:ss a'));
          setPeriod_04(dayjs.unix(data.list[3].dt).format('ddd, hh:mm:ss a'));
          setPeriod_05(dayjs.unix(data.list[4].dt).format('ddd, hh:mm:ss a'));
          setPeriod_06(dayjs.unix(data.list[5].dt).format('ddd, hh:mm:ss a'));
          setPeriod_07(dayjs.unix(data.list[6].dt).format('ddd, hh:mm:ss a'));
          setPeriod_08(dayjs.unix(data.list[7].dt).format('ddd, hh:mm:ss a'));
          setPeriod_09(dayjs.unix(data.list[8].dt).format('ddd, hh:mm:ss a'));
          setPeriod_10(dayjs.unix(data.list[9].dt).format('ddd, hh:mm:ss a'));

          setHumidity_01(data.list[0].main.humidity);
          setHumidity_02(data.list[1].main.humidity);
          setHumidity_03(data.list[2].main.humidity);
          setHumidity_04(data.list[3].main.humidity);
          setHumidity_05(data.list[4].main.humidity);
          setHumidity_06(data.list[5].main.humidity);
          setHumidity_07(data.list[6].main.humidity);
          setHumidity_08(data.list[7].main.humidity);
          setHumidity_09(data.list[8].main.humidity);
          setHumidity_10(data.list[9].main.humidity);

          setTemp_01(data.list[0].main.temp);
          setTemp_02(data.list[1].main.temp);
          setTemp_03(data.list[2].main.temp);
          setTemp_04(data.list[3].main.temp);
          setTemp_05(data.list[4].main.temp);
          setTemp_06(data.list[5].main.temp);
          setTemp_07(data.list[6].main.temp);
          setTemp_08(data.list[7].main.temp);
          setTemp_09(data.list[8].main.temp);
          setTemp_10(data.list[9].main.temp);

          setDescription_01(data.list[0].weather[0].description);
          setDescription_02(data.list[1].weather[0].description);
          setDescription_03(data.list[2].weather[0].description);
          setDescription_04(data.list[3].weather[0].description);
          setDescription_05(data.list[4].weather[0].description);
          setDescription_06(data.list[5].weather[0].description);
          setDescription_07(data.list[6].weather[0].description);
          setDescription_08(data.list[7].weather[0].description);
          setDescription_09(data.list[8].weather[0].description);
          setDescription_10(data.list[9].weather[0].description);
          setLoading(false);
        });
    } catch (error) {
      console.log('error', error);
      setError(error);
    }
  };

  // const vday = period_01

  console.log('rrrrrr', now.format('dddd, MMMM D YYYY'));
  let now2 = dayjs.unix(period_02);
  console.log('now2', now2.format('ddd, MMMM D h:mm:ss a'));
  // const  current_date = new Date()
  // const cday = current_date.getDay();
  // const nameOfDay = weekday[cday];

  // document.write("The day of the week of current date is : "+cday)

  // setDate(data.dt);

  // let myDate = new Date(date * 1000);

  // console.log("date", date, "myDate2", myDate.toLocaleString() );
  // let todayDate = myDate.toLocaleString();

  // <LoadingMask loading={true} text={"loading..."}>
  // <div style={{ width: 500, height: 300 }}>Compoment You want to display</div>
  // </LoadingMask>

  return (
    <LoadingMask loading={loading} text={'loading...'}>
      <div className="container-fluid home p-5">
        <div className="container rounded p-5">
          <div className="row first_second p-5 ">
            <div className="col-md-8 first">
              <div className="row">
                <div className="col p-5">
                  <h1>
                    Weather Forecast
                    {/* {nameOfDay} */}
                  </h1>
                </div>
                {/* <div className="col"> */}
                {/* <div className="form-group py-5">
                 <label >Password: `${iconID.png}`</label> 
                <img src={`http://openweathermap.org/img/w/${iconID}.png`} alt="icon"/>
                <input type="text" className="form-control" id="pwd"/>
              </div>  */}

                <div className="col-md-6 p-5">
                  <form
                    className="form-inline mr-auto mb-4"
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
                  </form>
                </div>

                {/* <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search"
                />
              </div> */}
                {/* </div> */}
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th className="py-5" scope="col">
                      Time
                    </th>
                    <th className="py-5" scope="col">
                      humidity(%)
                    </th>

                    <th className="py-5" scope="col">
                      temp(oC)
                    </th>
                    <th className="py-5" scope="col">
                      weather
                    </th>
                    <th className="py-5" scope="col">
                      description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{period_01}</td>
                    <td>{humidity_01}</td>
                    <td>{temp_01}</td>
                    <td className="">
                      <img
                        src={`http://openweathermap.org/img/w/${weather_01}.png`}
                        alt="icon"
                      />
                    </td>
                    <td>{description_01}</td>
                  </tr>
                  <tr>
                    <td>{period_02}</td>
                    <td>{humidity_02}</td>
                    <td>{temp_02}</td>
                    <td className="">
                      <img
                        src={`http://openweathermap.org/img/w/${weather_02}.png`}
                        alt="icon"
                      />
                    </td>
                    <td>{description_02}</td>
                  </tr>
                  <tr>
                    <td>{period_03}</td>
                    <td>{humidity_03}</td>
                    <td>{temp_03}</td>
                    <td className="">
                      <img
                        src={`http://openweathermap.org/img/w/${weather_03}.png`}
                        alt="icon"
                      />
                    </td>
                    <td>{description_03}</td>
                  </tr>
                  <tr>
                    <td>{period_04}</td>
                    <td>{humidity_04}</td>
                    <td>{temp_04}</td>
                    <td className="">
                      <img
                        src={`http://openweathermap.org/img/w/${weather_04}.png`}
                        alt="icon"
                      />
                    </td>
                    <td>{description_04}</td>
                  </tr>
                  <tr>
                    <td>{period_05}</td>
                    <td>{humidity_05}</td>
                    <td>{temp_05}</td>
                    <td className="">
                      <img
                        src={`http://openweathermap.org/img/w/${weather_05}.png`}
                        alt="icon"
                      />
                    </td>
                    <td>{description_05}</td>
                  </tr>
                  <tr>
                    <td>{period_06}</td>
                    <td>{humidity_06}</td>
                    <td>{temp_06}</td>
                    <td className="">
                      <img
                        src={`http://openweathermap.org/img/w/${weather_06}.png`}
                        alt="icon"
                      />
                    </td>
                    <td>{description_06}</td>
                  </tr>
                  <tr>
                    <td>{period_07}</td>
                    <td>{humidity_07}</td>
                    <td>{temp_07}</td>
                    <td className="">
                      <img
                        src={`http://openweathermap.org/img/w/${weather_07}.png`}
                        alt="icon"
                      />
                    </td>
                    <td>{description_07}</td>
                  </tr>
                  <tr>
                    <td>{period_08}</td>
                    <td>{humidity_08}</td>
                    <td>{temp_08}</td>
                    <td className="">
                      <img
                        src={`http://openweathermap.org/img/w/${weather_08}.png`}
                        alt="icon"
                      />
                    </td>
                    <td>{description_08}</td>
                  </tr>
                  <tr>
                    <td>{period_09}</td>
                    <td>{humidity_09}</td>
                    <td>{temp_09}</td>
                    <td className="">
                      <img
                        src={`http://openweathermap.org/img/w/${weather_09}.png`}
                        alt="icon"
                      />
                    </td>
                    <td>{description_09}</td>
                  </tr>
                  <tr>
                    <td>{period_10}</td>
                    <td>{humidity_10}</td>
                    <td>{temp_10}</td>
                    <td className="">
                      <img
                        src={`http://openweathermap.org/img/w/${weather_10}.png`}
                        alt="icon"
                      />
                    </td>
                    <td>{description_10}</td>
                  </tr>
                </tbody>
              </table>

              {/* <div className="row p-5">
              <canvas id="lineChart"></canvas>
          </div> */}
            </div>

            <div className="col-md-4 second">
              <div className="row ">
                <div className="col-md-8 justify-content-center text-center d-flex present_date py-5 ">
                  <div className=" ">
                    <img
                      src={`http://openweathermap.org/img/w/${iconID}.png`}
                      className="todayImgStyle"
                      alt="icon"
                    />
                  </div>
                  <div className="present_day">
                    <p className="today">Today</p>
                    <p> {date}</p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col text-center">
                  <div className="">
                    <div className="temp_reading">
                      {`${dayTemp}`}
                      <span className="O_deg align-top">oC</span>
                    </div>
                    <p>
                      {' '}
                      {city}, {country}{' '}
                    </p>{' '}
                    <p>
                      Feels like {feels_like}. {description}{' '}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center col-lg-12">
                <div className="col-md-2 col-sm-2 d-flex p-5">
                  <i
                    className="fas fa-wind px-2"
                    style={{fontSize: '20px', color: '#4b95ea'}}
                  ></i>
                  {windSpeed} <span>m/h</span>
                </div>
                <div className="col-md-2 col-sm-2 d-flex p-5">
                  <i
                    className="fas fa-smog px-2"
                    style={{fontSize: '20px', color: '#4b95ea'}}
                  ></i>
                  {humidity} <span>%</span>
                </div>
                <div className="col-md-2 col-sm-2 d-flex p-5">
                  <i
                    className="fas fa-smog px-2"
                    style={{fontSize: '20px', color: '#4b95ea'}}
                  ></i>
                  {pressure} <span>hpa</span>
                </div>
              </div>

              {/* <div className="p-5">
            <p>Chance of Rain</p>
          </div>
          <div className="">
          <canvas id="barChart"></canvas>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </LoadingMask>
  );
};

{
  /* <div style={{backgroundColor : 'red'}}></div> */
}

export default WeatherForecast;
