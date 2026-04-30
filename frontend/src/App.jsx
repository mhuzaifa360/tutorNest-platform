import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Typography from './components/common/Typography'

function App() {
  return (
    <div >
        <Typography variant='h1'>h1</Typography>
        <Typography variant='h2'>h2</Typography>
        <Typography variant='h3'>h3</Typography>
        <Typography variant='h4'>h4</Typography>
        <Typography variant='price'>price</Typography>
       <AppRoutes />
    </div>
  )
}

export default App
