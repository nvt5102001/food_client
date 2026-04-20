import { Box, Typography, Container, Grid, TextField, IconButton } from '@mui/material'
import { Icon } from "../assets/icon"

export const FooterApp = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'surfaceContainerLow',
        mt: 10,
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={{ py: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                mb: 3,
                fontStyle: 'italic'
              }}
            >
              Tư Hường Food
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, maxWidth: 300, lineHeight: 1.8 }}>
              Gìn giữ và tôn vinh những giá trị thủ công truyền thống từ vùng đất Bắc Giang. Từng sản phẩm là một câu chuyện về sự kiên nhẫn và đam mê.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton sx={{ bgcolor: 'surfaceContainerHighest', color: 'primary.main', '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                <Icon.FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{ bgcolor: 'surfaceContainerHighest', color: 'primary.main', '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                <Icon.YouTubeIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', mb: 3, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Thông tin
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <li><Typography component="a" href="#" sx={{ textDecoration: 'none', color: 'text.secondary', fontSize: '14px', '&:hover': { color: 'primary.main' } }}>Chính sách bảo mật</Typography></li>
              <li><Typography component="a" href="#" sx={{ textDecoration: 'none', color: 'text.secondary', fontSize: '14px', '&:hover': { color: 'primary.main' } }}>Điều khoản sử dụng</Typography></li>
              <li><Typography component="a" href="#" sx={{ textDecoration: 'none', color: 'text.secondary', fontSize: '14px', '&:hover': { color: 'primary.main' } }}>Giao hàng</Typography></li>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', mb: 3, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Liên hệ
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Hotline: +84 989 308 772</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Email: nvt5102001@gmail.com</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Địa chỉ: xã Tân Dĩnh, tỉnh Bắc Ninh</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', mb: 3, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Bản tin
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Đăng ký nhận ưu đãi và tin tức mới nhất.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                variant="outlined"
                placeholder="Email của bạn"
                size="small"
                sx={{
                  bgcolor: 'white',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'divider' },
                    '&:hover fieldset': { borderColor: 'primary.main' },
                  }
                }}
              />
              <IconButton
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: 1,
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
              >
                <Icon.SendIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            py: 4,
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © 2024 Tư Hường Food. Tinh hoa mật ong & mì Chũ.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography component="a" href="#" sx={{ textDecoration: 'none', color: 'text.secondary', fontSize: '12px' }}>Facebook</Typography>
            <Typography component="a" href="#" sx={{ textDecoration: 'none', color: 'text.secondary', fontSize: '12px' }}>Instagram</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}