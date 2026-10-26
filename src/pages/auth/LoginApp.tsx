import { Box, Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Link, IconButton, InputAdornment, Divider, Alert, CircularProgress } from "@mui/material";
import { Icon } from "../../assets/icon";
import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    async function handleSignin(e?: React.FormEvent) {
        if (e) e.preventDefault();
        setError(null);
        if (!email.trim() || !password.trim()) {
            setError("Vui lòng nhập đầy đủ email và mật khẩu.");
            return;
        }

        setLoading(true);
        try {
            await login({ email, password });
            const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/";
            navigate(from, { replace: true });
        } catch (err: any) {
            console.error("Login error:", err);
            const msg = err.response?.data?.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
            <Box component="main" sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", p: { xs: 2, lg: 6 } }}>
                <Grid container className="editorial-shadow" sx={{ maxWidth: "1200px", width: "100%", bgcolor: "surfaceContainerLowest", borderRadius: 3, overflow: "hidden" }}>
                    {/* Left Side: Editorial Image & Branding */}
                    <Grid size={{ xs: 0, lg: 6 }} sx={{ display: { xs: "none", lg: "flex" }, flexDirection: "column", justifyContent: "space-between", p: 6, bgcolor: "surfaceContainerLow", position: "relative", overflow: "hidden" }}>
                        {/* Branding Section */}
                        <Box sx={{ zIndex: 10 }}>
                            <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "-0.02em" }}>
                                Hổ Phách Artisanal
                            </Typography>
                            <Box sx={{ mt: 12, maxWidth: 380 }}>
                                <Typography variant="h2" sx={{ color: "primary.main", mb: 3, lineHeight: 1.2 }}>
                                    Gói trọn tinh hoa từ đôi tay thợ thủ công.
                                </Typography>
                                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                                    Khám phá hương vị nguyên bản của mật ong rừng và Mì Chũ truyền thống, được chắt lọc qua nhiều thế hệ.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            component="img"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBghayVBmeZAcpupxep-r2W4hu9KypmYbmZIMjYxAJXk2m1cJeu3E9N294elIISwLf9yVoOOU6IidcqCP1fOuZLtiusbv4nsznYnbb7lCAOife-rdyJHIZ3qB34ui1qzIs_Rg3wLWmOfwVmgvu3qO2huRmOYiWSgDUz2ry551fIwTP1bU4bfy-nI7-0iWs_MYkTqxt4k_WyDzUm9CZ57deCbpgK__j6k8P9XK5bIrEYpjb7BLXtKrS7aUw9KfXAxjWHISX98wcrUk"
                            alt="Hổ Phách Artisanal Honey"
                            sx={{
                                position: "absolute",
                                right: -80,
                                bottom: 0,
                                width: "75%",
                                height: 400,
                                objectFit: "cover",
                                borderRadius: "48px 0 0 0",
                                opacity: 0.9,
                            }}
                        />
                        {/* Decorative elements */}
                        <Box className="honey-gradient" sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, opacity: 0.2 }} />
                    </Grid>

                    {/* Right Side: Login Form */}
                    <Grid size={{ xs: 12, lg: 6 }} sx={{ p: { xs: 4, lg: 8 }, display: "flex", flexDirection: "column", justifyContent: "center", bgcolor: "surfaceContainerLowest" }}>
                        <Box sx={{ mb: 5, textAlign: { xs: "center", lg: "left" } }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}>
                                Chào mừng trở lại
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Vui lòng nhập thông tin để tiếp tục hành trình ẩm thực.
                            </Typography>
                        </Box>

                        <Box component="form" onSubmit={handleSignin} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            {error && (
                                <Alert severity="error" sx={{ borderRadius: 2 }}>
                                    {error}
                                </Alert>
                            )}

                            <Box>
                                <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.1em", mb: 1, display: "block" }}>
                                    Email hoặc Số điện thoại
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="example@email.com"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Icon.MailIcon sx={{ color: "outline" }} />
                                            </InputAdornment>
                                        ),
                                        sx: { borderRadius: 3, bgcolor: "surfaceContainerLow", "& fieldset": { border: "none" }, py: 1 },
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.1em", mb: 1, display: "block" }}>
                                    Mật khẩu
                                </Typography>
                                <TextField
                                    fullWidth
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Icon.LockIcon sx={{ color: "outline" }} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                    <Icon.Visibility sx={{ color: "outline" }} />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        sx: { borderRadius: 3, bgcolor: "surfaceContainerLow", "& fieldset": { border: "none" }, py: 1 },
                                    }}
                                />
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <FormControlLabel
                                    control={<Checkbox size="small" sx={{ color: "outlineVariant", "&.Mui-checked": { color: "primary.main" } }} />}
                                    label={<Typography variant="body2" sx={{ color: "text.secondary" }}>Ghi nhớ đăng nhập</Typography>}
                                />
                                <Link href="#" variant="body2" sx={{ color: "primary.main", fontWeight: 500, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                                    Quên mật khẩu?
                                </Link>
                            </Box>

                            <Button
                                type="submit"
                                variant="contained"
                                disabled={loading}
                                className="honey-gradient"
                                sx={{
                                    py: 1.5,
                                    borderRadius: 3,
                                    boxShadow: "0 4px 14px 0 rgba(120, 89, 0, 0.39)",
                                    fontWeight: 700,
                                    fontSize: "1rem",
                                    textTransform: "none",
                                    "&:hover": { transform: "scale(1.02)", transition: "0.2s" },
                                }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : "Đăng nhập"}
                            </Button>
                        </Box>

                        <Box sx={{ my: 4, position: "relative" }}>
                            <Divider sx={{ borderColor: "surfaceContainerHigh" }} />
                            <Typography
                                variant="caption"
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    bgcolor: "surfaceContainerLowest",
                                    px: 2,
                                    color: "text.secondary",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.15em",
                                    fontSize: "0.625rem",
                                }}
                            >
                                Hoặc tiếp tục với
                            </Typography>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6 }}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    startIcon={<Box component="img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYg3H1GuMDdsyF690IuUwXIsAa8skGuP3oDYw6AZqI4DrOlHnIJU4KZEeNuEhY6bLqlDYb7xlOPheI05bt5flKpqiwtbZyLF8bBFsX9piwO71wq0ottv2XUY7HZMIvGCfwpYM-jfeNdtx6hXTkxrLkg_LnFb4vf66SJaR098zgLy-5HYUd59jW7Xm6Rb_wJ3JfkHxoWJnbR7YasZuLQDWNXN9Zeye_hT7qNhmWhpa-xEgtEgYqzGKkYrierltlzTsK-bFkqWX2Y0c" sx={{ width: 20, height: 20 }} />}
                                    sx={{
                                        py: 1.5,
                                        borderRadius: 3,
                                        borderColor: "surfaceContainerHigh",
                                        color: "text.primary",
                                        textTransform: "none",
                                        fontWeight: 500,
                                        "&:hover": { bgcolor: "surfaceContainerHigh", borderColor: "surfaceContainerHigh" },
                                    }}
                                >
                                    Google
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    startIcon={<Icon.FacebookIcon sx={{ color: "#1877F2" }} />}
                                    sx={{
                                        py: 1.5,
                                        borderRadius: 3,
                                        borderColor: "surfaceContainerHigh",
                                        color: "text.primary",
                                        textTransform: "none",
                                        fontWeight: 500,
                                        "&:hover": { bgcolor: "surfaceContainerHigh", borderColor: "surfaceContainerHigh" },
                                    }}
                                >
                                    Facebook
                                </Button>
                            </Grid>
                        </Grid>

                        <Typography variant="body2" sx={{ mt: 5, textAlign: "center", color: "text.secondary" }} >
                            Chưa có tài khoản?{" "}
                            <Link component={NavLink} to="/auth/register" sx={{ color: "primary.main", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                                Đăng ký ngay
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
