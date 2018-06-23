import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import SelectBar from '../dist/js/container/SelectBar';

describe('select bar', () => {
  beforeEach(() => {
    spyOn(SelectBar.prototype, 'toggleDropDown');
  });
  it('點擊select bar 可正常開啟選項', () => {
    const wrapper = shallow(<SelectBar />);
    const hasOuterUl = wrapper.find('.faux-select');

    // open select lists
    hasOuterUl.simulate('click');
    expect(SelectBar.prototype.toggleDropDown).toHaveBeenCalledTimes(1);
  });
});
