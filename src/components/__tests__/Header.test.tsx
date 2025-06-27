import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('contains navigation elements in desktop view', () => {
    render(<Header />)
    // Only desktop navigation is visible by default (mobile is hidden)
    expect(screen.getByText('Find a job')).toBeInTheDocument()
    expect(screen.getByText('Hire Talent')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has login and join buttons', () => {
    render(<Header />)
    expect(screen.getByText('Login')).toBeInTheDocument() // Desktop version
    expect(screen.getAllByText('Join us')).toHaveLength(2) // Mobile and desktop visible
  })
}) 