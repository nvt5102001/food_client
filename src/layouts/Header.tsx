import { Box, Typography, Container, IconButton } from "@mui/material";
import { Icon } from "../assets/icon";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const menus = [
  { name: "Trang chủ", path: "/" },
  { name: "Sản phẩm", path: "/products" },
  { name: "Về chúng tôi", path: "/about" },
  { name: "Liên hệ", path: "/contact" },
];

export const HeaderApp = () => {
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
            px: 8,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
            <IconButton
              color="primary"
              sx={{ "&:hover": { bgcolor: "surfaceContainerHighest" } }}
            >
              <Icon.AccountCircleIcon />
            </IconButton>
            <IconButton
              component={NavLink}
              to="/carts"
              color="primary"
              sx={{ "&:hover": { bgcolor: "surfaceContainerHighest" } }}
            >
              <Icon.ShoppingCartIcon />
            </IconButton>
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
