import { Grid, Box} from '@mui/material';
import { useEffect, useState } from 'react';
import { CustomButton, CustomTextField } from './CustomStyles';
import { fetchCityData, weatherFetch } from '../redux/actions';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const cityData = useAppSelector((state) => state.cityData);
  const weatherData = useAppSelector((state) => state.weatherData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchCityData(search));
  };

  useEffect(() => {
    if (cityData && cityData.length > 0) {
      weatherFetch(dispatch, cityData);
    }
  }, [cityData, dispatch]);

  return (
    <Grid className='mainBox'>
      <Grid item xs={12}>
        <h1 className='text-center'>iWeather</h1>
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
      <Grid item>
        {weatherData && (
          <>
            <h3>{weatherData.name}</h3>
            <p>
              Weather: {weatherData.weather[0].description}
            </p>
            <p>
              Humidity: {weatherData.main.humidity}%
            </p>
            {/* TEMPERATURA, WORK IN PROGRESS */}
            <p>
              Temperature: {weatherData.main.temp} °C
            </p>
            <p>
              Perceived Temperature: {weatherData.main.feels_like} °C
            </p>
            <p>
              Min: {weatherData.main.temp_min} °C <br />
              Max: {weatherData.main.temp_max} °C
            </p>
            <p>
              Pressure: {weatherData.main.pressure} bar
            </p>
          </>
          
        )}
      </Grid>
      <Grid item></Grid>
    </Grid>
  )
}

export default Home;
