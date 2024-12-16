import React from 'react';

function ExpandingList({ items }) {
  return (
    <ul className="list-outside" style={{ listStyleType: 'disc' }}>
      {items.map((item, index) => (
        <li key={index} className="list-item">
            <span className="expandable-item">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default ExpandingList;
