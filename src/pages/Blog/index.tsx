import React, { useEffect, useState } from 'react';
import { Breadcrumb, Container, Jumbotron, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemBlog from '../../components/ItemBlog';
import Pagging from '../../components/Pagging';
import SearchBar from '../../components/SearchBar';
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
    const handleGetById = (id :any) => {
        props.dispatchAction(actionShowBlogItem(id))
    }
    let blogList = props.blogReducer.blogList;
    const [pageBlog, setPageBlog] = useState(props.blogReducer.pageBlog);
    console.log('-------pageBlog-------',pageBlog)
    console.log('-------blogList-------',blogList)
    console.log('-------blogReducer-------',props.blogReducer)


    
  //   useEffect(() => { // didUpdate
  //     if(blogList.lenght > 0) {
  //       setPageBlog(blogList);
  //     }
  // },[pageBlog]);

    return(      
      
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">
            Welcome To React-Bootstrap TypeScript Example
          </h1>
        </Jumbotron>
      <h2>SearchBar</h2>
      <SearchBar />
        {pageBlog.map((item: any, index: number) => {
          return (          
            <Link style={{ margin: 10,}} to={`/detail/${index+1}`}>
              <ItemBlog {...item} />
            </Link>
          )
        }) }
        {/* <ItemBlog {...item} />
        <ItemBlog  {...item} />
        <Link to="/detail/5" onClick={() => handleGetById(5)}>
          <ItemBlog {...item} />
        </Link> */}
      <h2>Pagging</h2>
      <Pagging totalElements={props.blogReducer.totalElements} totalPages={props.blogReducer.totalPages}/>
      </Container>  
    ) 
}

const mapStateToProps = (state: IReducer) => {
  console.log('000====', state.blogReducer)
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