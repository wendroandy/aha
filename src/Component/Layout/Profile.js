import React from 'react';
import classes from  './Profile.module.css';
import OutlinedButton from '../UI/OutlinedButton';
import ContainedButton from '../UI/ContainedButton';
import dummy1 from '../../images/dummy-pp-1.jpg'
import dummy2 from '../../images/dummy-pp-2.jpg'
import dummy3 from '../../images/dummy-pp-3.jpg'
import { useState,useEffect } from 'react';
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../../Component/Utility/Utility'




const Profile =()=> {
  const [activeTab,setActiveTab]=useState('followers')
  const [users, setUsers] = useState([])
  const [loadmore,setLoadmore]=useState(20);
  const image=[dummy1,dummy2,dummy3]

  const fillSkeleton=()=>{
    let skeleton=new Array(parseInt(20)).fill('skeleton')
    setUsers((prevState)=>([...prevState,...skeleton]))
  }

  const onClickHandler=(tab)=> {
    setUsers([]);
    setActiveTab(tab);
  }

  useEffect(() => {
    fillSkeleton()
    let url = activeTab==='followers' ? '/api/followers': '/api/following';
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUsers((prevState)=>{
        const oldArray = prevState.filter(x=>x!=="skeleton"); 
        return ([...oldArray,...data.users])
      })
    }
    const endOfPage=()=> {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setLoadmore((prevState)=>(parseInt(prevState)+20))
      }
    }
    fetchData();
    //detect bottom of the page
    window.addEventListener('scroll', endOfPage);
    return ()=> {
      window.removeEventListener('scroll', endOfPage);
    }
  }, [activeTab,loadmore])
  
  return (
    <div className={classes.profilewrapper}>
      <div className={classes.tab}>
        <div onClick={()=>onClickHandler("followers")} className={`${activeTab==='followers'? classes.active :""}`}>Followers</div>
        <div onClick={()=>onClickHandler("following")} className={`${activeTab==='following'? classes.active :""}`}>Following</div>
      </div>
      <div className={classes.resultlist}>
        {
          users.map((data)=>{
            if(data==="skeleton") {
              return (
                <SkeletonTheme baseColor="#202020" highlightColor="#444" key={+new Date() + Math.random().toString(36).substr(2, 9)}>
                  <div className={classes.resultwrapper}>
                    <div className={classes.profile}>
                      <Skeleton className={classes.image} />
                      <div className={classes.text}>
                        <div className={classes.fullname}><Skeleton width="170px" height="20px"/></div>
                        <div className={classes.username}><Skeleton width="170px" height="20px"/></div>
                      </div>
                    </div>
                  </div>
                </SkeletonTheme>
              )
            }
            else {
              return (
                <div className={classes.resultwrapper} key={+new Date() + Math.random().toString(36).substr(2, 9)}>
                  <div className={classes.profile}>
                    <img className={classes.image} src={image[data.image]} alt="" />
                    <div className={classes.text}>
                      <div className={classes.fullname}>{data.fullname}</div>
                      <div className={classes.username}>{data.username}</div>
                    </div>
                  </div>
                  <div className={classes.button}>
                    {data.following || activeTab==='following' ? <ContainedButton text="Following"/> : <OutlinedButton text="Follow"/>}
                  </div>
                </div>
              )
            }
          })
        }  
      </div>
    </div>
  );
}

export default Profile;
