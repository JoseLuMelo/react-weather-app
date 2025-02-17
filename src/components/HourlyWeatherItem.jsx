import { weatherCodes } from "../constants";

const HourlyWeather = ({ hourlyWeather }) => {

  const time = hourlyWeather.time.split(" ")[1];
  const temperature = Math.floor(hourlyWeather.temp_c);
  const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(hourlyWeather.condition.code));

  return (
    <li className="weather-item">
        <p className="time">{time}</p>
        <img src={`icons/${weatherIcon}.svg`} alt="clouds svg" className="weather-icon" />
        <p className="temperature">{temperature}</p>
    </li>
  )
}

export default HourlyWeather