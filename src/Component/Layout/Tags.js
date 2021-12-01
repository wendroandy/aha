import classes from  './Tags.module.css';
import React, { useState,useEffect,useCallback } from 'react';
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../../Component/Utility/Utility'
import BackToHomeMobile from './BackToHomeMobile';

const Tags =(props)=> {
  const [result,setResult]=useState([])
  const [loadmore,setLoadmore]=useState(props.total)

  const fillSkeleton=useCallback(()=>{
    let skeleton=new Array(parseInt(props.total)).fill('skeleton')
    setResult((prevState)=>([...prevState,...skeleton]))
  },[props.total])

  useEffect(() => {
    fillSkeleton()
    const fetchData = async () => {
      const response = await fetch('/api/tags');
      const data = await response.json();
      setResult((prevState)=>{
        const oldArray = prevState.filter(x=>x!=="skeleton"); 
        return ([...oldArray,...data.result.slice(0,props.total)])
      })
    }
    const endOfPage=()=> {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setLoadmore((prevState)=>(parseInt(prevState)+parseInt(props.total)))
      }
    }
    fetchData();

    //detect bottom of the page
    window.addEventListener('scroll', endOfPage);
    return () => {
      //cleanup
      window.removeEventListener('scroll', endOfPage);
    }
  }, [loadmore,fillSkeleton,props.total])

  return (
    <div className={classes.tagwrapper}>
      <div className={classes.tagcontent}>
        <BackToHomeMobile />
        <div className={classes.title}>Tags</div>
        <div className={classes.resultwrapper}>
          {result.map((data)=>{
            if(data==="skeleton") {
              return (
                <SkeletonTheme baseColor="#202020" highlightColor="#444" key={+new Date() + Math.random().toString(36).substr(2, 9)}>
                  <div className={classes.child}>
                    <Skeleton className={classes.tagholder}/>
                    <Skeleton className={classes.titleresult}  height="20px"/>
                    <Skeleton className={classes.number}  height="20px"/>
                  </div>
                </SkeletonTheme>
              )
            } else {
              return(
                <div className={classes.child} key={+new Date() + Math.random().toString(36).substr(2, 9)}>
                  <div className={classes.tagholder}>
                    <div className={classes.tag}>{data.tags}</div>
                  </div>
                  <div className={classes.titleresult}>{data.tags}</div>
                  <div className={classes.number}>{data.result} Results </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Tags;
