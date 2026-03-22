import { AppBar, Box, Toolbar, Typography, IconButton, Container, Link } from '@mui/material';
import { Icon } from '../assets/icon';

const navLinks = [
  { label: 'Trang chủ', href: '#' },
  { label: 'Sản phẩm', href: '#', active: true },
  { label: 'Câu chuyện', href: '#' },
  { label: 'Liên hệ', href: '#' },
];

export const HeaderApp = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className="glass-nav"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'rgba(120, 89, 0, 0.1)',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontWeight: 700,
              fontStyle: 'italic',
              color: 'primary.main',
              textDecoration: 'none',
              letterSpacing: '-0.05em',
            }}
          >
            Hổ Phách
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                sx={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: link.active ? 'primary.main' : 'text.primary',
                  opacity: link.active ? 1 : 0.7,
                  textDecoration: 'none',
                  borderBottom: link.active ? '2px solid' : 'none',
                  borderColor: 'primary.main',
                  pb: 0.5,
                  transition: 'all 0.3s',
                  '&:hover': {
                    opacity: 1,
                    color: 'primary.main',
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          {/* Action Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              href="/login"
              sx={{
                color: 'primary.main',
                '&:hover': { backgroundColor: 'surfaceContainerHighest' }
              }}
            >
              <Icon.AccountCircle />
            </IconButton>
            <IconButton
              href="/cart"
              sx={{
                color: 'primary.main',
                '&:hover': { backgroundColor: 'surfaceContainerHighest' }
              }}
            >
              <Icon.ShoppingCart />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
