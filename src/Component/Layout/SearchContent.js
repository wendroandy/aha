import classes from  './SearchContent.module.css';
import SearchBar from '../../Component/UI/SearchBar'
import SliderBar from '../../Component/UI/SliderBar'
import NormalButton from '../../Component/UI/NormalButton'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchContent =(props)=> {
  const navigate = useNavigate();
  const [sliderValue,setSliderValue]=useState(15);
  const [keywordValue,setKeywordValue]=useState();
  const onChangeHandler=(val)=>{
    if(val===18){
      setSliderValue(50)
    } else {
      setSliderValue(val)
    }
  }
  const onKeywordChangeHandler=(e)=>{
    setKeywordValue(e.target.value);
  }
  const onClickHandler=()=> {
    navigate('/search-result/'+keywordValue+'/'+sliderValue);
  }
  return (
    <div className={classes.searchcontent}>
      <div className={classes.title}>Search</div>
      <SearchBar text="keyword" onKeywordChangeHandler={onKeywordChangeHandler}/>
      <div className={classes.line}></div>
      <div className={`${classes.title} ${classes.second}`}># Of Results Per Page</div>
      <div className={classes.result}>
        <strong>{sliderValue}</strong><span>results</span>
      </div>
      <SliderBar onChangeHandler={onChangeHandler}/>
      <div className={`${classes.line} ${classes.second}`}></div>
      <div className={classes.search}>
        <NormalButton text="SEARCH" onClick={onClickHandler} />
      </div>
    </div>
  );
}

export default SearchContent;
