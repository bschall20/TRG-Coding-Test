import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('allows users to interact with news articles', () => {
    const mockHandleReadMore = jest.fn();
    render(<Home onReadMore={mockHandleReadMore} />);
    
    // Find first news card
    const firstReadMoreButton = screen.getAllByText('READ MORE')[0];
    
    // Interact
    fireEvent.click(firstReadMoreButton);
    
    // Assert
    expect(mockHandleReadMore).toHaveBeenCalled();
  });
});