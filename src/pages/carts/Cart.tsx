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
  CircularProgress,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { Icon } from "../../assets/icon";
import { useEffect, useState, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { cartService, orderService, productService } from "../../services";
import type { CartItem } from "../../services";
import { useAuth } from "../../context/AuthContext";
import matong from "../../assets/images/products/matong.png";

export const Cart = () => {
  const { isAuthenticated, user, refreshCartCount } = useAuth();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [paymentMethod, setPaymentMethod] = useState<string>("cod");
  const [processingOrder, setProcessingOrder] = useState<boolean>(false);
  const [orderSuccessDialog, setOrderSuccessDialog] = useState<boolean>(false);

  const [recipientName, setRecipientName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [shippingAddress, setShippingAddress] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const loadCart = async () => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const data = await cartService.getCart();
      setCartItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error loading cart:", err);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, [isAuthenticated]);

  useEffect(() => {
    if (user) {
      if (user.name && !recipientName) {
        setRecipientName(user.name);
      }
      const uPhone = user.phone || (user as any).phone_number;
      if (uPhone && !phone) {
        setPhone(uPhone);
      }
    }
  }, [user]);

  const getItemPrice = (item: CartItem): number => {
    const rawPrice = item.Product?.price ?? item.product?.price ?? item.price ?? 0;
    const num = typeof rawPrice === "number" ? rawPrice : parseFloat(rawPrice as string);
    return isNaN(num) ? 0 : num;
  };

  const getItemTitle = (item: CartItem): string => {
    return item.Product?.name || item.product?.name || item.Product?.title || item.product?.title || item.title || "Sản phẩm Bắc Giang";
  };

  const getItemImage = (item: CartItem): string => {
    const img = item.Product?.image || item.product?.image || item.image;
    return productService.getImageUrl(img, matong);
  };

  const getItemId = (item: CartItem, index: number): number | string => {
    return item.id || item.cart_id || index;
  };

  // Calculations
  const shipping = cartItems.length > 0 ? 30000 : 0;
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + getItemPrice(item) * (item.quantity || 1);
    }, 0);
  }, [cartItems]);

  const total = subtotal + shipping;

  const handleUpdateQuantity = async (item: CartItem, newQty: number) => {
    if (newQty < 1) {
      handleRemoveItem(item);
      return;
    }

    const itemId = item.id || item.cart_id;
    if (!itemId) return;

    // Optimistic UI update
    setCartItems((prev) =>
      prev.map((i) => (i.id === itemId || i.cart_id === itemId ? { ...i, quantity: newQty } : i))
    );

    try {
      await cartService.updateCartItem(itemId, { quantity: newQty });
      await refreshCartCount();
    } catch (err) {
      console.error("Error updating cart quantity:", err);
      setSnackbar({
        open: true,
        message: "Không thể cập nhật số lượng. Vui lòng thử lại.",
        severity: "error",
      });
      loadCart();
    }
  };

  const handleRemoveItem = async (item: CartItem) => {
    const itemId = item.id || item.cart_id;
    if (!itemId) return;

    try {
      await cartService.removeFromCart(itemId);
      setCartItems((prev) => prev.filter((i) => i.id !== itemId && i.cart_id !== itemId));
      await refreshCartCount();
      setSnackbar({
        open: true,
        message: "Đã xóa sản phẩm khỏi giỏ hàng.",
        severity: "info",
      });
    } catch (err) {
      console.error("Error removing cart item:", err);
      setSnackbar({
        open: true,
        message: "Không thể xóa sản phẩm. Vui lòng thử lại.",
        severity: "error",
      });
    }
  };

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }

    if (cartItems.length === 0) {
      setSnackbar({
        open: true,
        message: "Giỏ hàng của bạn đang trống.",
        severity: "info",
      });
      return;
    }

    if (!recipientName.trim()) {
      setSnackbar({
        open: true,
        message: "Vui lòng nhập họ và tên người nhận hàng.",
        severity: "error",
      });
      return;
    }

    const cleanPhone = phone.trim().replace(/\s+/g, "");
    if (!cleanPhone || cleanPhone.length < 9) {
      setSnackbar({
        open: true,
        message: "Vui lòng nhập số điện thoại người nhận hợp lệ (tối thiểu 9 số).",
        severity: "error",
      });
      return;
    }

    if (!shippingAddress.trim()) {
      setSnackbar({
        open: true,
        message: "Vui lòng nhập địa chỉ nhận hàng chi tiết.",
        severity: "error",
      });
      return;
    }

    setProcessingOrder(true);
    try {
      const orderPayload = {
        payment_method: paymentMethod,
        total,
        recipient_name: recipientName.trim(),
        phone: cleanPhone,
        recipient_phone: cleanPhone,
        shipping_address: shippingAddress.trim(),
        notes: notes.trim(),
        items: cartItems.map((item) => ({
          product_id: Number(item.product_id || item.productId || item.Product?.product_id || item.Product?.id || 1),
          quantity: item.quantity || 1,
          price: getItemPrice(item),
        })),
      };

      await orderService.createOrder(orderPayload);
      setOrderSuccessDialog(true);
      // Clear cart
      setCartItems([]);
      await refreshCartCount();
    } catch (err) {
      console.error("Checkout error:", err);
      setSnackbar({
        open: true,
        message: "Đặt hàng không thành công. Vui lòng thử lại.",
        severity: "error",
      });
    } finally {
      setProcessingOrder(false);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ pt: { xs: 20, md: 24 }, pb: 12 }}>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, mb: 1, fontFamily: '"Be Vietnam Pro", sans-serif' }}
        >
          Giỏ hàng
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Kiểm tra lại những tinh hoa bạn đã chọn từ Bắc Giang.
        </Typography>
      </Box>

      {!isAuthenticated ? (
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            px: 4,
            bgcolor: "surfaceContainerLow",
            borderRadius: 4,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Vui lòng đăng nhập
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            Đăng nhập để xem các sản phẩm trong giỏ hàng và đồng bộ trên mọi thiết bị.
          </Typography>
          <Button
            component={NavLink}
            to="/auth/login"
            variant="contained"
            className="honey-gradient"
            sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 700 }}
          >
            Đăng nhập ngay
          </Button>
        </Box>
      ) : loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 12 }}>
          <CircularProgress color="primary" />
        </Box>
      ) : cartItems.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            py: 10,
            bgcolor: "surfaceContainerLow",
            borderRadius: 4,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Giỏ hàng của bạn đang trống
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            Hãy dạo một vòng và khám phá các đặc sản hảo hạng của chúng tôi nhé!
          </Typography>
          <Button
            component={NavLink}
            to="/products"
            variant="contained"
            className="honey-gradient"
            sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 700 }}
          >
            Xem danh mục sản phẩm
          </Button>
        </Box>
      ) : (
        <Grid container spacing={6}>
          {/* Cart Items List */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {cartItems.map((item, index) => {
                const price = getItemPrice(item);
                const title = getItemTitle(item);
                const image = getItemImage(item);
                const id = getItemId(item, index);

                return (
                  <Box
                    key={id}
                    sx={{
                      bgcolor: "surfaceContainerLow",
                      p: 3,
                      borderRadius: 4,
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 3,
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.005)" },
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
                        src={image}
                        alt={title}
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
                            {title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "tertiary.main", fontWeight: 500 }}
                          >
                            Nguồn gốc: Bắc Giang • Thủ công
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
                          {(price * (item.quantity || 1)).toLocaleString("vi-VN")}đ
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
                          <IconButton
                            size="small"
                            onClick={() => handleUpdateQuantity(item, (item.quantity || 1) - 1)}
                            sx={{ color: "primary.main" }}
                          >
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
                            {item.quantity || 1}
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={() => handleUpdateQuantity(item, (item.quantity || 1) + 1)}
                            sx={{ color: "primary.main" }}
                          >
                            <Icon.AddIcon sx={{ fontSize: 18 }} />
                          </IconButton>
                        </Box>

                        <Button
                          startIcon={<Icon.DeleteOutlineIcon />}
                          onClick={() => handleRemoveItem(item)}
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
                );
              })}
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
                    <Typography fontWeight={600}>
                      {subtotal.toLocaleString("vi-VN")}đ
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography color="text.secondary">Phí vận chuyển</Typography>
                    <Typography fontWeight={600}>
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

              {/* Recipient / Shipping Information */}
              <Box sx={{ bgcolor: "surfaceContainerLow", p: 3, borderRadius: 4, display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Icon.LocationOnIcon sx={{ color: "primary.main" }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
                    Thông tin nhận hàng
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: "text.secondary", mt: -1 }}>
                  Vui lòng cung cấp chính xác để đơn hàng được giao nhanh nhất.
                </Typography>

                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "text.secondary", mb: 0.5, display: "block" }}>
                    Họ và tên người nhận *
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    slotProps={{
                      input: {
                        startAdornment: <Icon.PersonIcon sx={{ color: "outline", mr: 1, fontSize: "1.2rem" }} />,
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "surfaceContainerLowest",
                        borderRadius: 2,
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "text.secondary", mb: 0.5, display: "block" }}>
                    Số điện thoại nhận hàng *
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    type="tel"
                    placeholder="Ví dụ: 0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    slotProps={{
                      input: {
                        startAdornment: <Icon.LocalPhoneIcon sx={{ color: "outline", mr: 1, fontSize: "1.2rem" }} />,
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "surfaceContainerLowest",
                        borderRadius: 2,
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "text.secondary", mb: 0.5, display: "block" }}>
                    Địa chỉ nhận hàng chi tiết *
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    placeholder="Số nhà, tên đường, thôn/xã, huyện/tỉnh..."
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    slotProps={{
                      input: {
                        startAdornment: <Icon.LocationOnIcon sx={{ color: "outline", mr: 1, fontSize: "1.2rem", alignSelf: "flex-start", mt: 0.5 }} />,
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "surfaceContainerLowest",
                        borderRadius: 2,
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "text.secondary", mb: 0.5, display: "block" }}>
                    Ghi chú đơn hàng (nếu có)
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Giao giờ hành chính, gọi trước khi giao..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "surfaceContainerLowest",
                        borderRadius: 2,
                      },
                    }}
                  />
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
                <RadioGroup
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                  >
                    {[
                      {
                        value: "cod",
                        label: "Thanh toán khi nhận hàng - COD",
                        icon: <Icon.LocalShippingIcon />,
                      },
                      {
                        value: "bank-transfer",
                        label: "Chuyển khoản ngân hàng",
                        icon: <Icon.AccountBalanceIcon />,
                      },
                      {
                        value: "credit-card",
                        label: "Thẻ tín dụng / ghi nợ",
                        icon: <Icon.CreditCardIcon />,
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
                  disabled={processingOrder}
                  onClick={handleCheckout}
                  className="honey-gradient"
                  endIcon={processingOrder ? <CircularProgress size={20} color="inherit" /> : <Icon.ArrowForwardIcon />}
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
                  {processingOrder ? "Đang xử lý đơn..." : "Thanh toán ngay"}
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
      )}

      {/* Success Dialog */}
      <Dialog
        open={orderSuccessDialog}
        onClose={() => setOrderSuccessDialog(false)}
        PaperProps={{ sx: { borderRadius: 4, p: 2, maxWidth: 480 } }}
      >
        <DialogTitle sx={{ fontWeight: 800, textAlign: "center", color: "primary.main", fontSize: "1.5rem" }}>
          Đặt hàng thành công! 🎉
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            Cảm ơn bạn đã lựa chọn những tinh hoa nông sản Bắc Giang từ Hổ Phách Artisanal. Đơn hàng của bạn đã được ghi nhận vào hệ thống!
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 2, gap: 1.5, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            className="honey-gradient"
            onClick={() => {
              setOrderSuccessDialog(false);
              navigate("/orders");
            }}
            sx={{ borderRadius: 3, px: 3, py: 1.2, fontWeight: 700 }}
          >
            Xem đơn hàng của tôi
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setOrderSuccessDialog(false);
              navigate("/products");
            }}
            sx={{
              borderRadius: 3,
              px: 3,
              py: 1.2,
              fontWeight: 600,
              borderColor: "primary.main",
              color: "primary.main",
            }}
          >
            Tiếp tục mua sắm
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: "100%", borderRadius: 2 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};
