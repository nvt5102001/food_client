import { Box, Typography, Container, Link, Stack } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#faf4dc', // surface-container-low
        borderRadius: '24px 24px 0 0',
        mt: 'auto',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 6, px: 2, gap: 3 }}
        >
          <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Typography
              variant="h6"
              sx={{ color: 'primary.main', fontWeight: 600 }}
            >
              Hổ Phách Artisanal
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'onSurfaceVariant.main' }}
            >
              © 2024 Hổ Phách Artisanal. Traditional Vietnamese Craft.
            </Typography>
          </Stack>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={4}
          >
            {['Privacy Policy', 'Terms of Service', 'Shipping Info', 'Contact Us'].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                sx={{
                  color: 'onSurfaceVariant.main',
                  opacity: 0.8,
                  fontSize: '0.875rem',
                  '&:hover': {
                    textDecorationColor: 'primary.light',
                    textUnderlineOffset: '4px',
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
