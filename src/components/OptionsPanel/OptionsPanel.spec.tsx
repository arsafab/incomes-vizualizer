import React from 'react';
import { create } from 'react-test-renderer';
import { OptionsPanel } from '.';

describe(`OptionsPanel`, () => {
  test('should render component', () => {
    const component = create(<OptionsPanel />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
