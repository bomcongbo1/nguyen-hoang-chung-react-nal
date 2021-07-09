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
        <Media as="li" style={{paddingLeft: 20}}>
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
    )
}

export default ItemBlog;