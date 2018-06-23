import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import MessageBox from '../dist/js/container/MessageBox';


describe('MessageBox', () => {
  let wrapper = null;
  let props = {};
  const message = 'Are you sure to delete?';
  beforeEach(() => {
    props = {
      message,
    };
    wrapper = shallow(<MessageBox {...props}/>);
  });
  
  it('正常開啟 MessageBox', () => {
    wrapper.setState({
      showBox: true,
    });
    expect(wrapper.find('.message-box').hasClass('open')).toBe(true);
  });

  it('正常關閉 MessageBox', () => {
    // const wrapper = shallow(<MessageBox />);
    wrapper.setState({
      showBox: false,
    });
    expect(wrapper.find('.message-box').hasClass('open')).toBe(false);
  });

  it('顯示 MessageBox 說明文字', () => {
    // const wrapper = shallow(<MessageBox />);
    const text = wrapper.find('p');
    expect(text.text()).toBe('Are you sure to delete?');
  });
});
