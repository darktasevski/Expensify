import React from 'react';
import { LoginPage } from '../../components/LoginPage';

/* eslint-disable no-undef */
it('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage onClick={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should call startLogin on button click', () => {
  const startLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);
  wrapper.find('button').simulate('click');
  expect(startLoginSpy).toHaveBeenCalled();
});
