import React from 'react';
import { create } from 'react-test-renderer';
import { CategoriesView } from '.';

describe(`CategoriesView`, () => {
  test('should render component', () => {
    const component = create(<CategoriesView />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
