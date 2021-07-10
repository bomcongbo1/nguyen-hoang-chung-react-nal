import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import ItemBlog from '../../components/ItemBlog';
import { IReducer } from '../../interface';
import { actionShowBlogItem } from '../../redux-saga/actions/blogAction';
interface Props {
  blogReducer: any;
  dispatchAction: Function;
}

const Details = ({dispatchAction, blogReducer}: Props) => {
  let  { id } : any = useParams();
  console.log(`id useParams:  `, id);
  useEffect(() => { // didmount
    dispatchAction(actionShowBlogItem(id));  
  },[]);
  
  let location = useLocation();
  useEffect(() => {
    console.log(`useLocation location:  `, location);
  }, [location]);
  
  const details = blogReducer.blogItem;
  return (
    <div className="App">
    <p>
      Edit <code>{details ? (<><ItemBlog  {...details} /></>) : 'Page details'}</code> and save to reload.
    </p>

    
    </div> 
  );
};

const mapStateToProps = (state: IReducer) => {
  return {
    blogReducer: state.blogReducer,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchAction: (object: any) => dispatch(object),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);