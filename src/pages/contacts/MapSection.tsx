import { Box, Typography, Button, Paper } from '@mui/material';
import { Icon } from "../../assets/icon"
export const MapSection = () => {
    return (
        <Box component="section" sx={{ height: '500px', width: '100%', position: 'relative', overflow: 'hidden' }}>
            <Box
                component="img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLVFgtYFtJrKpvvzRcyj626MmbdcgY6kPti9Foeuq6rsm3lnTFX_HNQSveXfXqBspInqScAXLMa1hBME-1wbr2xpMKvS0JDsGTf6npOdpzr1Qz0KjQYBmG-xWxotNPufSknuCcWDGaWU_tq2erZevb12bUC-28SB_93iiq5ieIchuioiaSAxD7hd_s4teBh5mfun5Y6HSgp0nBPNEBx0ZPIEe8-Oc29i6b3pVf0ffGOxEz7J4WxErIqIscVLLbLTHBzsFRoEwaeMs"
                alt="Bản đồ vị trí"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(1)',
                    opacity: 0.5
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, #faf4dc, transparent, #fff9e6)'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 3
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        borderRadius: 4,
                        textAlign: 'center',
                        maxWidth: '400px',
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        border: '1px solid rgba(255, 255, 255, 0.5)'
                    }}
                >
                    <Icon.LocationOnIcon sx={{ color: 'primary.main', fontSize: '2.5rem', mb: 1 }} />
                    <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 1 }}>
                        Xưởng Mì Chũ & Mật Ong
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                        Trung tâm sản xuất đặc sản truyền thống Bắc Giang
                    </Typography>
                    <Button
                        variant="text"
                        color="primary"
                        endIcon={<Icon.ArrowForwardIcon sx={{ fontSize: '0.875rem' }} />}
                        sx={{
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        CHỈ ĐƯỜNG
                    </Button>
                </Paper>
            </Box>
        </Box>
    );
};