import '@testing-library/jest-dom/extend-expect'
import { render, prettyDOM, fireEvent, screen } from '@testing-library/react'
import Detail from '../components/Detail/Detail'
import { BrowserRouter } from 'react-router-dom'
import { expect, jest, test } from '@jest/globals'
import userEvent from "@testing-library/user-event";


const mockedUsedNavigate = jest.fn()

jest.unstable_mockModule('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

test('clicking the button calls event handler once', async () => {
  const view = render(
    <BrowserRouter>
      <Detail />
    </BrowserRouter>
  )

  // mock: se hace pasar por algo sin necesidad de serlo

  // Sobrescribir el valor de la función navigate dentro del componente Detail
  // para que utilice el mockNavigate en lugar de useNavigate

  // const mockNavigate = jest.fn()

  // jest.unstable_mockModule('react-router-dom', () => ({
  //   useNavigate: mockNavigate
  //   // Definir otras funciones o propiedades necesarias para tu prueba
  // }))

  // const { useNavigate } = await import('react-router-dom')

  // const button = view.getByText('Home')
  // console.log(prettyDOM(button))
  // fireEvent.click(button)

  await userEvent.click(screen.getByText("Home"));

  expect(mockedUsedNavigate).toHaveBeenCalledWith('/home')

  // view.getByText('Home')

  // container es toda la informacion del dom. tbm tenemos todo los metodos.
  // const div = view.container.querySelector('div')
  // expect(div.container).toHaveTextContent('hoLE')

  // tbm muestra el arbol del dom parecido a prettyDom
  // view.debug()

  // prettyDom es para mostrar graficamente nuestro viewe:
  // console.log(prettyDOM(view))
})
