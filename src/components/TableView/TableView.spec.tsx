import React from 'react';
import { create } from 'react-test-renderer';
import { TableView } from '.';

describe(`CategoriesView`, () => {
  test('should render component', () => {
    const component = create(<TableView />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
