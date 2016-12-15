import { PropTypes } from 'react';
import { connect } from 'react-redux';

import DropDown from './dropdown.jsx';
import { selectCountry } from './actions';

function mapStateToProps({ countries, selectedCountryId }){
  return {
    countries,
    selectedCountryId
  };
};

export default connect(mapStateToProps, { selectCountry })(DropDown);;