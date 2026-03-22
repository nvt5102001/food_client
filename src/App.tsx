import { Box } from '@mui/material';
import './App.css';
import './themes/style.css';

import { HeaderApp } from './layouts/Header';
import { FooterApp } from './layouts/Footer';
import { MobileBottomNavBar } from './layouts/MobileBottomNavBar';
import { ScrollToTop } from './layouts/ScrollToTop';
import { ProductListing } from './pages/ProductListing';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderApp />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <ProductListing />
      </Box>

      <FooterApp />

      <MobileBottomNavBar />
      <ScrollToTop />
    </Box>
  );
}

export default App;
