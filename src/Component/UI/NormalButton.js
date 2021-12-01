
import { Button } from '@mui/material';

const NormalButton =(props)=> {
  return (
      <Button onClick={props.onClick}sx={{
          width: 343,
          maxWidth: '100%',
          fontFamily: 'Ubuntu',
          fontWeight: 700,
          fontSize: '14px',
          backgroundColor: 'white',
          color: "#121212",
          height: "40px",
          textTransform:'none',
          '&:hover': {
            backgroundColor: '#121212',
            color: 'white',
            border: '1px solid #FFFFFF'
          },

      }}
      variant="text">{props.text}</Button>
  );
}

export default NormalButton;
