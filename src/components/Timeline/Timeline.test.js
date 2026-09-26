import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timeline from './Timeline';

describe('Timeline', () => {
  test('renders timeline section heading', () => {
    render(<Timeline />);
    expect(screen.getByRole('heading', { name: /career timeline/i })).toBeInTheDocument();
  });

  test('renders all education, experience, and project entries', () => {
    render(<Timeline />);
    // Entries should match the number of combined data items.
    // From timelineData we have 2 edu, 3 exp, 3 proj = 8 entries.
    const items = screen.getAllByRole('button');
    expect(items.length).toBe(8);
  });

  test('displays correct entry details', () => {
    render(<Timeline />);
    expect(screen.getByText(/Higher Diploma in Software Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/IVE - Hong Kong Institute of Vocational Education/i)).toBeInTheDocument();
    expect(screen.getByText(/DIY ROCKS/i)).toBeInTheDocument();
    expect(screen.getByText(/ARM MOOC Platform/i)).toBeInTheDocument();
  });

  test('entries become active when clicked', () => {
    render(<Timeline />);
    const entries = screen.getAllByRole('button');
    const firstEntry = entries[0];

    // Initially no active class
    expect(firstEntry.className).not.toContain('active');

    // Click to activate
    fireEvent.click(firstEntry);
    expect(firstEntry.className).toContain('active');

    // Click again to deactivate (toggle)
    fireEvent.click(firstEntry);
    expect(firstEntry.className).not.toContain('active');
  });

  test('entries respond to keyboard interaction', () => {
    render(<Timeline />);
    const entries = screen.getAllByRole('button');
    const firstEntry = entries[0];

    // Simulate keyboard Enter key
    fireEvent.keyDown(firstEntry, { key: 'Enter' });
    expect(firstEntry.className).toContain('active');

    // Simulate keyboard Space to toggle off
    fireEvent.keyDown(firstEntry, { key: ' ' });
    expect(firstEntry.className).not.toContain('active');
  });
});
