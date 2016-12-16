import React, { Component } from 'react';

import DropDownItem from './dropdownitem.jsx'

class DropDown extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggled: false
    };
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }
  componentDidMount(){
    window.addEventListener("click", this.close, false);
  }
  componentWillUnmount(){
    window.removeEventListener("click", this.close, false);
  }
  close(e){
    if(this.refs.wrapper.contains(e.target) && this.state.isToggled){
      return; 
    };
    this.setState({
      isToggled: false
    });
  }
  toggle(){
    this.setState({
      isToggled: !this.state.isToggled
    })
  }
  onSelectedValueChanged(id){
    this.props.selectCountry(id);
    this.toggle()
  }
  render() {
    let selectedCountry = '';
    const { countries, selectedCountryId } = this.props;
    const countryList = countries.map((country, key) => {
      selectedCountryId === country.id
        ? selectedCountry = country.name
        : null;
      return <DropDownItem
        text={country.name}
        value={country.id}
        isSelected={ selectedCountryId === country.id}
        click={this.onSelectedValueChanged.bind(this, country.id)}
        key={key}
      />
    })
    return <div className='wrapper' ref='wrapper'>
      <div className="header" onClick={this.toggle}>
        <span className='item'>
          {selectedCountry === '' ? this.props.title : selectedCountry}</span>
        <span className='item'></span>
      </div>
      {
        !this.state.isToggled ?
          null :
          <ul className="menu">
            { countryList }
          </ul>
      }
    </div>
  }
}

export default DropDown;