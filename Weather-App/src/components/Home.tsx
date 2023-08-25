import { Grid, Box} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CustomButton, CustomTextField } from './CustomStyles';
import { fetchCityData } from '../redux/actions';

const Home = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchCityData(search));
  };

  return (
    <Grid container className='mainBox'>
      <Grid item xs={12}>
        <h1 className='text-center'>iWeather</h1>
      </Grid>
      <Grid item xs={12}>
        <p>Choose your city to check the weather!</p>
        <Box
          component="form"
          onSubmit={handleSubmit} // Aggiungi la funzione di gestione della richiesta
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
              onChange={(e) => setSearch(e.target.value)} // Aggiungi la funzione di cambio
            />
            <CustomButton variant="outlined" type="submit" className='searchBtn'>Search</CustomButton>
          </div>
        </Box>
      </Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  )
}

export default Home;
