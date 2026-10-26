import { Box, Container, Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Link, Alert, CircularProgress } from "@mui/material";
import { Icon } from "../../assets/icon";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../../services";

export const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!email.trim() || !password.trim()) {
            setError("Vui lòng nhập email và mật khẩu.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp.");
            return;
        }

        if (!agreeTerms) {
            setError("Vui lòng đồng ý với Điều khoản & Điều kiện.");
            return;
        }

        setLoading(true);
        try {
            const res = await authService.register({
                email,
                password,
                name,
                phone,
            });
            setSuccess(res.message || "Đăng ký thành công! Đang chuyển đến trang đăng nhập...");
            setTimeout(() => {
                navigate("/auth/login");
            }, 1500);
        } catch (err: any) {
            console.error("Register error:", err);
            const msg = err.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
            <Box component="header" sx={{ position: "fixed", top: 0, width: "100%", zIndex: 50, bgcolor: "rgba(255, 249, 230, 0.8)", backdropFilter: "blur(12px)" }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: "flex", alignItems: "center", px: { xs: 2, md: 6 }, py: 2.5, gap: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main", letterSpacing: "-0.05em", fontFamily: "Be Vietnam Pro" }}>
                            Hổ Phách Artisanal
                        </Typography>
                        <Link
                            component={NavLink}
                            to="/"
                            sx={{
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                color: "primary.main",
                                textDecoration: "none",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                "&:hover": { opacity: 0.8 },
                            }}
                        >
                            <Icon.ArrowBackIcon sx={{ fontSize: "1rem" }} />
                            Về Trang Chủ
                        </Link>
                    </Box>
                </Container>
            </Box>

            <Box component="main" sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", px: { xs: 2, md: 4 }, py: { xs: 4, md: 8 }, mt: { xs: 8, md: 4 } }}>
                <Grid container sx={{ maxWidth: "1200px", bgcolor: "surfaceContainerLowest", borderRadius: 4, overflow: "hidden", boxShadow: "0px 12px 32px rgba(44, 22, 14, 0.06)" }}>
                    {/* Visual Narrative Side */}
                    <Grid size={{ xs: 0, md: 5 }} sx={{ display: { xs: "none", md: "block" }, position: "relative", bgcolor: "surfaceContainerLow" }}>
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_jPBQxqFKFq2V0CmXKFaFnDRHh6fa8lO2duGFyfJhg9SX4qZ90vbnPZTJ6Wm7cgdnNloC7m6QLz-Ft-ksnQfocKdfy2ZXmispqOxFE3zwQIA6P93Rg-lwYv-7-_SasQpOKTF66vBikKw4x78ixkm-1aplLC3S2F1aNQsgMh__LLLigMK-brFnau35is-mFsebBgnpY1WazWt9mdqdzU2jntQFRPp4Mf4-Bf6XjatgRaCCnzAR0LEp62REaaB2aENIQjZcf1XuiLs')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                mixBlendMode: "multiply",
                                opacity: 0.9,
                            }}
                        />
                        <Box sx={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", p: 6 }}>
                            <Box sx={{ bgcolor: "rgba(120, 89, 0, 0.2)", backdropFilter: "blur(12px)", p: 4, borderRadius: 2, color: "white" }}>
                                <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: 1.2, mb: 2, fontFamily: "Be Vietnam Pro" }}>
                                    Gia nhập cộng đồng tinh hoa ẩm thực.
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.95 }}>
                                    Trở thành thành viên để nhận những ưu đãi đặc quyền về mật ong rừng và mì Chũ truyền thống.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Registration Form Side */}
                    <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, md: 6, lg: 8 } }}>
                        <Box sx={{ maxWidth: "440px", mx: "auto" }}>
                            <Box sx={{ mb: 5, textAlign: { xs: "center", md: "left" } }}>
                                <Typography variant="overline" sx={{ color: "tertiary.main", fontWeight: 700, letterSpacing: "0.2em", display: "block", mb: 1 }}>
                                    Chào mừng bạn
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, fontFamily: "Be Vietnam Pro", letterSpacing: "-0.02em" }}>
                                    Đăng ký tài khoản
                                </Typography>
                                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                    Bắt đầu hành trình thưởng thức phong vị truyền thống.
                                </Typography>
                            </Box>

                            <Box component="form" onSubmit={handleRegister} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                                {error && (
                                    <Alert severity="error" sx={{ borderRadius: 2 }}>
                                        {error}
                                    </Alert>
                                )}
                                {success && (
                                    <Alert severity="success" sx={{ borderRadius: 2 }}>
                                        {success}
                                    </Alert>
                                )}

                                <Box>
                                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "outline", mb: 1, display: "block", px: 1 }}>
                                        Họ và Tên
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Nguyễn Văn A"
                                        variant="outlined"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        slotProps={{
                                            input: {
                                                startAdornment: <Icon.PersonIcon sx={{ color: "outline", mr: 1.5 }} />,
                                            },
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                bgcolor: "surfaceContainerLow",
                                                "& fieldset": { border: "none" },
                                                "&:hover": { bgcolor: "surfaceContainer" },
                                                "&.Mui-focused": { bgcolor: "surfaceContainerLowest", outline: "2px solid", outlineColor: "primary.main" },
                                                borderRadius: 2,
                                                py: 0.5,
                                            },
                                        }}
                                    />
                                </Box>

                                <Box>
                                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "outline", mb: 1, display: "block", px: 1 }}>
                                        Email *
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        type="email"
                                        required
                                        placeholder="email@vi-du.com"
                                        variant="outlined"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        slotProps={{
                                            input: {
                                                startAdornment: <Icon.MailIcon sx={{ color: "outline", mr: 1.5 }} />,
                                            },
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                bgcolor: "surfaceContainerLow",
                                                "& fieldset": { border: "none" },
                                                "&:hover": { bgcolor: "surfaceContainer" },
                                                "&.Mui-focused": { bgcolor: "surfaceContainerLowest" },
                                                borderRadius: 2,
                                                py: 0.5,
                                            },
                                        }}
                                    />
                                </Box>

                                <Box>
                                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "outline", mb: 1, display: "block", px: 1 }}>
                                        Số điện thoại
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        type="tel"
                                        placeholder="09xx xxx xxx"
                                        variant="outlined"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        slotProps={{
                                            input: {
                                                startAdornment: <Icon.LocalPhoneIcon sx={{ color: "outline", mr: 1.5 }} />,
                                            },
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                bgcolor: "surfaceContainerLow",
                                                "& fieldset": { border: "none" },
                                                "&:hover": { bgcolor: "surfaceContainer" },
                                                "&.Mui-focused": { bgcolor: "surfaceContainerLowest" },
                                                borderRadius: 2,
                                                py: 0.5,
                                            },
                                        }}
                                    />
                                </Box>

                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "outline", mb: 1, display: "block", px: 1 }}>
                                            Mật khẩu *
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            variant="outlined"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            slotProps={{
                                                input: {
                                                    startAdornment: <Icon.LockIcon sx={{ color: "outline", mr: 1.5 }} />,
                                                },
                                            }}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    bgcolor: "surfaceContainerLow",
                                                    "& fieldset": { border: "none" },
                                                    "&:hover": { bgcolor: "surfaceContainer" },
                                                    "&.Mui-focused": { bgcolor: "surfaceContainerLowest" },
                                                    borderRadius: 2,
                                                    py: 0.5,
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "outline", mb: 1, display: "block", px: 1 }}>
                                            Xác nhận mật khẩu *
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            variant="outlined"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            slotProps={{
                                                input: {
                                                    startAdornment: <Icon.LockResetIcon sx={{ color: "outline", mr: 1.5 }} />,
                                                },
                                            }}
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    bgcolor: "surfaceContainerLow",
                                                    "& fieldset": { border: "none" },
                                                    "&:hover": { bgcolor: "surfaceContainer" },
                                                    "&.Mui-focused": { bgcolor: "surfaceContainerLowest" },
                                                    borderRadius: 2,
                                                    py: 0.5,
                                                },
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            id="terms"
                                            checked={agreeTerms}
                                            onChange={(e) => setAgreeTerms(e.target.checked)}
                                            sx={{ color: "outline", "&.Mui-checked": { color: "primary.main" } }}
                                        />
                                    }
                                    label={
                                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                            Tôi đồng ý với các <Link href="#" sx={{ color: "primary.main", fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Điều khoản & Điều kiện</Link> của Hổ Phách Artisanal.
                                        </Typography>
                                    }
                                    sx={{ mt: 1, alignItems: "flex-start", "& .MuiFormControlLabel-label": { mt: 0.3 } }}
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    disabled={loading}
                                    className="honey-gradient"
                                    sx={{
                                        py: 1.8,
                                        borderRadius: 3,
                                        fontSize: "1.1rem",
                                        fontWeight: 700,
                                        boxShadow: "0 8px 24px rgba(120, 89, 0, 0.2)",
                                        mt: 2,
                                        textTransform: "none",
                                    }}
                                >
                                    {loading ? <CircularProgress size={24} color="inherit" /> : "Đăng ký"}
                                </Button>

                                <Box sx={{ mt: 3, textAlign: "center" }}>
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                        Đã có tài khoản?{" "}
                                        <Link component={NavLink} to="/auth/login" sx={{ color: "primary.main", fontWeight: 700, textDecoration: "none", ml: 0.5, "&:hover": { textDecoration: "underline" } }}>
                                            Đăng nhập
                                        </Link>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
