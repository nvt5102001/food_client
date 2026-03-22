import './App.css'
import { Box } from '@mui/material'
import "./themes/style.css"
import { LoginPage } from './pages/LoginPage'
import { Footer } from './layouts/Footer'

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default'
      }}
    >
      <LoginPage />
      <Footer />
    </Box>
  )
}

export default App
