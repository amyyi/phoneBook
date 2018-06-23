import React, { Component } from 'react';

export default class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: false,
    }
    this.close = this.close.bind(this);

  }

  close() {
    this.setState({
      showBox: false
    });
  }

  show() {
    this.setState({
      showBox: true
    });
  }
  
  render() {
    const { children, message } = this.props;
    const hasMessageBox = this.state.showBox ? 'open' : '';
    return (
      <div className={`message-box ${hasMessageBox}`}>
        <div className="message-content">
          <div className="message-block">
            <div className="message-header">
              <button className="close-btn" onClick={this.close}>x</button>
            </div>
            <p>{message}</p>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
