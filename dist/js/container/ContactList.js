import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import MessageBox from '../container/MessageBox';

class ContactList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.actions = props.actions;
    this.myRef = React.createRef();
    this.state = {
      personId:'',
    }
    this.openMessageBox = this.openMessageBox.bind(this);
    this.closeMessageBox = this.closeMessageBox.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  openMessageBox(id) {
    this.setState({ 
      personId: id 
    });
    this.dialog.show();
  }

  closeMessageBox() {
    this.setState({ 
      personId: ''
    });
    this.dialog.close();
  }

  deletePerson() {
    this.actions.deletePerson(this.state.personId);
    this.dialog.close();
  }

  appendLists() {
    const { contactLists } = this.props;
    if(contactLists.length === 0) { return }
    return contactLists.map((person, idx)=> {
      const hyphensNumber = person.phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1-$2-$3");
      return (
        <div className="contact-lists" key={`${person}${idx}`}>
          <span>{person.name}</span>
          <span>{hyphensNumber}</span>
          <span>{person.country}</span>
          <button className="delete-btn" onClick={() => this.openMessageBox(person.id)}>刪除</button>
        </div>
      );
    });
  }
  
  render() {
    const { contactLists } = this.props;
    return (
      <div>
        {this.appendLists()}
        <MessageBox
          ref={(c) => { this.dialog = c; }}
          personId ={this.state.personId}
          message="你確定要刪除此聯絡人嗎"
          >
          <button className="cancel-btn" onClick={this.closeMessageBox}>Cancel</button>
          <button className="delete-btn" onClick={this.deletePerson}>Delete</button>
        </MessageBox>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);