import { render, screen } from '@testing-library/react';
import Wrapper from '../ui/components/Wrapper';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';

test('Wrapper renders children', () => {
  const themeStyles = { wrapper: '' };
  render(
    <Wrapper themeStyles={themeStyles}>
      <div>Wrapped Content</div>
    </Wrapper>
  );
  expect(screen.getByText('Wrapped Content')).toBeInTheDocument();
});
