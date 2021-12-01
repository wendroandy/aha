
import { Input } from '@mui/material';

const SearchBar =(props)=> {
  return (
      <Input onChange={(e)=>props.onKeywordChangeHandler(e)}sx={{
        width: '100%',
        fontFamily: "Ubuntu",
        fontSize: '14px',
        padding: '17px 18px',
        fontWeight: '400',
        lineHeight: '21px',
        letterSpacing: '0.25px',
        border: "3px solid rgba(255, 255, 255, 0.5)",
        borderRadius: "6px",
          '&.Mui-focused': {
            border: "3px solid #FF9B33",
            outline: "none !important",
          },
          '& .MuiInput-input': {
            padding: '0px',
            color: 'white'
          },
          '& .MuiInput-input::placeholder': {
            color: 'white',
            opacity: '0.3'
          },
          '&.MuiInput-root::before,&.MuiInput-root::after': {
            display: 'none',
          }
      }}
      variant="Outlined" placeholder={props.text}></Input>
  );
}

export default SearchBar;
