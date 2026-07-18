import React, { useState, useEffect } from 'react';
import './Widget.css';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate weather data (replace with real API call)
    setTimeout(() => {
      setWeather({
        temp: 72,
        condition: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 12
      });
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <div className="widget">Loading...</div>;
  }

  return (
    <div className="widget weather-widget">
      <h2>Weather</h2>
      <div className="weather-content">
        <div className="temp">{weather.temp}°F</div>
        <div className="condition">{weather.condition}</div>
        <div className="details">
          <div className="detail">
            <span>Humidity</span>
            <span>{weather.humidity}%</span>
          </div>
          <div className="detail">
            <span>Wind</span>
            <span>{weather.windSpeed} mph</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
