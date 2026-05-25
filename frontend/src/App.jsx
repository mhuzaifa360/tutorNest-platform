import AppRoutes from './routes/AppRoutes'
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
