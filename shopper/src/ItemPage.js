import React from 'react';
import Item from './Item';
import './ItemPage.css';

function ItemPage({items}){
  return (
    <ul className="ItemPage-items">
      {items.map(item =>
        <li key={item.id} className="ItemPage-item">
          {item.name}
        </li>
      )}
    </ul>
  );
}

ItemPage.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default ItemPage;
