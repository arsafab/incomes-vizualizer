import React from 'react';
import { create } from 'react-test-renderer';
import { PageText } from '.';

import 'jest-styled-components';

describe(`PageText`, () => {
  test('should create component', () => {
    const component = create(<PageText />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should have correct props', () => {
    const props = {
      className: 'test',
      fontSize: '15px',
      color: 'red',
    };

    const instance = create(<PageText {...props} />).root;
    const element = instance.findByType('span');

    expect(element.props.className).toEqual('test');
  });
});
