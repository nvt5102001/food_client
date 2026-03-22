import { Box, Container, Grid, Typography, IconButton, Link, TextField, InputAdornment } from '@mui/material';
import { Icon } from '../assets/icon';

export const FooterApp = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'surfaceContainerLow',
        mt: 10,
        pt: 8,
        pb: 4,
        borderTop: '1px solid',
        borderColor: 'rgba(120, 89, 0, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={8} sx={{ mb: 8 }}>
          {/* Brand and Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Be Vietnam Pro", sans-serif',
                fontWeight: 700,
                color: 'primary.main',
                mb: 2,
              }}
            >
              Hổ Phách
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 300, lineHeight: 1.8 }}>
              Gói ghém hương vị thuần khiết của đại ngàn gửi đến bàn ăn mọi gia đình Việt. Tinh hoa mật ong & mì Chũ.
            </Typography>
          </Grid>

          {/* Contact and Links */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={4} sx={{ justifyContent: { md: 'flex-end' } }}>
              <Grid size={{ xs: 6, sm: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Liên hệ
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Hotline: +84 123 456</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Bắc Giang, Việt Nam</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, sm: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Thông tin
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="#" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Chính sách bảo mật</Link>
                  <Link href="#" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Điều khoản sử dụng</Link>
                  <Link href="#" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Giao hàng</Link>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Kết nối
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Link href="#" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>Instagram</Link>
                  <Link href="#" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>Facebook</Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ pt: 4, borderTop: '1px solid', borderColor: 'rgba(120, 89, 0, 0.1)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © 2024 Hổ Phách Artisanal. Traditionally crafted in Bac Giang.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              placeholder="Email của bạn"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ backgroundColor: 'primary.main', color: '#ffffff', '&:hover': { backgroundColor: 'primary.dark' }, p: 0.5, borderRadius: '6px' }}>
                      <Icon.Send sx={{ fontSize: '1.2rem' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
