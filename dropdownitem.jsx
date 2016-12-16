import React, { PropTypes } from 'react';

const DropDownItem = (props) => {
  const { text, id, isSelected, click } = props;
  return <li
    className={isSelected ? 'menu-item selected' : 'menu-item'}
    value={id}
    onClick={click}
    >
    { text }
  </li>
};

DropDownItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default DropDownItem;
