import { render, screen } from '@testing-library/react'
import { LanguageSelector } from '../language-selector'

describe('LanguageSelector', () => {
  it('should render language selector', async () => {
    render(<LanguageSelector />)

    expect(screen.getByText('Change language')).toBeInTheDocument()
  })
})
