import React, { PropTypes } from 'react';

const DropDownItem = (props) => {
  const { text, id, isSelected, click } = props;

  return <li
    className={"select menu-item" + isSelected ? ' selected' : ''}
    value={id}
    onClick={ (e) => { click(id, e)} }
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
