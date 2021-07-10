import React, { useEffect, useState } from 'react';
import { Breadcrumb, Container, Jumbotron, Button, Media } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ItemBlog from '../../components/ItemBlog';
import Pagging from '../../components/Pagging';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import { IReducer } from '../../interface';
import { actionGetListBlogs, actionShowBlogItem } from '../../redux-saga/actions/blogAction';
// const item = {id:"1",createdAt:"2020-09-09T01:25:32.504Z",title:"Books Shores AGP",image:"http://lorempixel.com/640/480/people",content:"Use the primary SSL transmitter, then you can synthesize the 1080p port!"}
interface Props {
    blogReducer: any;
    dispatchAction: Function;
  }
const Blog = ( props: Props) => {   
    useEffect(() => { // didmount
        props.dispatchAction(actionGetListBlogs());  
    },[]);
    
    const history = useHistory();
    const handleRoute = (id : number) => {
      history.push(`/detail/${id}`);
    } 
    // let blogList = props.blogReducer.blogList;
    let pageBlog = props.blogReducer.pageBlog;
    const [page, setPage] = useState(pageBlog);
    
    let location = useLocation();
    useEffect(() => { // didUpdate
      // console.log('-------pageBlog-------',pageBlog)
      // console.log('-------blogList-------',blogList)
      // console.log('-------blogReducer-------',props.blogReducer)  
      setPage(pageBlog);
    },[pageBlog, location]);  

    return(
      <Container className="p-3">
        <Header/>
        {page.map((item: any, index: number) => {
          return (          
            <Media key={index} style={{ margin: 10, border: 1, borderColor: 'black'}} onClick={() => handleRoute(index+1)}>
              <ItemBlog {...item} />
            </Media>
          )
        }) }
      <Pagging {...props.blogReducer}/>
      </Container>  
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