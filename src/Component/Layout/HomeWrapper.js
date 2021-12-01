import classes from  './HomeWrapper.module.css';
import Profile from '../../Component/Layout/Profile'
import SearchContent from '../../Component/Layout/SearchContent'
import SearchResult from '../../Component/Layout/SearchResult'
import React from 'react';
import { useParams } from "react-router-dom";

const HomeWrapper =(props)=> {
  let params = useParams();
  let content;
  if(params.keyword && params.total) {
    content = (
      <SearchResult keyword={params.keyword} total={params.total}/>
    )
  }
  else {
    content= (
      <SearchContent />
    )
  }
  return (
    <React.Fragment>
      <div className={classes.searchwrapper}>
        {content}
      </div>
      <div className={classes.profilewrapper}>
        <Profile />
      </div>
    </React.Fragment>
  );
}

export default HomeWrapper;
