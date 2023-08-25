import { styled } from '@mui/system';
import { Button, TextField } from '@mui/material';

export const CustomButton = styled(Button)({
    '&.MuiButton-root': {
      '&:hover': {
        backgroundColor: 'white',
        stroke: 'black',
      },
      '&': {
        stroke: '#fff',
        borderColor:'white',
      },
    },
  });
export const CustomTextField = styled(TextField)({
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