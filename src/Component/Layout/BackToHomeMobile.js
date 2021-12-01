
import classes from './BackToHomeMobile.module.css';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../../images/left-arrow.svg'


const BackToHomeMobile=()=> {
  const navigate = useNavigate();
  const backToHome=()=>{
    navigate("/");
  }

  return (
    <div className={classes.navmobile} onClick={backToHome}>
      <div>
        <img src={leftArrow} alt=""/><span>Home Page</span>
      </div>
    </div>
  );
}

export default BackToHomeMobile;
