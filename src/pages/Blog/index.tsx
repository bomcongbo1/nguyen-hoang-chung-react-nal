import React, { useEffect, useState } from 'react';
import { Breadcrumb, Container, Jumbotron, Button, Media } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ItemBlog from '../../components/ItemBlog';
import Pagging from '../../components/Pagging';
import Header from '../../components/Header';
import { IReducer } from '../../interface';
import { actionGetListBlogs, actionShowBlogItem } from '../../redux-saga/actions/blogAction';
interface Props {
    blogReducer: any;
    dispatchAction: Function;
  }
const Blog = ( props: Props) => {   
    useEffect(() => { // didmount
      if (props.blogReducer.blogList.length == 0) {
        props.dispatchAction(actionGetListBlogs());  
      }
    },[]);
    
    const history = useHistory();
    const handleRoute = (id : number) => {
      history.push(`/detail/${id}`);
    } 
    let pageBlog = props.blogReducer.pageBlog;
    const [page, setPage] = useState(pageBlog);
    
    let location = useLocation();
    useEffect(() => { // didUpdate
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