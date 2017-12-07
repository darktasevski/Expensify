import React from 'react';
import { Header } from '../../components/Header';
/* eslint-disable no-undef */
it('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
  // expect(wrapper.find('h2').length).toBe(1);
  // expect(wrapper.find('h2').text()).toBe('Expensify');
});

it('should call startLogout on button click', () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
  wrapper.find('button').simulate('click');
  expect(startLogoutSpy).toHaveBeenCalled();
});
