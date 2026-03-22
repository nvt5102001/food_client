import { Box, Typography, IconButton, Badge } from '@mui/material';
import { Icon } from "../assets/icon";

export const HeaderApp = () => {
    return (
        <Box
            component="nav"
            className="glass-nav"
            sx={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 50,
                boxShadow: 1,
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: 3, md: 8 },
                    py: 2,
                    maxWidth: '1280px',
                    mx: 'auto'
                }}
            >
                {/* Brand Logo */}
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'primary.main',
                        fontStyle: 'italic',
                        fontFamily: '"Be Vietnam Pro"',
                        letterSpacing: '-0.05em',
                        cursor: 'pointer'
                    }}
                >
                    Hổ Phách
                </Typography>

                {/* Desktop Nav */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        gap: 5,
                        '& a': {
                            textDecoration: 'none',
                            color: 'text.primary',
                            fontWeight: 700,
                            fontFamily: '"Be Vietnam Pro"',
                            transition: '0.3s',
                            '&:hover': { color: 'primary.main' }
                        }
                    }}
                >
                    <a href="#">Trang chủ</a>
                    <a href="#">Sản phẩm</a>
                    <a href="#">Câu chuyện</a>
                    <Box
                        component="a"
                        href="#"
                        sx={{
                            color: 'primary.main !important',
                            borderBottom: '2px solid',
                            borderColor: 'primary.main',
                            pb: 0.5
                        }}
                    >
                        Liên hệ
                    </Box>
                </Box>

                {/* Trailing Actions */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'primary.main' }}>
                    <IconButton size="large" sx={{ color: 'inherit', '&:hover': { bgcolor: 'surfaceContainerHighest' } }}>
                        <Icon.AccountCircleIcon />
                    </IconButton>
                    <IconButton size="large" sx={{ color: 'inherit', '&:hover': { bgcolor: 'surfaceContainerHighest' } }}>
                        <Badge badgeContent={0} color="primary">
                            <Icon.ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" sx={{ display: { xs: 'flex', md: 'none' }, color: 'inherit' }}>
                        <Icon.MenuIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};
