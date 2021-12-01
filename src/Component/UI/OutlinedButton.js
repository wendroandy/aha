
import { Button } from '@mui/material';

const OutlinedButton =(props)=> {
  return (
      <Button sx={{
          padding: "7px 9px",
          minWidth: "auto",
          fontFamily: 'Open Sans',
          color: 'white',
          fontSize: '12px',
          border: '1px solid #FFFFFF',
          borderRadius: '20px',
          textTransform:'none',
          lineHeight: "100%",
          '&:hover': {
           color: '#121212',
           backgroundColor: 'white'
          },

      }}
      variant="outlined">{props.text}</Button>
  );
}

export default OutlinedButton;
