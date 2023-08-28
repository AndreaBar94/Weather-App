import { FiveDaysForecastData } from '../utils/types';
import { Box } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import rain from '../assets/svgs/Rain.svg';

const CityForecast5Days = ({ forecastData }: { forecastData: FiveDaysForecastData }) => {

  const weatherIcon = (weatherMain: string) => {
    switch (weatherMain) {
      case "Rain":
        return rain;
      default:
        return null; 
    }
  };

  return (
    <>
      {forecastData && forecastData.list.map((day) => (
        <Box sx={{ marginBottom: '2rem' }}>
          <h3>{day.dt_txt}</h3>
          {day.weather[0].main !== null && (
            <>
              <img src={weatherIcon(day.weather[0].main)} alt="weatherIcon" />
              <p>{day.weather[0].main}</p>
            </>
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
