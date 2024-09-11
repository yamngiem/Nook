import React, { useState } from "react";
import axios from "axios";
import './weatherapp.css';


const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData();
    };

    const getWeatherImage = () => {
        if (!weatherData) return null; // Jos säätietoja ei ole, palauta null
        const weatherType = weatherData.weather[0].main.toLowerCase();
        if (weatherType === "clouds") {
            return <img src="../kuvat/cloud.png" alt="Cloud" className="cloudapipic" />;
        }
        else if (weatherType === "rain") {
            return <img src="../kuvat/drizzle.png" alt="Rain" className="rain" />;
        }
        else if (weatherType === "clear") {
            return <img src="../kuvat/clear.png" alt="Clear" className="clear" />;
        }
        else if (weatherType === "snow") {
            return <img src="../kuvat/snow.png" alt="Snow" className="snow" />;
        }
        else if (weatherType === "drizzle") {
            return <img src="../kuvat/rain.png" alt="Drizzle" className="drizzle" />;
        }
        else if (weatherType === "mist") {
            return <img src="../kuvat/rain.png" alt="Drizzle" className="drizzle" />;
        }


        // Lisää muut säätyypit tarvittaessa
    };

    const getTemperatureInCelsius = () => {
        if (!weatherData) return null;
        const kelvinTemperature = weatherData.main.temp;
        const celsiusTemperature = kelvinTemperature - 273.15; // Kelvin to Celsius conversion
        return celsiusTemperature.toFixed(1); // Palautetaan lämpötila yhden desimaalin tarkkuudella
    };

    const getHumidity = () => {
        if (!weatherData) return null;
        const humidity = weatherData.main.humidity;
        return humidity;
    };

    const getWindSpeed = () => {
        if (!weatherData || !weatherData.wind) return null;
        const windSpeed = weatherData.wind.speed;
        return windSpeed;
    };


    return (
        <div className="weatherappi">
            <form id="weatherform" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <button type="submitcity" className="search-button">
                    <img src="../kuvat/search.png" alt="Search" className="search" />
                </button>
            </form>
            {weatherData && (
                <div className="weatherData">
                    <div className="bigicons">
                        {getWeatherImage()}
                        <p id="celsius">{getTemperatureInCelsius()}°C</p>

                        <h1 id="weathercity">{weatherData.name}</h1>
                        <p1>{weatherData.weather[0].description}</p1>
                    </div>


                    <div className="miniicons">
                        <p>
                        <img src="../kuvat/humidity.png" alt="Humidity" className="humidity" /> <span>{getHumidity()}% </span>
                            <span>Humidity</span>
                        </p>
                        <p>
                        <img src="../kuvat/wind.png" alt="Wind" className="wind" />  <span>{getWindSpeed()}m/s Wind&nbsp;Speed</span>
                        </p>
                    </div>


                </div>
            )}

        </div>
    );
};

export default Weather;
