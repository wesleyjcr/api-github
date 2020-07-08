import React from 'react';
import PropTypes from 'prop-types';

export default function TechItem({tech, onDelete}){
  return(
      <li key={ tech }>
        { tech }
        <button type="button" onClick={onDelete}>Remover</button>
      </li>
  );
}

TechItem.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}