import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from '../ui/components/DarkModeToggle';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';

test('DarkModeToggle toggles dark mode class on body', () => {
  const themeStyles = { darkModeToggle: '', darkModeToggleBtn: '' };
  render(<DarkModeToggle themeStyles={themeStyles} />);
  const button = screen.getByRole('button');
  // Initially dark mode is true
  expect(document.body.className).toBe('dark');
  fireEvent.click(button);
  expect(document.body.className).toBe('');
  fireEvent.click(button);
  expect(document.body.className).toBe('dark');
});
