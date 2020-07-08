import React from 'react';

export default function TechItem({tech, onDelete}){
  return(
      <li key={ tech }>
        { tech }
        <button type="button" onClick={onDelete}>Remover</button>
      </li>
  );
}