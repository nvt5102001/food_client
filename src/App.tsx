import './App.css'
import { Container } from '@mui/material'
import "./themes/style.css"

import { HeaderApp } from './layouts/Header'
import { TopBarApp } from './layouts/TopBar'
function App() {

  return (
    <Container maxWidth={false} disableGutters sx={{ margin: 0 }}>
      <TopBarApp />
      <HeaderApp />

    </Container >
  )
}

export default App
