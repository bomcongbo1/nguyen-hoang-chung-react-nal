import React from 'react';
import { Container, Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionNewPagging } from '../../redux-saga/actions/blogAction';

interface Props {
  dispatchAction: Function;
  totalPages: number;
  totalElements: number;
  page: number;
}


const Pagging = ({totalElements, totalPages, page, dispatchAction} : Props) => {
  // console.log('--------totalPages--------', totalPages)
  // console.log('--------totalElements--------', totalElements)
  // console.log('--------page--------', page)
  let arr = [];
  if (totalPages > 0) {
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }
  }  
  const handleClick = (newPage : any) => {
    dispatchAction(actionNewPagging(newPage));
  } 
  const handlePrev = () => {
    let prev = page-1;
    if(prev != 0) dispatchAction(actionNewPagging(prev));
  }
  const handleNext = () => {
    let next = page+1;
    if(next <= totalPages) dispatchAction(actionNewPagging(next));
  }

    return (
        <Container style={{}} >
          <Pagination className="float-right" >           
            <Pagination.Prev onClick={() => handlePrev()}/>
            {arr.map( (e, i) => {
              return(
                <Pagination.Item key={i} active={e == page ? true : false} onClick={() => handleClick(e)}>{e}</Pagination.Item>
              )
            })}
            {/* <Pagination.Ellipsis /> */}
            <Pagination.Next onClick={() => handleNext()}/>
          </Pagination>

        </Container>
    )
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchAction: (object: any) => dispatch(object),
  };
};
export default connect(null, mapDispatchToProps)(Pagging);