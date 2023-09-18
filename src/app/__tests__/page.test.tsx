import Page from '../page'
import { render, screen } from '@testing-library/react'

describe('Page', () => {
  it('should render a deployment description', () => {
    render(<Page />)

    expect(
      screen.getByText(
        /Instantly deploy your Next.js site to a shareable URL with Vercel./i
      )
    ).toBeInTheDocument()
  })
})
