import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Typography from './components/common/Typography'
import Btn from './components/common/Btn'
import { BrowserRouter } from 'react-router'

function App() {
  return (
    <div >
      <BrowserRouter>
       <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
