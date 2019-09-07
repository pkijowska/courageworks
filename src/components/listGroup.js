import React from 'react';



const ListGroup = (props) => {
  const {items, onItemSelect, selectedItem } = props;
return (

<ul className="list-group">

{items.map(item => (

  <li onClick={() => onItemSelect(item)} className={item === selectedItem ? "list-group-item active" : "list-group-item"}>
    {item.name}
  </li>
  ))}
</ul>

);
};

export default ListGroup;
