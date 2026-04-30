import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Typography from './components/common/Typography'
import Btn from './components/common/Btn'

function App() {
  return (
    <div >
        <Typography variant='h1'>h1</Typography>
        <Typography variant='h2'>h2</Typography>
        <Typography variant='h3'>h3</Typography>
        <Typography variant='h4'>h4</Typography>
        <Typography variant='price'>price</Typography>
        <Btn variant='blue'>button</Btn>
        <Btn variant='white'>button</Btn>
       <AppRoutes />
    </div>
  )
}

export default App
