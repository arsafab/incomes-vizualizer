import React from 'react';
import { create } from 'react-test-renderer';
import { Container } from '.';

import 'jest-styled-components';

describe(`Container`, () => {
  test('should have correct styles', () => {
    const component = create(<Container />).toJSON();
    expect(component).toMatchSnapshot();
    expect(component).toHaveStyleRule('padding', '10px 15px');
  });
});
