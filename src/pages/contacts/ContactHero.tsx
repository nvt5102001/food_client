import { Box, Typography, Chip } from '@mui/material';

export const ContactHero = () => {
    return (
        <Box component="section" sx={{ position: 'relative', py: { xs: 12, md: 24 }, px: 3, overflow: 'hidden' }}>
            <Box className="hero-pattern" />
            <Box
                sx={{
                    maxWidth: '1280px',
                    mx: 'auto',
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 6
                }}
            >
                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <Chip
                        label="LIÊN KẾT CỘNG ĐỒNG"
                        sx={{
                            bgcolor: 'tertiaryContainer',
                            color: 'onTertiaryContainer',
                            fontWeight: 800,
                            letterSpacing: '0.15em',
                            mb: 3,
                            borderRadius: 'full',
                            fontSize: '0.75rem'
                        }}
                    />
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '3rem', md: '4.5rem' },
                            letterSpacing: '-0.02em',
                            mb: 3,
                            lineHeight: 1.1,
                            color: 'text.primary'
                        }}
                    >
                        Liên hệ với <br /> chúng tôi
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.125rem',
                            color: 'text.secondary',
                            maxWidth: '450px',
                            lineHeight: 1.6
                        }}
                    >
                        Mang hương vị truyền thống từ Bắc Giang đến gian bếp nhà bạn. Chúng tôi luôn sẵn sàng lắng nghe câu chuyện của bạn.
                    </Typography>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '50%' }, position: 'relative' }}>
                    <Box
                        className="rotate-2 transition-transform"
                        sx={{
                            aspectRatio: '4/3',
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                    >
                        <Box
                            component="img"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYH0YtoneCH_xct94Ps2VW2_6PjxRTtgrvs046lmepF0r365yOnL7K753NncEUOTlTRxKF3Nkcy8s7ewc2iEolMbMy4foVx1l0xa684O9yfrM79nQxIq-0F0kzzlcrxV42lLUw3Ap6oHb0R-hdJ5wvlc5_bHEOSJHNQt90JkR3rSfpNP7czaCOG9mTzvPbASoositW2kndK1R5JDQbTu0Mfl3tzTxRqZkxK8vLqzmGdv391seZIfu02ue-H7X5mTfAtEFzycJ0ohU"
                            alt="Tư Hường Food Honey"
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: -24,
                            left: -24,
                            bgcolor: 'primary.main',
                            p: 3,
                            borderRadius: 3,
                            boxShadow: 3,
                            display: { xs: 'none', md: 'block' }
                        }}
                    >
                        <Typography sx={{ color: 'primary.contrastText', fontWeight: 700, fontStyle: 'italic', fontFamily: '"Be Vietnam Pro"' }}>
                            Từ tâm người thợ thủ công
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};