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
    window.addEventListener("click", (e) => {
      if(e.target.classList.contains('select')){
        return;
      }
      this.close();
    }, false);
  }
  componentWillUnmount(){
    window.removeEventListener("click", (e) => {
      this.close();
    }, false);
  }
  close(){
    if(this.state.isToggled) {
      this.setState({
        isToggled: false
      })
    }
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
    return <div className='wrapper'>
      <div className="select header" onClick={this.toggle}>
        <span className='select item'>
          {selectedCountry === '' ? this.props.title : selectedCountry}</span>
        <span className='select item'></span>
      </div>
      {
        !this.state.isToggled ?
          null :
          <ul className="select menu">
            { countryList }
          </ul>
      }
    </div>
  }
}

export default DropDown;