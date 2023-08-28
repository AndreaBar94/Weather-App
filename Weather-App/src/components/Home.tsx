import { Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { CustomButton, CustomTextField } from './CustomStyles';
import { fetchCityData, fiveDaysForecast, weatherFetch } from '../redux/actions';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import SearchIcon from '@mui/icons-material/Search';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpeedIcon from '@mui/icons-material/Speed';
import CityForecast5Days from './CityForecast5Days';

const Home = () => {
  const [search, setSearch] = useState('');
  const [isSearchSubmitted, setIsSearchSubmitted] = useState(false);
  const dispatch = useAppDispatch();
  const cityData = useAppSelector((state) => state.cityData);
  const weatherData = useAppSelector((state) => state.weatherData);
  const fiveDaysForecastData = useAppSelector((state) => state.fiveDaysForecastData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSearchSubmitted(true);
    dispatch(fetchCityData(search));
  };

  useEffect(() => {
    if (isSearchSubmitted && cityData && cityData.length > 0) {
      weatherFetch(dispatch, cityData);
      fiveDaysForecast(dispatch, cityData);
    }
  }, [cityData, dispatch]); 

  return (
    <>
    <Grid className='box'>
      <Grid item xs={12}>
        <h1>iWeather</h1>
      </Grid>
      <Grid item xs={12}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="cityInput">
            <CustomTextField
              id="outlined-basic" 
              variant="outlined"
              label="Type your city here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <CustomButton variant="outlined" type="submit" className='searchBtn'>
              <SearchIcon sx={{ 
                fontSize: 44,
                color: 'white',
                  }}/>
            </CustomButton>
          </div>
        </Box>
      </Grid>
    </Grid>
    {weatherData.id !== null && (
      <Grid className='box'>
        <Grid item>
          {weatherData && (
            <>
                <h3>{weatherData.name}</h3>
              <p>
                Weather: {weatherData.weather[0].main} ({weatherData.weather[0].description})
              </p>
              <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
              <p className='infoWeatherPar'>
                <WaterDropIcon sx={{
                  marginRight: '5px'
                }}/> 
                Humidity: {weatherData.main.humidity}%
              </p>
                <p className='infoWeatherPar'>
                  <DeviceThermostatIcon sx={{
                  marginRight: '5px'
                }}/>
                  Temperature: {weatherData.main.temp} °C 
                </p>
                <p className='infoWeatherPar'>
                  Perceived Temperature: {weatherData.main.feels_like} °C
                </p>
                <p className='infoWeatherPar'>
                  <RemoveIcon/><DeviceThermostatIcon sx={{
                  marginRight: '5px'
                }}/>
                Min: {weatherData.main.temp_min} °C 
                </p>
                <p className='infoWeatherPar'>
                  <AddIcon/><DeviceThermostatIcon sx={{
                  marginRight: '5px'
                }}/>
                Max: {weatherData.main.temp_max} °C
                </p>
                <p className='infoWeatherPar'>
                  <SpeedIcon sx={{
                  marginRight: '7px'
                }}/>
                 Pressure: {weatherData.main.pressure} bar
                </p>
                </Grid>
            </>
          )}
        </Grid>
      </Grid>
    )}
    {weatherData.id !== null && (
      <Grid className='box'>
        <CityForecast5Days forecastData={fiveDaysForecastData} />
      </Grid>
    )}  
    </>
  )
}

export default Home;
