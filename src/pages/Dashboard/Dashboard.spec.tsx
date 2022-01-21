import React from 'react';
import { create } from 'react-test-renderer';
import { Dashboard } from '.';

describe(`Login`, () => {
  test('should render component', () => {
    const component = create(<Dashboard />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
