import React from 'react';
import { create } from 'react-test-renderer';
import { Login } from '.';

describe(`Login`, () => {
  test('should render component', () => {
    const component = create(<Login />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
