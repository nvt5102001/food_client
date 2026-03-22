import { Box, Typography, IconButton } from '@mui/material';
import { Icon } from '../assets/icon';

export const FooterApp = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                mt: 10,
                bgcolor: 'surfaceContainerLow',
                borderTop: '1px solid',
                borderColor: 'divider'
            }}
        >
            <Box
                sx={{
                    maxWidth: '1280px',
                    mx: 'auto',
                    px: 3,
                    py: 8,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 6
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'primary.main',
                            fontFamily: '"Be Vietnam Pro"'
                        }}
                    >
                        Hổ Phách Artisanal
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            textAlign: { xs: 'center', md: 'left' },
                            lineHeight: 1.6
                        }}
                    >
                        © 2024 Hổ Phách Artisanal. Tinh hoa mật ong & mì Chũ.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 4,
                        '& a': {
                            textDecoration: 'none',
                            color: 'text.secondary',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            transition: '0.3s',
                            '&:hover': { color: 'primary.main' }
                        }
                    }}
                >
                    <a href="#">Chính sách bảo mật</a>
                    <a href="#">Điều khoản sử dụng</a>
                    <a href="#">Giao hàng</a>
                </Box>

                <IconButton
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    sx={{
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        '&:hover': { bgcolor: 'primary.dark' },
                        boxShadow: 2
                    }}
                >
                    <Icon.ArrowUpwardIcon fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    );
};
