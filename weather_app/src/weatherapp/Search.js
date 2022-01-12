import React, { useState } from 'react';
import { fetchData } from './api/fetchData';

const Search = () => {

    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const searchData = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchData(query);
            setWeather(data);
            setQuery();
            // console.log(data);
        }
    }

    return (
        <div className='container'>
            <div className='formArea'>
                <input type="text"
                    className="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={searchData}
                />
            </div>
            {weather.main && (
                <div className='result'>
                    <div className="info">
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                        />
                    </div>
                    <div className='details'>
                        <div className='locationName'>
                            <h2>
                                <span>{weather.name}</span>
                                <sup>{weather.sys.country}</sup>
                            </h2>
                            <div className='temp'>
                                {Math.round(weather.main.temp)}
                                <sup>&deg;C</sup>
                                <p>{weather.weather[0].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;