
import { render, screen } from '@testing-library/react';
import Greet from "./greet";
  
/*
Greet should render the text Hello and id a name is passed in to the component, it should render Hello followed by the name
*/  

describe('Greet',  () => {
    test('Greet renders correctly', () => {
        render(<Greet />);
       const textElement= screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
      });
    
      test('Greet renders with a name', () => {
        render(<Greet name='Vishwas' />);
       const textElement= screen.getByText(/hello Vishwas/i);
        expect(textElement).toBeInTheDocument();
      });
})
