import React from 'react';
import {Media} from "reactstrap";

const MessageBlock = props => {
  return (
    <div>
      <Media className='mb-2'>
        <img
          className='mr-2'
          style={{width: '100px', height: '100px'}}
          src={'http://localhost:8080/uploads/' + props.image} alt=""
        />
        <Media body>
          <Media heading>
            {props.author}
          </Media>
          {props.message}
        </Media>
      </Media>
    </div>
  );
};

export default MessageBlock;