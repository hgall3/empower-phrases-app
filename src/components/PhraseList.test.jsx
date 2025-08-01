import { render, screen } from '@testing-library/react';
import PhraseList from './phraseList/PhraseList';


describe('PhraseList component', () => {
  it('renders phrases from props', () => {
    const mockPhrases = [
      { id: 1, text: 'Grow through what you go through.', author: 'Unknown' },
    ];

    render(<PhraseList phrases={mockPhrases} />);
    expect(screen.getByText(/grow through what you go through/i)).toBeInTheDocument();
    expect(screen.getByText(/unknown/i)).toBeInTheDocument();
  });

  it('shows a message if no phrases exist', () => {
    render(<PhraseList phrases={[]} />);
    expect(screen.getByText(/no phrases yet/i)).toBeInTheDocument();
  });
});