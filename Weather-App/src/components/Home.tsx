import { Container, Grid, Box, TextField } from '@mui/material'

const Home = () => {
  return (
    <Container>
        <Grid container>
            <Grid item xs={12}>
                <h1 className='text-center'>iWeather</h1>
            </Grid>
            <Grid item>
                <p>Choose your city to check the weather!</p>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                        <TextField
                        variant='outlined'
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Type your city here..."
                        />
                    </div>
                </Box>
            </Grid>
            <Grid item></Grid>
            <Grid item></Grid>
        </Grid>
    </Container>
  )
}

export default Home