import React from 'react';
import Item from './Item';

/*
This presentational component can just be a Stateless Functional Component.
*/
const ItemsList = props => {
    return (
      <div>
        <p className="items">Items</p>
        <ol className="item">{props.items.map((item, index) => <Item key={index} item={item} />)}</ol>
     </div>
      
      );
}

export default ItemsList;