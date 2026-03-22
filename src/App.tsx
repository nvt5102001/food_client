import './App.css'
import { Container, Fab, Box, Button } from '@mui/material'
import "./themes/style.css"

import { HeaderApp } from './layouts/Header'
import { FooterApp } from './layouts/Footer'
import { ContactHero } from './components/ContactHero'
import { ContactSection } from './components/ContactSection'
import { MapSection } from './components/MapSection'
import { FAQSection } from './components/FAQSection'
import { Icon } from './assets/icon'

function App() {

  return (
    <Container maxWidth={false} disableGutters sx={{ margin: 0, bgcolor: 'background.default', minHeight: '100vh' }}>
      <HeaderApp />

      <Box component="main" sx={{ pt: 10 }}>
        <ContactHero />
        <ContactSection />
        <MapSection />
        <FAQSection />
      </Box>

      <FooterApp />

      {/* Floating Scroll To Top Button */}
      <Fab
        color="primary"
        size="large"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{
          position: 'fixed',
          bottom: 96,
          right: 24,
          zIndex: 60,
          boxShadow: 10,
          '&:active': { transform: 'scale(0.9)' },
          transition: '0.3s'
        }}
      >
        <Icon.KeyboardDoubleArrowUpIcon />
      </Fab>

      {/* Bottom Nav (Mobile Only) */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          px: 2,
          pb: 3,
          zIndex: 50
        }}
      >
        <Box
          sx={{
            width: '100%',
            bgcolor: 'rgba(255, 249, 230, 0.9)',
            backdropFilter: 'blur(20px)',
            p: 2,
            borderRadius: 3,
            boxShadow: '0 -4px 20px rgba(120, 89, 0, 0.1)',
            borderTop: '1px solid',
            borderColor: 'rgba(255, 193, 7, 0.2)'
          }}
        >
          <Button
            fullWidth
            variant="contained"
            className="honey-gradient"
            startIcon={<Icon.ShoppingBasketIcon />}
            sx={{
              py: 2,
              borderRadius: 3,
              fontWeight: 800,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              '&:hover': { filter: 'brightness(1.1)' }
            }}
          >
            MUA NGAY
          </Button>
        </Box>
      </Box>
    </Container >
  )
}

export default App
