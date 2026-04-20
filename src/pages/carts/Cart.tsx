import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { Icon } from "../../assets/icon";

const cartItems = [
  {
    id: 1,
    title: "Mật Ong Rừng Hổ Phách",
    origin: "Bắc Giang • 500ml",
    price: 580000,
    quantity: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf8dMqOfcwHm36VIeH4Y6l8fquPBKjJKeKd7ErivWLbn2dmzAQFNww4P1X5ptw9oSIgVe5GUaMZMF_7EIn4tu0KguM-wByPA6CsfvbvyaSSxu-r1Obg3rmoO3uLaRdC3A5O--k39vpRmy8XCjCe4BTFGUznEhGbqSB413GvuiqS4eafRNqnURiagdq6FeiRS4Pk7k4ViYvPf23Vaf472i2B5W4HtHgZu8y1f_wI3V6JZ8bd13I32zaBs_5SbC1pANAEDt0kcCOscc",
  },
  {
    id: 2,
    title: "Mì Chũ Đặc Sản",
    origin: "Thủ công • 1kg",
    price: 120000,
    quantity: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPSuNyXD5ExFWTZ4aDy_Cl0iJCyhO76NGmBwVcV0ogr8xUuzuDwTjhOaG0UhOpqeUm4G5RNhTms5mlqryejyJKfc4hzJ3ESPm64a8l9VYnMCYQVWizoMmDbp9P1yRujOKADhPUvb_jCHunXzqAazJifEFfDLiML3F-fpna6magxhuxBqM5Hey25URlJXfCZYrr1mf8FsCv5j8E184e_lGfUwkJafN1iRnWVcugdsZKQDm2YFkxjAetYJHOdOH8xqeOmJP7j04Uk4w",
  },
];

export const Cart = () => {
  const subtotal = 820000;
  const shipping = 35000;
  const total = subtotal + shipping;

  return (
    <Container maxWidth="xl" sx={{ pt: { xs: 20, md: 24 }, pb: 12 }}>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, mb: 1 }}
        >
          Giỏ hàng
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Kiểm tra lại những tinh hoa bạn đã chọn từ Bắc Giang.
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Cart Items List */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {cartItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  bgcolor: "surfaceContainerLow",
                  p: 3,
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 3,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.01)" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: 120 },
                    height: 120,
                    borderRadius: 2,
                    overflow: "hidden",
                    bgcolor: "surfaceContainerHighest",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "tertiary.main", fontWeight: 500 }}
                      >
                        Nguồn gốc: {item.origin}
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {item.price.toLocaleString("vi-VN")}đ
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "surfaceContainerHighest",
                        borderRadius: 2,
                        px: 1,
                        py: 0.5,
                      }}
                    >
                      <IconButton size="small" sx={{ color: "primary.main" }}>
                        <Icon.RemoveIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                      <Typography
                        sx={{
                          mx: 2,
                          fontWeight: 600,
                          minWidth: 20,
                          textAlign: "center",
                        }}
                      >
                        {item.quantity}
                      </Typography>
                      <IconButton size="small" sx={{ color: "primary.main" }}>
                        <Icon.AddIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                    </Box>

                    <Button
                      startIcon={<Icon.DeleteOutlineIcon />}
                      sx={{
                        color: "text.secondary",
                        textTransform: "none",
                        fontWeight: 500,
                        "&:hover": {
                          color: "error.main",
                          bgcolor: "transparent",
                        },
                      }}
                    >
                      Xóa
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Checkout Sidebar */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {/* Order Summary */}
            <Box
              sx={{ bgcolor: "surfaceContainerHigh", p: 4, borderRadius: 4 }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                Tóm tắt đơn hàng
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Tạm tính</Typography>
                  <Typography fontWeight={500}>
                    {subtotal.toLocaleString("vi-VN")}đ
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Phí vận chuyển</Typography>
                  <Typography fontWeight={500}>
                    {shipping.toLocaleString("vi-VN")}đ
                  </Typography>
                </Box>
                <Divider sx={{ my: 1, borderColor: "rgba(0,0,0,0.05)" }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Tổng cộng
                  </Typography>
                  <Typography
                    variant="h5"
                    color="primary.main"
                    fontWeight={800}
                  >
                    {total.toLocaleString("vi-VN")}đ
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Payment Methods */}
            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 700, px: 1, color: "primary.main" }}
              >
                Phương thức thanh toán
              </Typography>
              <RadioGroup defaultValue="credit-card">
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  {[
                    {
                      value: "credit-card",
                      label: "Thẻ tín dụng/ghi nợ",
                      icon: <Icon.CreditCardIcon />,
                    },
                    {
                      value: "bank-transfer",
                      label: "Chuyển khoản ngân hàng",
                      icon: <Icon.AccountBalanceIcon />,
                    },
                    {
                      value: "cod",
                      label: "Thanh toán khi nhận hàng - COD",
                      icon: <Icon.LocalShippingIcon />,
                    },
                  ].map((method) => (
                    <Box
                      key={method.value}
                      sx={{
                        bgcolor: "surfaceContainerLow",
                        borderRadius: 3,
                        px: 2,
                        py: 1,
                        display: "flex",
                        alignItems: "center",
                        "&:hover": { bgcolor: "surfaceContainer" },
                      }}
                    >
                      <FormControlLabel
                        value={method.value}
                        control={<Radio color="primary" />}
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                              ml: 1,
                            }}
                          >
                            <Box
                              sx={{ color: "primary.main", display: "flex" }}
                            >
                              {method.icon}
                            </Box>
                            <Typography fontWeight={500}>
                              {method.label}
                            </Typography>
                          </Box>
                        }
                        sx={{ width: "100%", m: 0 }}
                      />
                    </Box>
                  ))}
                </Box>
              </RadioGroup>
            </Box>

            {/* Checkout Button */}
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                fullWidth
                className="honey-gradient"
                endIcon={<Icon.ArrowForwardIcon />}
                sx={{
                  py: 2,
                  borderRadius: 3,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  boxShadow: "0 8px 16px rgba(120, 89, 0, 0.2)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 20px rgba(120, 89, 0, 0.3)",
                  },
                  transition: "all 0.3s",
                }}
              >
                Thanh toán ngay
              </Button>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 2,
                  color: "text.secondary",
                  px: 2,
                  lineHeight: 1.5,
                }}
              >
                Bằng cách nhấn thanh toán, bạn đồng ý với các Điều khoản & Chính
                sách vận chuyển của Hổ Phách Artisanal.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
