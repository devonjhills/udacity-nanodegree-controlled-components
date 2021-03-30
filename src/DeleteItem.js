import React from 'react'

/*
This presentational component can just be a Stateless Functional Component.
*/
const DeleteItem = props => {
  
  const handleDeleteLastItem = event => {
    props.handleDeleteLastItem();
  };
  

    return (
      <button onClick={handleDeleteLastItem} disabled={props.buttonDisabled}>
          Delete Last Item
        </button>
      );
}

export default DeleteItem;