import React from 'react';
import { create } from 'react-test-renderer';
// import { StyledHeader } from './header';

import 'jest-styled-components';

describe(`Header`, () => {
  test('should have width <= 1400px and > 600px', () => {
    // const component = create(<StyledHeader />).toJSON();
    // expect(component).toMatchSnapshot();
    // expect(component).toHaveStyleRule('max-width', '1400px');
    // expect(component).toHaveStyleRule('min-width', '600px');
    // expect(component).toHaveStyleRule('width', '100%');
  });

  test('should have logo', () => {
    // const component = create(<Header />).toJSON();
    // expect(component.children(<input />)).toBeTruthy();
  });
});
