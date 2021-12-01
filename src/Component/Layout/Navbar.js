
import classes from  './Navbar.module.css';
import logo from '../../images/logo.svg'
import menuOff from '../../images/menu-off.svg'
import menuOn from '../../images/menu-on.svg'
import {  useState,useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';


const Navbar =(props)=> {
  const location = useLocation();
  let currentPage =location.pathname==="/tags" ? "Tags":"Home";
  const navigate = useNavigate();
  const [activeMenu,setActiveMenu] = useState(currentPage);
  const [notification,setNotification]= useState(['Home']);
  

  useEffect(()=>{
    setActiveMenu( currentPage) ;
  },[currentPage])
  

  const menuClickHandler=(menu)=> {
    setActiveMenu(menu);
    if(!notification.includes(menu)) {
      setNotification((prevState)=> ([...prevState,menu]))
    }
    if(menu==='Home') {
      navigate('/');
    } else {
      navigate('/tags');
    }
  }
  return (
    <nav>
      <div className={classes.logo} ><img src={logo} alt=""/></div>
      <div className={classes.menu}>
        <div>
          <div onClick={()=> menuClickHandler("Home")}><img alt="" src={activeMenu === "Home" ? menuOn : menuOff }/><div className={`${classes.menutext} ${activeMenu==="Home" ? classes.active: "" }`}>Home</div></div>
          {!notification.includes("Home") ? <div className={classes.notification}></div>: ""}
        </div>
        <div>
          <div onClick={()=> menuClickHandler("Tags")}><img alt="" src={activeMenu === "Tags" ? menuOn : menuOff }/><div className={`${classes.menutext} ${activeMenu==="Tags" ? classes.active: "" }`}>Tags</div></div>
          {!notification.includes("Tags") ? <div className={classes.notification}></div>: ""}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
