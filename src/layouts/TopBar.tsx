import { Box, Typography, Container } from '@mui/material'
import { Icon } from "../assets/icon"

export const TopBarApp = () => {
    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                color: "white",
                height: { lg: "40px", xs: "auto" },
                display: "flex",
                alignItems: "center",
                py: { xs: 1, lg: 0 }
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Icon.LocalPhoneIcon sx={{ fontSize: "16px" }} />
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>0989308772</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: { xs: 'none', sm: 'block' } }}>
                            Giao hàng toàn quốc - Tinh hoa đất Việt
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}>
                                <Icon.FacebookIcon sx={{ fontSize: '14px' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}>
                                <Icon.YouTubeIcon sx={{ fontSize: '14px' }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
