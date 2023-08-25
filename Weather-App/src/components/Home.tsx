import { Grid, Box, TextField } from '@mui/material'
import { styled } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& label.MuiInputLabel-root': {
        color: 'white',
    },
    '& label.Mui-focused': {
        color: 'white',
    }
  });

const Home = () => {
    const [search, setSearch] = useState();
    const dispatch = useDispatch();
    
  return (
        <Grid container className='mainBox'>
            <Grid item xs={12}>
                <h1 className='text-center'>iWeather</h1>
            </Grid>
            <Grid item xs={12}>
                <p>Choose your city to check the weather!</p>
                <Box
                    component="form"
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
                        />
                    </div>
                </Box>
            </Grid>
            <Grid item></Grid>
            <Grid item></Grid>
        </Grid>
  )
}

export default Home