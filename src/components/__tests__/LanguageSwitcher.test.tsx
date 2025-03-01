import { render, screen } from '@testing-library/react'
import LanguageSwitcher from '../LanguageSwitcher'

describe('LanguageSwitcher', () => {
  it('should render language switcher', async () => {
    render(<LanguageSwitcher locale="en" />)

    expect(screen.getByTestId('language-switcher')).toBeInTheDocument()
  })

  it('should show the language', async () => {
    render(<LanguageSwitcher locale="en" />)

    expect(screen.getByTestId('language-switcher')).toHaveTextContent('en')
  })
})
