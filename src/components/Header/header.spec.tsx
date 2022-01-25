import React from 'react';
import { create } from 'react-test-renderer';
import { Header } from '.';

describe(`Header`, () => {
  test('should render component', () => {
    const component = create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
