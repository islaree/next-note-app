import { render, screen } from '@testing-library/react';
import NoteList from './NoteList';

describe('NoteList', () => {
  const mockData = [
    { id: 1, content: 'first content', important: false },
    { id: 2, content: 'second content', important: false },
  ];

  const mockOnDelete = jest.fn();
  const mockOnEdit = jest.fn();

  it('データが空の時のレンダリング', () => {
    render(<NoteList data={[]} onDelete={mockOnDelete} onEdit={mockOnEdit} />);

    const noData = screen.getByText('No data ...');

    expect(noData).toBeInTheDocument();
  });

  it('renders a NoteItem components', () => {
    render(<NoteList data={mockData} onDelete={mockOnDelete} onEdit={mockOnEdit} />);

    const firstNote = screen.getByText('first content');
    const secondNote = screen.getByText('second content');

    expect(firstNote).toBeInTheDocument();
    expect(secondNote).toBeInTheDocument();
  });
});
