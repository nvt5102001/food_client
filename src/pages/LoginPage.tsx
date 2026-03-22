import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Icon } from '../assets/icon';
import { useState } from 'react';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, lg: 6 },
        minHeight: 'calc(100vh - 150px)',
      }}
    >
      <Grid
        container
        className="editorial-shadow"
        sx={{
          maxWidth: 1152,
          bgcolor: 'surfaceContainerLowest.main',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        {/* Left Side: Branding */}
        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: { xs: 'none', lg: 'flex' },
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: 6,
            bgcolor: 'surfaceContainerLow.main',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
            {/* Decorative gradient line */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(135deg, #785900 0%, #ffc107 100%)',
                opacity: 0.2,
              }}
            />
          <Box sx={{ zIndex: 10 }}>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Hổ Phách Artisanal
            </Typography>
            <Box sx={{ mt: 12, maxWidth: 384 }}>
              <Typography
                variant="h3"
                sx={{
                  color: 'primary.main',
                  mb: 3,
                  lineHeight: 1.1,
                  fontSize: '3rem',
                }}
              >
                Gói trọn tinh hoa từ đôi tay thợ thủ công.
              </Typography>
              <Typography variant="body1" sx={{ color: 'onSurfaceVariant.main' }}>
                Khám phá hương vị nguyên bản của mật ong rừng và Mì Chũ truyền thống, được chắt lọc qua nhiều thế hệ.
              </Typography>
            </Box>
          </Box>

          <Box
            component="img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBghayVBmeZAcpupxep-r2W4hu9KypmYbmZIMjYxAJXk2m1cJeu3E9N294elIISwLf9yVoOOU6IidcqCP1fOuZLtiusbv4nsznYnbb7lCAOife-rdyJHIZ3qB34ui1qzIs_Rg3wLWmOfwVmgvu3qO2huRmOYiWSgDUz2ry551fIwTP1bU4bfy-nI7-0iWs_MYkTqxt4k_WyDzUm9CZ57deCbpgK__j6k8P9XK5bIrEYpjb7BLXtKrS7aUw9KfXAxjWHISX98wcrUk"
            alt="Hổ Phách Artisanal Honey"
            sx={{
              position: 'absolute',
              right: -80,
              bottom: 0,
              width: '75%',
              height: 400,
              objectFit: 'cover',
              borderRadius: '48px 0 0 0',
              opacity: 0.9,
            }}
          />
        </Grid>

        {/* Right Side: Login Form */}
        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            p: { xs: 4, lg: 8 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ mb: 5, textAlign: { xs: 'center', lg: 'left' } }}>
            <Typography variant="h4" sx={{ color: 'onSurface.main', mb: 1 }}>
              Chào mừng trở lại
            </Typography>
            <Typography variant="body2" sx={{ color: 'onSurfaceVariant.main' }}>
              Vui lòng nhập thông tin để tiếp tục hành trình ẩm thực.
            </Typography>
          </Box>

          <Stack spacing={3} component="form">
            <Stack spacing={1}>
              <Typography
                variant="overline"
                sx={{ color: 'onSurfaceVariant.main', fontSize: '0.75rem' }}
              >
                Email hoặc Số điện thoại
              </Typography>
              <TextField
                fullWidth
                placeholder="example@email.com"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon.Mail sx={{ color: 'outline.main' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    bgcolor: 'surfaceContainerLow.main',
                    borderRadius: 3,
                    '& fieldset': { border: 'none' },
                    '&.Mui-focused': {
                      bgcolor: 'surfaceContainerLowest.main',
                      boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}`,
                    },
                    py: 1,
                  },
                }}
              />
            </Stack>

            <Stack spacing={1}>
              <Typography
                variant="overline"
                sx={{ color: 'onSurfaceVariant.main', fontSize: '0.75rem' }}
              >
                Mật khẩu
              </Typography>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon.Lock sx={{ color: 'outline.main' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: 'outline.main' }}
                      >
                        {showPassword ? <Icon.VisibilityOff /> : <Icon.Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    bgcolor: 'surfaceContainerLow.main',
                    borderRadius: 3,
                    '& fieldset': { border: 'none' },
                    '&.Mui-focused': {
                      bgcolor: 'surfaceContainerLowest.main',
                      boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}`,
                    },
                    py: 1,
                  },
                }}
              />
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: 'outline.main',
                      '&.Mui-checked': { color: 'primary.main' },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: 'onSurfaceVariant.main' }}>
                    Ghi nhớ đăng nhập
                  </Typography>
                }
              />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Quên mật khẩu?
              </Link>
            </Stack>

            <Button
              fullWidth
              variant="contained"
              size="large"
              className="honey-gradient editorial-shadow"
              sx={{
                py: 2,
                borderRadius: 3,
                color: 'white',
                fontSize: '1.125rem',
                '&:hover': { transform: 'scale(1.02)' },
                '&:active': { transform: 'scale(0.95)' },
                transition: 'all 0.2s',
              }}
            >
              Đăng nhập
            </Button>
          </Stack>

          <Box sx={{ position: 'relative', my: 5 }}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                width: '100%',
                borderTop: 1,
                borderColor: 'surfaceVariant.main',
              }}
            />
            <Box sx={{ position: 'relative', textAlign: 'center' }}>
              <Typography
                variant="overline"
                sx={{
                  bgcolor: 'surfaceContainerLowest.main',
                  px: 2,
                  color: 'onSurfaceVariant.main',
                  fontSize: '0.625rem',
                }}
              >
                Hoặc tiếp tục với
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid size={6}>
              <Button
                fullWidth
                variant="contained"
                startIcon={
                  <Box
                    component="img"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYg3H1GuMDdsyF690IuUwXIsAa8skGuP3oDYw6AZqI4DrOlHnIJU4KZEeNuEhY6bLqlDYb7xlOPheI05bt5flKpqiwtbZyLF8bBFsX9piwO71wq0ottv2XUY7HZMIvGCfwpYM-jfeNdtx6hXTkxrLkg_LnFb4vf66SJaR098zgLy-5HYUd59jW7Xm6Rb_wJ3JfkHxoWJnbR7YasZuLQDWNXN9Zeye_hT7qNhmWhpa-xEgtEgYqzGKkYrierltlzTsK-bFkqWX2Y0c"
                    sx={{ width: 20, height: 20 }}
                  />
                }
                sx={{
                  bgcolor: 'surfaceContainerHigh.main',
                  color: 'onSurface.main',
                  borderRadius: 3,
                  py: 1.5,
                  '&:hover': { bgcolor: 'surfaceVariant.main' },
                  boxShadow: 'none',
                  textTransform: 'none',
                }}
              >
                Google
              </Button>
            </Grid>
            <Grid size={6}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<Icon.FacebookIcon sx={{ color: '#1877F2' }} />}
                sx={{
                  bgcolor: 'surfaceContainerHigh.main',
                  color: 'onSurface.main',
                  borderRadius: 3,
                  py: 1.5,
                  '&:hover': { bgcolor: 'surfaceVariant.main' },
                  boxShadow: 'none',
                  textTransform: 'none',
                }}
              >
                Facebook
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'onSurfaceVariant.main' }}>
              Chưa có tài khoản?{' '}
              <Link
                href="#"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Đăng ký ngay
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
