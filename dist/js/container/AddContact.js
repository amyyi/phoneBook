import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SelectBar from './SelectBar';
import MessageBox from './MessageBox';

const initialState = {
  name:'',
  phone:'',
  country: '國家',
  nameState:'empty',
  phoneState:'empty',
  countryState:'empty',
  showDropDown: false,
}

class AddContact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.actions = props.actions;
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.countryInput = React.createRef();
    this.state = initialState;
    this.validateNumber = this.validateNumber.bind(this);
    this.ChengeStateToTyping = this.ChengeStateToTyping.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateNumber(e) {
    const reg = /[^0-9]/;
    e.target.value = e.target.value.split(reg).join('');
  }

  ChengeStateToTyping(e) {
    this.setState({
      [`${e.target.name}State`] : 'typing'
    });
  }

  handleChange(e) {

    // 變更 form 各欄位的 value 以及變更各欄位的輸入狀態與錯誤狀態
    const dataCountry = e.target.dataset.country;
    const countrySelector = dataCountry ? dataCountry : '';
    if(e.target.type === 'text') {
      const fillState = e.target.value ? 'fill' : 'empty';
      this.setState({
        [`${e.target.name}`] : e.target.value,
        [`${e.target.name}State`] : fillState
      });
    } else if(countrySelector) {
      const selectState = dataCountry !== 'null' ? 'fill' : 'empty';
      this.setState({
        country: e.target.innerText,
        countryState: selectState,
      });
    }
  }

  handleSubmit(e) {
    const { contactLists } = this.props;
    e.preventDefault();

    // 檢查欄位當中是否有狀態為 empty，若有就顯示該欄位錯誤
    if(this.state.nameState === 'empty') {
      alert('聯絡人的名字尚未填寫');
      this.nameInput.current.focus();
    } else if (this.state.phoneState === 'empty') {
      alert('聯絡人的電話尚未填寫');
      this.phoneInput.current.focus();
    } else if (this.state.countryState === 'empty') {
      alert('聯絡人的國家尚未選取');
      this.countryInput.current.focus();
    } else {
      const personInfo = {
        id: contactLists.length + 1,
        name: this.state.name,
        phone: this.state.phone,
        country: this.state.country
      }
      this.actions.addPerson(personInfo);

      // reset form
      this.setState(initialState);
      this.nameInput.current.value = '';
      this.phoneInput.current.value = '';
    }
  }

  render() {
    const showDropDown = this.state.showDropDown ? 'open' : '';
    return (
      <div className="add-contact">
        <h2 className="contact-title">新增聯絡人</h2>
        <form>
          <input className="input-text"
            name="name" placeholder="王大明" ref={this.nameInput}
            onBlur={this.handleChange} onFocus={this.ChengeStateToTyping}
          />
          <input className="input-text input-phone"
            name="phone" placeholder="0911123456" ref={this.phoneInput}
            onBlur={this.handleChange} onFocus={this.ChengeStateToTyping} onKeyUp={this.validateNumber}
          />
          <span tabIndex="0" ref={this.countryInput}>
            <SelectBar
              country={this.state.country}
              countryState={this.state.countryState}
              showDropDown={showDropDown}
              handleSelectChange={this.handleChange}
              ChengeStateToTyping={this.ChengeStateToTyping}
            />
          </span>
          <button className="submit-btn" type="submit" onClick={this.handleSubmit}>+</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contactLists: state.contactLists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
