import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Import pages
import Home from './pages/home.jsx'
import PokemonDetails from './components/PokemonDetails.jsx'

//1 - Setup router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext.jsx'

//2 - Register Path and Pages
const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children:[
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/pokemon/:id',
      element: <PokemonDetails/>
    }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </React.StrictMode>,
)
