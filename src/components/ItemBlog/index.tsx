import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface Props {
  // id?: any;
  image?: any;
  title?: any;
  createdAt?: any;
  content?: any;
}
const ItemBlog = ({ image, title, createdAt, content} :Props) => {
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title }</Card.Title>
      <Card.Text>{content} </Card.Text>
    </Card.Body>
  </Card>
    )
}

export default ItemBlog;