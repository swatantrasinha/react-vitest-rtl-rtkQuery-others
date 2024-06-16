import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']
  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders Login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {  // use queryByRole for element not present
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start Learning button is eventually displayed', async () => {
    const view= render(<Skills skills={skills} />)
    logRoles(view.container)
   
    const startLearningButton = await screen.findByRole( // default timeout of 1000ms - give timeout if need to wait more
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      }
    )
   
    expect(startLearningButton).toBeInTheDocument()
  })
})