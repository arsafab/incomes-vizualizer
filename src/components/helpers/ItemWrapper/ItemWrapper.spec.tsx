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
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '100px',
      margin: '10rem',
      justifyContent: 'space-between',
      width: '100px',
    };

    const instance = create(<ItemWrapper {...props} />).root;
    const element = instance.findByType('div');

    expect(element.props.className).toEqual('test');
    expect(instance.props.display).toEqual('flex');
    expect(instance.props.flexDirection).toEqual('row');
    expect(instance.props.alignItems).toEqual('center');
    expect(instance.props.maxWidth).toEqual('100px');
    expect(instance.props.margin).toEqual('10rem');
    expect(instance.props.justifyContent).toEqual('space-between');
    expect(instance.props.width).toEqual('100px');
  });

  // TODO: add tests fro default parameters
});
