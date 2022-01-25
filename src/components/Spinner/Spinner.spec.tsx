import React from 'react';
import { create } from 'react-test-renderer';
import { Spinner } from '.';

describe(`Spinner`, () => {
  test('should create component', () => {
    const component = create(<Spinner loading={true} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
