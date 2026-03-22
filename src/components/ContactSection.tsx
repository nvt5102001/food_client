import { Box, Typography, Grid, TextField, Button, Avatar } from '@mui/material';
import { Icon } from '../assets/icon';

export const ContactSection = () => {
    return (
        <Box component="section" sx={{ py: 10, px: 3, bgcolor: 'surfaceContainerLow' }}>
            <Box sx={{ maxWidth: '1280px', mx: 'auto' }}>
                <Grid container spacing={10}>
                    {/* Form Side */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Box sx={{ bgcolor: 'surfaceContainerLowest', p: { xs: 4, md: 6 }, borderRadius: 3, boxShadow: 1 }}>
                            <Typography variant="h3" sx={{ mb: 4, fontSize: '1.875rem' }}>
                                Gửi tin nhắn cho Hổ Phách
                            </Typography>
                            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Typography variant="overline" sx={{ display: 'block', mb: 1, color: 'text.secondary', fontSize: '0.75rem' }}>
                                            Họ và Tên
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Nguyễn Văn A"
                                            variant="filled"
                                            slotProps={{ input: { disableUnderline: true, sx: { borderRadius: 2, bgcolor: 'surfaceContainerLow' } } }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Typography variant="overline" sx={{ display: 'block', mb: 1, color: 'text.secondary', fontSize: '0.75rem' }}>
                                            Email
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="example@gmail.com"
                                            variant="filled"
                                            slotProps={{ input: { disableUnderline: true, sx: { borderRadius: 2, bgcolor: 'surfaceContainerLow' } } }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Typography variant="overline" sx={{ display: 'block', mb: 1, color: 'text.secondary', fontSize: '0.75rem' }}>
                                            Số điện thoại
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="0123 456 789"
                                            variant="filled"
                                            slotProps={{ input: { disableUnderline: true, sx: { borderRadius: 2, bgcolor: 'surfaceContainerLow' } } }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Typography variant="overline" sx={{ display: 'block', mb: 1, color: 'text.secondary', fontSize: '0.75rem' }}>
                                            Chủ đề
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Hợp tác, Góp ý..."
                                            variant="filled"
                                            slotProps={{ input: { disableUnderline: true, sx: { borderRadius: 2, bgcolor: 'surfaceContainerLow' } } }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Typography variant="overline" sx={{ display: 'block', mb: 1, color: 'text.secondary', fontSize: '0.75rem' }}>
                                            Lời nhắn
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={5}
                                            placeholder="Bạn muốn chia sẻ điều gì với chúng tôi?"
                                            variant="filled"
                                            slotProps={{ input: { disableUnderline: true, sx: { borderRadius: 2, bgcolor: 'surfaceContainerLow' } } }}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    className="honey-gradient"
                                    variant="contained"
                                    size="large"
                                    startIcon={<Icon.SendIcon />}
                                    sx={{
                                        mt: 2,
                                        borderRadius: 3,
                                        py: 2,
                                        fontSize: '1.125rem',
                                        boxShadow: 3,
                                        '&:hover': { filter: 'brightness(1.1)' }
                                    }}
                                >
                                    Gửi lời nhắn ngay
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    {/* Info Side */}
                    <Grid size={{ xs: 12, lg: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h2" sx={{ mb: 3, fontSize: '1.875rem' }}>
                            Thông tin liên lạc
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}>
                            Chúng tôi luôn trân trọng mọi phản hồi từ khách hàng. Hãy ghé thăm hoặc liên hệ trực tiếp qua các kênh sau:
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 6 }}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 48, height: 48 }}>
                                    <Icon.LocationOnIcon />
                                </Avatar>
                                <Box>
                                    <Typography variant="overline" sx={{ color: 'secondary.main', display: 'block', fontSize: '0.75rem', lineHeight: 1 }}>
                                        Địa chỉ xưởng
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                        Bắc Giang, Việt Nam
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 48, height: 48 }}>
                                    <Icon.LocalPhoneIcon />
                                </Avatar>
                                <Box>
                                    <Typography variant="overline" sx={{ color: 'secondary.main', display: 'block', fontSize: '0.75rem', lineHeight: 1 }}>
                                        Hotline 24/7
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                        +84 123 456 789
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 48, height: 48 }}>
                                    <Icon.MailIcon />
                                </Avatar>
                                <Box>
                                    <Typography variant="overline" sx={{ color: 'secondary.main', display: 'block', fontSize: '0.75rem', lineHeight: 1 }}>
                                        Email hỗ trợ
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 500 }}>
                                        hello@hophach.vn
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, display: 'block', fontSize: '0.75rem' }}>
                                Theo dõi chúng tôi
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {[Icon.FacebookIcon, Icon.InstagramIcon, Icon.ChatIcon].map((SocialIcon, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 2,
                                            bgcolor: 'surfaceContainerHighest',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: '0.2s',
                                            '&:hover': { bgcolor: 'primary.main', color: 'primary.contrastText' }
                                        }}
                                    >
                                        <SocialIcon fontSize="small" />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
