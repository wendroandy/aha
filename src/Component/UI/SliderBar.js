
import { Slider } from '@mui/material';
const marks = [
  {
    value: 3,
    label: '3',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 18,
    label: '50',
  },
];
const SliderBar =(props)=> {
  return (
      <Slider
        defaultValue={15}
        max={18}
        min={3}
        step={null}
        onChangeCommitted={ (e, val) => props.onChangeHandler(val) } 
        marks={marks}
        disableSwap
        sx={{
          '& .MuiSlider-rail': {
            backgroundColor: '#5d5d5d',
            height: '8px',
            borderRadius: '8px',
            opacity: '1'
          },
          '& .MuiSlider-mark': {
            display: 'none'
          },
          '& .MuiSlider-track': {
            height: '8px',
            borderRadius: '8px',
            backgroundImage: 'linear-gradient(to right, #ff5d02, #ff800d, #ff9d25, #ffb740, #ffd05d)',
            border: 'none'
          },
          '& .MuiSlider-thumbColorPrimary': {
            width: '26px',
            height: '26px',
            background: '#1b1b1b',
            border: '6px solid #FFD05D'
          },
          '& .MuiSlider-markLabel': {
            fontFamily: "Ubuntu",
            fontWeight: {md: "500", sm:"400"},
            color: "rgba(255,255,255,0.5)",
            fontSize: '16px',
            top: '34px'
          },
          '& .MuiSlider-markLabelActive': {
            color: "white"
          },
          '& .MuiSlider-thumb::before,& .MuiSlider-thumb::after': {
            display: 'none',
          },
          '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: "none"
          }
      }}
      ></Slider>
  );
}

export default SliderBar;
