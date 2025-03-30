import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'

import EstiloGlobal, { MainContainer } from './styles'
import store from './store'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <MainContainer>
        <RouterProvider router={rotas} />
      </MainContainer>
    </Provider>
  )
}

export default App
