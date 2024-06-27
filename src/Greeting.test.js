import React from 'react';
import { render } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting with name', () => {
  const { getByText } = render(<Greeting name="World" />);
  expect(getByText('Hello, World!')).toBeInTheDocument();
});
