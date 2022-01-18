import React from 'react';
import { create } from 'react-test-renderer';
import { Wrapper } from '.';

import 'jest-styled-components';

describe(`Wrapper`, () => {
  test('should render component', () => {
    const component = create(<Wrapper />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
