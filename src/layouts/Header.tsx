import { Box, Typography, Container, IconButton, Badge, Menu, MenuItem, Tooltip } from "@mui/material";
import { Icon } from "../assets/icon";
import logo from "../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const menus = [
  { name: "Trang chủ", path: "/" },
  { name: "Sản phẩm", path: "/products" },
  { name: "Về chúng tôi", path: "/about" },
  { name: "Liên hệ", path: "/contact" },
];

export const HeaderApp = () => {
  const { isAuthenticated, user, logout, cartCount } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleCloseMenu();
    await logout();
    navigate("/auth/login");
  };

  return (
    <Box
      component="header"
      className="glass-nav"
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            px: { xs: 2, md: 8 },
          }}
        >
          <Box
            component={NavLink}
            to="/"
            sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <img src={logo} alt="logo" width={85} height={85} />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {menus.map((menu) => {
              return (
                <Typography
                  component={NavLink}
                  key={menu.path}
                  to={menu.path}
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    textDecoration: "none",
                    pb: 0.5,
                    "&.active": {
                      borderBottom: "2px solid",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  {menu.name}
                </Typography>
              );
            })}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isAuthenticated ? (
              <>
                <Tooltip title={user?.email || "Tài khoản"}>
                  <IconButton
                    onClick={handleOpenMenu}
                    color="primary"
                    sx={{
                      "&:hover": { bgcolor: "surfaceContainerHighest" },
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    <Icon.AccountCircleIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  PaperProps={{
                    sx: { borderRadius: 3, boxShadow: "0 8px 24px rgba(0,0,0,0.12)", minWidth: 200, py: 1 },
                  }}
                >
                  <Box sx={{ px: 2, py: 1, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "primary.main" }}>
                      {user?.name || "Khách hàng"}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary", wordBreak: "break-all" }}>
                      {user?.email}
                    </Typography>
                  </Box>
                  <MenuItem
                    onClick={() => {
                      handleCloseMenu();
                      navigate("/orders");
                    }}
                    sx={{ gap: 1.5, py: 1.2, fontWeight: 600, mt: 0.5 }}
                  >
                    <Icon.ReceiptLongIcon sx={{ fontSize: "1.2rem", color: "primary.main" }} />
                    Đơn hàng của tôi
                  </MenuItem>
                  <MenuItem
                    onClick={handleLogout}
                    sx={{ gap: 1.5, py: 1.2, color: "error.main", fontWeight: 600 }}
                  >
                    <Icon.CloseIcon sx={{ fontSize: "1.2rem" }} />
                    Đăng xuất
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Tooltip title="Đăng nhập">
                <IconButton
                  component={NavLink}
                  to="/auth/login"
                  color="primary"
                  sx={{ "&:hover": { bgcolor: "surfaceContainerHighest" } }}
                >
                  <Icon.AccountCircleIcon />
                </IconButton>
              </Tooltip>
            )}

            <Tooltip title="Giỏ hàng">
              <IconButton
                component={NavLink}
                to="/carts"
                color="primary"
                sx={{ "&:hover": { bgcolor: "surfaceContainerHighest" } }}
              >
                <Badge badgeContent={cartCount} color="error">
                  <Icon.ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <IconButton
              color="primary"
              sx={{
                display: { xs: "flex", md: "none" },
                "&:hover": { bgcolor: "surfaceContainerHighest" },
              }}
            >
              <Icon.MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
