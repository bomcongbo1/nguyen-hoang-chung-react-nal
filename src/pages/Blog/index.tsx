import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemBlog from '../../components/ItemBlog';
import Pagging from '../../components/Pagging';
import SearchBar from '../../components/SearchBar';
import { IReducer } from '../../interface';
import { actionShowBlogItem } from '../../redux-saga/actions/blogAction';
const item = {id:"1",createdAt:"2020-09-09T01:25:32.504Z",title:"Books Shores AGP",image:"http://lorempixel.com/640/480/people",content:"Use the primary SSL transmitter, then you can synthesize the 1080p port!"}
interface Props {
    blogReducer: any;
    dispatchAction: Function;
  }
const Blog = ( props: Props) => {   
    const handleGetById = (id :any) => {
        props.dispatchAction(actionShowBlogItem(id))
    }

    return(
        <div className="App">
        <SearchBar />  
          <p>
              Edit <code>src/Blog.tsx</code> and save to reload.
            </p>
        <ItemBlog {...item} />
        <ItemBlog  {...item} />
        <Link to="/detail/1" onClick={() => handleGetById(1)}>
            <ItemBlog {...item} />
        </Link>
        <Pagging  {...props}/>

        </div>    
    ) 
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);