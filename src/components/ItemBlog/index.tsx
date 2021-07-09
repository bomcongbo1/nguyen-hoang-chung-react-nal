import React from 'react';
import { Media, Container } from 'react-bootstrap';

interface Props {
  // id?: any;
  image?: any;
  title?: any;
  createdAt?: any;
  content?: any;
}
const ItemBlog = ({ image, title, createdAt, content} :Props) => {
    return (
      // <ul className="list-unstyled">
        <Media as="li" style={{ backgroundColor: 'pink'}}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={image}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>{title }</h5>
            <p>
              {content}
            </p>
          </Media.Body>
        </Media>
      // </ul>
  //   <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src={image} />
  //   <Card.Body>
  //     <Card.Title>{title }</Card.Title>
  //     <Card.Text>{content} </Card.Text>
  //   </Card.Body>
  // </Card>
    )
}

export default ItemBlog;