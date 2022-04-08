import React from 'react';
import Child from './Child';

const Parent = (props) => {
  if(props.id) {
    return (
      <h1>id is there</h1>
    );
  }
  else {
    return null;
  }
}

export default Parent;