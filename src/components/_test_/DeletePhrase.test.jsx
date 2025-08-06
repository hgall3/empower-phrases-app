import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import DeletePhrase from '../deletePhrase/DeletePhrase';

describe('DeletePhrase component', () => {
  const mockOnDelete = vi.fn(); // <-- aqui
  const phraseId = 123;

  beforeEach(() => {
    mockOnDelete.mockReset();
  });

  it('renders the delete button', () => {
    render(<DeletePhrase id={phraseId} onDelete={mockOnDelete} />);
    const button = screen.getByRole('button', { name: /eliminar frase/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onDelete if user confirms', () => {
    window.confirm = vi.fn(() => true); // <-- aqui

    render(<DeletePhrase id={phraseId} onDelete={mockOnDelete} />);
    fireEvent.click(screen.getByRole('button'));

    expect(window.confirm).toHaveBeenCalledWith('¿Eliminar esta frase?');
    expect(mockOnDelete).toHaveBeenCalledWith(phraseId);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  it('does not call onDelete if user cancels', () => {
    window.confirm = vi.fn(() => false); // <-- aqui

    render(<DeletePhrase id={phraseId} onDelete={mockOnDelete} />);
    fireEvent.click(screen.getByRole('button'));

    expect(window.confirm).toHaveBeenCalledWith('¿Eliminar esta frase?');
    expect(mockOnDelete).not.toHaveBeenCalled();
  });
});

