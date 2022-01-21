import React from 'react';
import { create } from 'react-test-renderer';
import { PrivateRoute } from '.';

describe(`PrivateRoute`, () => {
  test('should render component', () => {
    const component = create(<PrivateRoute />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
