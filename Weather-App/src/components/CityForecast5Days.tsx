import { FiveDaysForecastData } from '../utils/types';
import { Box } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import rain from '../assets/svgs/Rain.svg';
import drizzle from '../assets/svgs/Drizzle.svg';
import clear from '../assets/svgs/clear.svg';
import clouds from '../assets/svgs/clouds.svg';
import dust from '../assets/svgs/dust.svg';
import fog from '../assets/svgs/fog.svg';
import smoke from '../assets/svgs/smoke.svg';
import snow from '../assets/svgs/snow.svg';
import squall from '../assets/svgs/squall.svg';
import thunderstorm from '../assets/svgs/thunderstorm.svg';
import tornado from '../assets/svgs/tornado.svg';
import error from '../assets/svgs/GenericError.svg';

const CityForecast5Days = ({ forecastData }: { forecastData: FiveDaysForecastData }) => {

const weatherIcon = (weatherMain: string | null) => {
  switch (weatherMain) {
    case "Rain":
      return rain;
    case "Drizzle":
      return drizzle;
    case "Clear":
      return clear;
    case "Clouds":
      return clouds;
    case "Dust":
      return dust;
    case "Fog":
      return fog;
    case "Smoke":
      return smoke;
    case "Snow":
      return snow;
    case "Squall":
      return squall;
    case "Thunderstorm":
      return thunderstorm;
    case "Tornado":
      return tornado;
    default:
      return error; 
  }
};

// date formatter for future use, nice to have
// const dateFormatter = (date: number | null) => {
//   if(date !== null){
//     const formattedDate = new Date(date * 1000);
//     return formattedDate.toLocaleDateString();
//   }
// }

  return (
    <>
    <h3>Forecast for the next hours:</h3>
      {forecastData && forecastData.list.map((day) => (
        <Box className="infoBoxList" key={day.dt_txt}>
          <h3>{day.dt_txt}</h3>
          {/* check on server response for changing weather icon */}
          {day.weather[0].main !== null && (
            <div className='weatherInfoList'>
              <img src={weatherIcon(day.weather[0].main)} alt="weatherIcon" width={'50px'} className='iconInfoList'/>
              <span>{day.weather[0].main}</span>
            </div>
          )}
          <p>({day.weather[0].description})</p>
          <p className='infoWeatherPar'>
            <DeviceThermostatIcon sx={{ marginRight: '5px' }} />
            Temperature: {day.main.temp} °C 
          </p>
        </Box>
      ))} 
    </>

  );
};

export default CityForecast5Days;
