import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemBlog from '../../components/ItemBlog';
import { IReducer } from '../../interface';
import { actionShowBlogItem } from '../../redux-saga/actions/blogAction';
interface Props {
  blogReducer: any;
  dispatchAction: Function;
}

const Details = ({dispatchAction, blogReducer}: Props) => {
  let  { id } : any = useParams();
  const [details, setDetails] = useState({});

  // useEffect(() => {
  //   console.log(`id useParams:  `, id);
  //   return dispatchAction(actionShowBlogItem(id));
  // }, []);
    console.log(`blogItem:  `, blogReducer.blogItem);

  useEffect(() => {
    // console.log(`blogItem:  `, blogReducer.blogItem);
    if (blogReducer.blogItem['id'] != undefined) {
      return setDetails(blogReducer.blogItem);
    }
  }, [])
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