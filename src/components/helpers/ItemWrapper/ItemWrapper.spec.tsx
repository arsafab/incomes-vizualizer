import React from 'react';
import { create } from 'react-test-renderer';
import { ItemWrapper } from '.';

import 'jest-styled-components';

describe(`ItemWrapper`, () => {
  test('should create component', () => {
    const component = create(<ItemWrapper />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should have correct props', () => {
    const props = {
      className: 'test',
      display: 'test',
      flexDirection: 'test',
      alignItems: 'test',
      maxWidth: 'test',
      margin: 'test',
    };

    const instance = create(<ItemWrapper {...props} />).root;
    const element = instance.findByType('div');

    expect(element.props.className).toEqual('test');
    // expect(element.props.display).toEqual('test');
    // expect(element.props.flexDirection).toEqual('test');
    // expect(element.props.alignItems).toEqual('test');
    // expect(element.props.maxWidth).toEqual('test');
    // expect(element.props.margin).toEqual('test');
  });
});
