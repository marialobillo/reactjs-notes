import React from 'react';
import './ItemPage.css';

function ItemPage({item}){
  return (
    <ul className="ItemPage-items">
      {items.map(item =>
        <li key={item.id} className="Itempage-item">
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
