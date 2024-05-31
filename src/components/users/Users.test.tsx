import { render, screen } from '@testing-library/react'
import { Users } from './Users'
import { http, HttpResponse } from 'msw';
import { server } from '../../test/mocks/server'

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })


  it("api error scenario on load", () => {
    render(<Users />);
    server.use(
      http.get("https://dummyjson.com/todos", () => {
        return new HttpResponse(null, { status: 401 });
      })
    );
    expect(screen.queryByText("Todo List")).not.toBeInTheDocument(); // not proper 
  });
  
})