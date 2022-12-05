import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    1: 'Favorite!',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  
  export default function HoverRating() {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
  
    return (
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          max={1}
          precision={1}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon fontSize='inherit' />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    );
  }