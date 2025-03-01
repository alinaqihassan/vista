import fetcher from '@/utils/fetcher';
import useSWR from 'swr';

const Weather: React.FC = () => {
  const { data: ipData } = useSWR('https://ipapi.co/json/', fetcher);

  const lat = ipData?.latitude;
  const lon = ipData?.longitude;

  const { data: weatherData } = useSWR(
    lat && lon
      ? `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius`
      : null,
    fetcher
  );

  if (!weatherData) {
    return <div className="weather"></div>;
  }

  const tempC = weatherData.current_weather.temperature;
  const city = ipData?.city;

  return (
    <div className="weather visible">
      <p>
        {city} → {tempC.toFixed(1)}°C / {((tempC * 9) / 5 + 32).toFixed(1)}°F
      </p>
    </div>
  );
};

export default Weather;
