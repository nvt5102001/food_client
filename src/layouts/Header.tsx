import { Box, Typography, Container, IconButton } from '@mui/material'
import { Icon } from "../assets/icon"

export const HeaderApp = () => {
    return (
        <Box
            component="header"
            className="glass-nav"
            sx={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 50,
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 2
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 700,
                                fontStyle: 'italic',
                                letterSpacing: '-0.05em',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            Hổ Phách
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            gap: 4
                        }}
                    >
                        <Typography
                            component="a"
                            href="#"
                            sx={{
                                fontWeight: 700,
                                color: 'primary.main',
                                textDecoration: 'none',
                                borderBottom: '2px solid',
                                borderColor: 'primary.main',
                                pb: 0.5
                            }}
                        >
                            Trang chủ
                        </Typography>
                        <Typography
                            component="a"
                            href="#products"
                            sx={{
                                fontWeight: 700,
                                color: 'text.secondary',
                                textDecoration: 'none',
                                '&:hover': { color: 'primary.main' },
                                transition: 'color 0.3s'
                            }}
                        >
                            Sản phẩm
                        </Typography>
                        <Typography
                            component="a"
                            href="#about"
                            sx={{
                                fontWeight: 700,
                                color: 'text.secondary',
                                textDecoration: 'none',
                                '&:hover': { color: 'primary.main' },
                                transition: 'color 0.3s'
                            }}
                        >
                            Câu chuyện
                        </Typography>
                        <Typography
                            component="a"
                            href="#contact"
                            sx={{
                                fontWeight: 700,
                                color: 'text.secondary',
                                textDecoration: 'none',
                                '&:hover': { color: 'primary.main' },
                                transition: 'color 0.3s'
                            }}
                        >
                            Liên hệ
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton color="primary" sx={{ '&:hover': { bgcolor: 'surfaceContainerHighest' } }}>
                            <Icon.AccountCircleIcon />
                        </IconButton>
                        <IconButton color="primary" sx={{ '&:hover': { bgcolor: 'surfaceContainerHighest' } }}>
                            <Icon.ShoppingCartIcon />
                        </IconButton>
                        <IconButton
                            color="primary"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                '&:hover': { bgcolor: 'surfaceContainerHighest' }
                            }}
                        >
                            <Icon.MenuIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
