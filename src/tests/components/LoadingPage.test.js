import React from 'react';
import LoadingPage from '../../components/LoadingPage';

/* eslint-disable no-undef */
it('should render LoadingPage without crashing', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
