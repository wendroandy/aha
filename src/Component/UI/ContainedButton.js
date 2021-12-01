
import { Button } from '@mui/material';

const ContainedButton =(props)=> {
  return (
      <Button sx={{
          padding: "6px 5px",
          minWidth: "auto",
          fontFamily: 'Open Sans',
          fontSize: '12px',
          backgroundColor: 'white',
          color: '#121212',
          borderRadius: '20px',
          textTransform:'none',
          lineHeight: "100%",
          border: '1px solid #121212',
          '&:hover': {
           color: 'white',
           border: '1px solid #FFFFFF',
           backgroundColor: '#121212'
          },

      }}
      variant="contained">{props.text}</Button>
  );
}

export default ContainedButton;
