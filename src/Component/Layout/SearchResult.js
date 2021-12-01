import classes from  './SearchResult.module.css';
import dummy1 from '../../images/dummy-1.jpg'
import dummy2 from '../../images/dummy-2.jpg'
import dummy3 from '../../images/dummy-3.jpg'
import NormalButton from '../../Component/UI/NormalButton'
import React, { useState,useEffect,useCallback } from 'react';
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../../Component/Utility/Utility'
import BackToHomeMobile from './BackToHomeMobile';
const SearchResult =(props)=> {
  const [result,setResult]=useState([])
  const [loadmore,setLoadmore]=useState(props.total)
  const image=[dummy1,dummy2,dummy3]

  const onClickHandler=()=> {
    setLoadmore((prevState)=>(parseInt(prevState)+parseInt(props.total)))
  }
  const fillSkeleton=useCallback(()=>{
    let skeleton=new Array(parseInt(props.total)).fill('skeleton')
    setResult((prevState)=>([...prevState,...skeleton]))
  },[props.total])
  
  useEffect(() => {
    fillSkeleton()
    const fetchData = async () => {
      const response = await fetch('/api/result');
      const data = await response.json();
      setResult((prevState)=>{
        const oldArray = prevState.filter(x=>x!=="skeleton"); 
        return ([...oldArray,...data.result.slice(0,props.total)])
      })
    }
    fetchData();
  }, [loadmore,fillSkeleton,props.total])
  
  return (
    <div className={classes.searchresult}>
      <BackToHomeMobile />
      <div className={classes.title}>Results</div>
      <div className={classes.resultwrapper}>
        {result.map((data)=>{
          if(data==="skeleton") {
            return (
              <SkeletonTheme baseColor="#202020" highlightColor="#444" key={+new Date() + Math.random().toString(36).substr(2, 9)}>
                <div className={classes.child}>
                  <Skeleton className={classes.imageresult} height="200px" />
                  <Skeleton className={classes.titleresult} width="170px" height="20px" />
                  <Skeleton className={classes.username} width="170px" height="20px" />
                </div>
              </SkeletonTheme>
            )
          } else {
            return(
              <div className={classes.child} key={+new Date() + Math.random().toString(36).substr(2, 9)}>
                <img className={classes.imageresult} src={image[data.image]} alt="" />
                <div className={classes.titleresult}>{data.title}</div>
                <div className={classes.username}>by {data.username} </div>
              </div>
            )
          }
        })}
      </div>
      <div className={classes.more}>
        <NormalButton text="MORE" onClick={onClickHandler}/>
      </div>
    </div>
  );
}

export default SearchResult;
