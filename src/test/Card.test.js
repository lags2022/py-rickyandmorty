import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Detail from '../components/Detail/Detail'
import { BrowserRouter } from 'react-router-dom'

test('renders content', () => {
  const view = render(
    <BrowserRouter>
      <Detail />
    </BrowserRouter>
  )

  console.log(view)
})
