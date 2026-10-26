import {
  Box,
  Container,
  Typography,
  Chip,
  Divider,
  CircularProgress,
  Button,
  Card,
  CardContent,
  Tab,
  Tabs,
  Alert,
} from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { orderService } from "../../services";
import type { Order } from "../../services";
import { useAuth } from "../../context/AuthContext";
import { Icon } from "../../assets/icon";
import matong from "../../assets/images/products/matong.png";

export const Orders = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const fetchOrders = async () => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await orderService.getOrders();
      setOrders(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error("Error fetching orders:", err);
      setError("Không thể tải danh sách đơn hàng. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [isAuthenticated]);

  const filteredOrders = useMemo(() => {
    if (activeTab === "all") return orders;
    return orders.filter((order) => {
      const status = (order.status || "").toLowerCase();
      if (activeTab === "processing") return status === "processing" || status === "pending";
      if (activeTab === "completed") return status === "completed" || status === "success";
      if (activeTab === "cancelled") return status === "cancelled";
      return true;
    });
  }, [orders, activeTab]);

  const getStatusChip = (status?: string) => {
    const s = (status || "").toLowerCase();
    switch (s) {
      case "processing":
      case "pending":
        return <Chip label="Đang xử lý" color="warning" size="small" sx={{ fontWeight: 700 }} />;
      case "shipping":
        return <Chip label="Đang giao hàng" color="info" size="small" sx={{ fontWeight: 700 }} />;
      case "completed":
      case "success":
        return <Chip label="Đã hoàn thành" color="success" size="small" sx={{ fontWeight: 700 }} />;
      case "cancelled":
        return <Chip label="Đã hủy" color="error" size="small" sx={{ fontWeight: 700 }} />;
      default:
        return <Chip label={status || "Đang xử lý"} variant="outlined" size="small" sx={{ fontWeight: 600 }} />;
    }
  };

  const formatPrice = (val?: number | string) => {
    if (val === undefined || val === null) return "0đ";
    const num = typeof val === "number" ? val : parseFloat(val);
    return isNaN(num) ? "0đ" : `${num.toLocaleString("vi-VN")}đ`;
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "Gần đây";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  const getPaymentMethodLabel = (pm: any) => {
    if (!pm) return "Thanh toán khi nhận hàng (COD)";
    if (Array.isArray(pm) && pm.length > 0) {
      const m = pm[0].method;
      if (m === "cod") return "Thanh toán khi nhận hàng (COD)";
      if (m === "bank-transfer") return "Chuyển khoản ngân hàng";
      if (m === "credit-card") return "Thẻ tín dụng / ghi nợ";
      return m;
    }
    if (typeof pm === "string") {
      if (pm === "cod") return "Thanh toán khi nhận hàng (COD)";
      if (pm === "bank-transfer") return "Chuyển khoản ngân hàng";
      if (pm === "credit-card") return "Thẻ tín dụng / ghi nợ";
      return pm;
    }
    return "Thanh toán khi nhận hàng (COD)";
  };

  if (!isAuthenticated) {
    return (
      <Container maxWidth="md" sx={{ pt: { xs: 20, md: 24 }, pb: 12, textAlign: "center" }}>
        <Box
          sx={{
            py: 8,
            px: 4,
            bgcolor: "surfaceContainerLow",
            borderRadius: 4,
            boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
          }}
        >
          <Icon.ReceiptLongIcon sx={{ fontSize: "4rem", color: "primary.main", mb: 2, opacity: 0.8 }} />
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, fontFamily: '"Be Vietnam Pro", sans-serif' }}>
            Đơn hàng của bạn
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, maxWidth: 450, mx: "auto" }}>
            Vui lòng đăng nhập tài khoản để theo dõi lịch sử và trạng thái các đơn hàng đã đặt.
          </Typography>
          <Button
            component={NavLink}
            to="/auth/login"
            variant="contained"
            className="honey-gradient"
            sx={{ borderRadius: 3, px: 4, py: 1.5, fontWeight: 700 }}
          >
            Đăng nhập ngay
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ pt: { xs: 20, md: 24 }, pb: 12 }}>
      {/* Page Header */}
      <Box sx={{ mb: 4, display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, gap: 2 }}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 800,
              mb: 1,
              fontFamily: '"Be Vietnam Pro", sans-serif',
            }}
          >
            Đơn hàng của tôi
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Theo dõi tiến trình đóng gói và giao nhận các đặc sản Bắc Giang.
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<Icon.ArrowBackIcon />}
          onClick={() => navigate("/products")}
          sx={{
            borderRadius: 3,
            borderColor: "primary.main",
            color: "primary.main",
            fontWeight: 600,
            "&:hover": { borderColor: "primary.dark", bgcolor: "surfaceContainerLow" },
          }}
        >
          Tiếp tục mua sắm
        </Button>
      </Box>

      {/* Tabs Filter */}
      <Box sx={{ mb: 4, borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={(_, val) => setActiveTab(val)}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root": {
              fontWeight: 700,
              fontSize: "0.95rem",
              textTransform: "none",
              minHeight: 48,
            },
          }}
        >
          <Tab value="all" label={`Tất cả (${orders.length})`} />
          <Tab
            value="processing"
            label={`Đang xử lý (${orders.filter((o) => (o.status || "").toLowerCase() === "processing" || (o.status || "").toLowerCase() === "pending").length})`}
          />
          <Tab
            value="completed"
            label={`Hoàn thành (${orders.filter((o) => (o.status || "").toLowerCase() === "completed" || (o.status || "").toLowerCase() === "success").length})`}
          />
        </Tabs>
      </Box>

      {/* State Handlers */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 12, flexDirection: "column", alignItems: "center", gap: 2 }}>
          <CircularProgress color="primary" />
          <Typography variant="body2" color="text.secondary">
            Đang tải danh sách đơn hàng...
          </Typography>
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ mb: 4, borderRadius: 3 }}>
          {error}
        </Alert>
      ) : filteredOrders.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            py: 10,
            px: 4,
            bgcolor: "surfaceContainerLow",
            borderRadius: 4,
            maxWidth: 550,
            mx: "auto",
          }}
        >
          <Icon.ShoppingBasketIcon sx={{ fontSize: "4.5rem", color: "primary.main", mb: 2, opacity: 0.6 }} />
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Chưa có đơn hàng nào
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            Bạn chưa có đơn hàng nào trong mục này. Hãy khám phá và đặt mua những đặc sản thơm ngon từ Lục Ngạn ngay hôm nay!
          </Typography>
          <Button
            component={NavLink}
            to="/products"
            variant="contained"
            className="honey-gradient"
            sx={{ borderRadius: 3, px: 4, py: 1.4, fontWeight: 700 }}
          >
            Khám phá đặc sản ngay
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {filteredOrders.map((order) => {
            const orderId = order.order_id || order.id;
            const items = order.order_detail || order.items || [];
            const totalAmount = order.total_amount ?? order.total ?? 0;
            const address = order.address?.full_address || order.shipping_address;

            return (
              <Card
                key={orderId}
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  bgcolor: "surfaceContainerLowest",
                  borderColor: "rgba(0,0,0,0.08)",
                  boxShadow: "0 4px 16px rgba(44, 22, 14, 0.04)",
                  overflow: "hidden",
                  transition: "all 0.2s",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(44, 22, 14, 0.08)",
                  },
                }}
              >
                {/* Order Top Bar */}
                <Box
                  sx={{
                    px: { xs: 2.5, md: 4 },
                    py: 2,
                    bgcolor: "surfaceContainerLow",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "primary.main" }}>
                      Mã đơn: #{orderId}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Đặt lúc: {formatDate(order.created_at || order.createdAt)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    {getStatusChip(order.status)}
                  </Box>
                </Box>

                <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                  {/* Delivery & Payment Info */}
                  <Box
                    sx={{
                      mb: 3,
                      p: 2,
                      bgcolor: "surfaceContainerLow",
                      borderRadius: 2.5,
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: { xs: 1.5, md: 4 },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <Icon.LocationOnIcon sx={{ color: "primary.main", mt: 0.3 }} />
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", textTransform: "uppercase" }}>
                          Địa chỉ nhận hàng
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {address || "Địa chỉ mặc định"}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <Icon.CreditCardIcon sx={{ color: "primary.main", mt: 0.3 }} />
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", textTransform: "uppercase" }}>
                          Phương thức thanh toán
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {getPaymentMethodLabel(order.payment_method)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Order Items */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {items.map((item: any, idx: number) => {
                      const prodName =
                        item.product?.name ||
                        item.Product?.name ||
                        item.product?.title ||
                        item.Product?.title ||
                        `Sản phẩm #${item.product_id || idx + 1}`;
                      const price = item.unit_price ?? item.price ?? 0;
                      const qty = item.quantity || 1;
                      const img =
                        item.product?.image?.[0]?.url ||
                        item.Product?.image?.[0]?.url ||
                        item.product?.image ||
                        item.Product?.image ||
                        matong;

                      return (
                        <Box
                          key={item.order_detail_id || item.id || idx}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            py: 1.5,
                            borderBottom: idx < items.length - 1 ? "1px dashed rgba(0,0,0,0.08)" : "none",
                            gap: 2,
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Box
                              component="img"
                              src={typeof img === "string" ? img : matong}
                              alt={prodName}
                              onError={(e: any) => {
                                e.currentTarget.src = matong;
                              }}
                              sx={{
                                width: 56,
                                height: 56,
                                objectFit: "cover",
                                borderRadius: 2,
                                bgcolor: "surfaceContainerLow",
                              }}
                            />
                            <Box>
                              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                                {prodName}
                              </Typography>
                              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                Số lượng: {qty} x {formatPrice(price)}
                              </Typography>
                            </Box>
                          </Box>

                          <Typography variant="body1" sx={{ fontWeight: 700, color: "primary.main" }}>
                            {formatPrice(Number(price) * qty)}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  {/* Order Total Footer */}
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Tổng số lượng: {items.reduce((s: number, i: any) => s + (i.quantity || 1), 0)} sản phẩm
                    </Typography>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="caption" sx={{ color: "text.secondary", display: "block" }}>
                        Tổng thanh toán
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main" }}>
                        {formatPrice(totalAmount)}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      )}
    </Container>
  );
};
