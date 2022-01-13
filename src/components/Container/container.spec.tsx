import React from 'react';
import { create } from 'react-test-renderer';
import { Container } from '.';

import 'jest-styled-components';

describe(`Container`, () => {
  test('should have correct styles', () => {
    const component = create(<Container />).toJSON();
    expect(component).toMatchSnapshot();
    expect(component).toHaveStyleRule('display', 'flex');
    expect(component).toHaveStyleRule('justify-content', 'space-evenly');
    expect(component).toHaveStyleRule('align-items', 'center');
    expect(component).toHaveStyleRule('color', 'white');
    expect(component).toHaveStyleRule('background-color', '#131a22');
  });
});
