import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import AboutTest from './pages/About-test.jsx'
import SimpleTest from './pages/SimpleTest.jsx'
import Book from './pages/Book.jsx'
import Thanks from './pages/Thanks.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-joseph', element: <About /> },
      { path: 'purpose-power-possibilities', element: <Book /> },
      { path: 'thanks', element: <Thanks /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
