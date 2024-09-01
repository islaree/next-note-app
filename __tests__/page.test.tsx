import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Page', () => {
  it('renders a app title', () => {
    render(<Page />);

    const title = screen.getByText('Your Note');

    expect(title).toBeInTheDocument();
  });
});
