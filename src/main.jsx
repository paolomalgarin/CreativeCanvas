// ------------------------- IMPORT -------------------------
import React from 'react'
import ReactDOM from 'react-dom/client'
//componenti
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./redux/store.js"
import ScrollToTop from "./components/ScrollToTop"
import App from './pages/Home/App.jsx'
import Projects from './pages/Projects/Projects.jsx'
import About from './pages/About/About.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
//stile
import './index.css'

const router = createBrowserRouter([  //router per routing delle pagine
  {
    path: "/",
    element: <ScrollToTop> <App /> </ScrollToTop>,
  },
  {
    path: "/projects",
    element: <ScrollToTop> <Projects /> </ScrollToTop>,
  },
  {
    path: "/contacts",
    element: <ScrollToTop> <About /> </ScrollToTop>,
  },
  {
    path: "*",
    errorElement: <ErrorPage />,
  },
])


// ------------------------- FUNZIONE -------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* store con le variabili */}
      <RouterProvider router={router} /> {/* router con le pagine */}
    </Provider>
  </React.StrictMode>,
)