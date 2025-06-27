import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Footer from '../Footer'

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />)
    // Footer has multiple responsive layouts, so check for any instance
    expect(screen.getAllByText('Useful Links')[0]).toBeInTheDocument()
  })

  it('displays footer content and links', () => {
    render(<Footer />)
    // Check for main footer sections (4 responsive layouts)
    expect(screen.getAllByText('Useful Links')).toHaveLength(4)
    expect(screen.getAllByText('Connect With Us')).toHaveLength(4)
    expect(screen.getAllByText('Follow Us')).toHaveLength(2) // This one only appears 2 times
    
    // Check for some specific links
    expect(screen.getAllByText('About Us')).toHaveLength(4)
    expect(screen.getAllByText('Contact Us')).toHaveLength(4)
    expect(screen.getAllByText('Newsletter')).toHaveLength(4)
  })

  it('has email subscription form', () => {
    render(<Footer />)
    // 4 forms for different responsive layouts
    expect(screen.getAllByPlaceholderText('Your Email Here')).toHaveLength(4)
    expect(screen.getAllByDisplayValue('Join')).toHaveLength(4)
  })
}) 