export type BackgroundImageData = {
  day: number;
  image: string;
  link: string;
};

export type IPData = {
  city: string;
  latitude: number;
  longitude: number;
};

export type WeatherData = {
  current_weather: {
    temperature: number;
  };
};
