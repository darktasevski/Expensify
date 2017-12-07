import React from 'react';
import NotFound from '../../components/NotFoundPage';

/* eslint-disable no-undef */

it('should render NotFound page correctly', () => {
  const wrapper = shallow(<NotFound />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
