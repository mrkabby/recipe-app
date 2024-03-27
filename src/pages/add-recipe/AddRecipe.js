import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';


const countries = [
  {
    value: 'GH',
    label: 'Ghana',
  },
  {
    value: 'NG',
    label: 'Nigeria',
  },
  {
    value: 'TG',
    label: 'Togo',
  },
  {
    value: 'AU',
    label: 'Australia',
  },
];

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const AddRecipe = () => {
  return (
    <div>
    <Container sx={{my: '2rem'}} maxWidth='lg'>
      <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth />
      <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
          fullWidth
          sx={{my:'2rem'}}
        />
     
      <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="GH"
          helperText="Please select your currency"
          fullWidth
          sx={{my:'1rem'}}
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Stack justifyContent="space-between" direction="row">
        <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload image
      <VisuallyHiddenInput type="file" />
    </Button>
    <Button variant="contained">Submit</Button>
    </Stack>
      </Container>
  
    </div>
  );
}

export default AddRecipe;