import { IPData, WeatherData } from '@/types/types';
import { fetchWithCache } from '@/utils/fetch';
import { useEffect, useState } from 'react';

const Weather: React.FC = () => {
  const [ipData, setIpData] = useState<IPData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching IP data to get location info (latitude, longitude)
        const ipResult = await fetchWithCache<IPData>('https://ipwho.is/');
        setIpData(ipResult);

        // If latitude and longitude are available, fetch weather data
        if (ipResult?.latitude && ipResult?.longitude) {
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${ipResult.latitude}&longitude=${ipResult.longitude}&current_weather=true&temperature_unit=celsius`;
          const weatherResult = await fetchWithCache<WeatherData>(url);
          setWeatherData(weatherResult);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // If IP or weather data is not available, render a blank div
  if (!ipData || !weatherData) {
    return <div className="weather"></div>;
  }

  const tempC = weatherData.current_weather.temperature;
  const city = ipData.city;

  return (
    <div className="weather visible">
      <p>
        {city} → {tempC.toFixed(1)}°C / {((tempC * 9) / 5 + 32).toFixed(1)}°F
      </p>
    </div>
  );
};

export default Weather;
