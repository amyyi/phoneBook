import React, { Component } from 'react';

import Header from '../container/Header';
import AddContact from '../container/AddContact';
import ContactList from '../container/ContactList';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <AddContact />
          <div className="line"></div>
          <ContactList />
        </div>
      </div>
    );
  }
}
