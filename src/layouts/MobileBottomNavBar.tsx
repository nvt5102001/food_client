import { Box, Button, Container } from '@mui/material';
import { Icon } from '../assets/icon';

export const MobileBottomNavBar = () => {
  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        pb: 3,
        backgroundColor: 'rgba(255, 249, 230, 0.9)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        borderTop: '1px solid',
        borderColor: 'rgba(120, 89, 0, 0.1)',
        boxShadow: '0 -4px 20px rgba(120, 89, 0, 0.1)',
      }}
    >
      <Container>
        <Button
          fullWidth
          variant="contained"
          startIcon={<Icon.ShoppingBasket />}
          sx={{
            py: 1.5,
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            borderRadius: '12px',
            background: 'linear-gradient(90deg, #785900 0%, #fabd00 100%)',
            border: 'none',
            '&:hover': {
              background: 'linear-gradient(90deg, #5b4300 0%, #d4a000 100%)',
            }
          }}
        >
          Giỏ hàng của bạn
        </Button>
      </Container>
    </Box>
  );
};
