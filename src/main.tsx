import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App/App'
import PageLogin from './components/Login/LoginPage'
import PageRegister from './components/Register/PageRegister'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<PageLogin />} />
          <Route path="register" element={<PageRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
