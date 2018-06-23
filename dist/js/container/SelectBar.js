import React, { Component } from 'react';

const countryLists = [
  { countryEN: 'null',
    countryCH: '國家'
  },
  { countryEN: 'taiwan',
    countryCH: '台灣'
  },
  { countryEN: 'china',
    countryCH: '中國'
  },
  { countryEN: 'japan',
    countryCH: '日本'
  },
]

export default class SelectBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        showDropDown: this.props.showDropDown,
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.ChengeStateToTyping = this.ChengeStateToTyping.bind(this);
  }

  toggleDropDown() {
    this.setState({
      showDropDown: !this.state.showDropDown,
    });
  }

  handleChange(e) {
    this.props.handleSelectChange(e);
  }

  ChengeStateToTyping(e) {
    this.props.ChengeStateToTyping(e);
  }

  appendCountryList() {
    return countryLists.map((country) => {
      return(
        <li key={country.countryEN} data-country={country.countryEN}>{country.countryCH}</li>
      );
    });
  }
  render() {
    const { country } = this.props;
    const showCountryLists = this.state.showDropDown ? 'open' : '';
    return (
      <ul className="faux-select"
            onClick={this.toggleDropDown} onFocus={this.ChengeStateToTyping}>
        <li className="selected-option">
          <span>{country}</span>
          <ul className={`options ${showCountryLists}`} onClick={this.handleChange}>
            {this.appendCountryList()}
          </ul>
        </li>
      </ul>
    );
  }
}
