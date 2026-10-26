import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Slider,
  Button,
  Select,
  MenuItem,
  FormControl,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import michu from "../../assets/images/products/michu.png";
import matong from "../../assets/images/products/matong.png";
import { productService, cartService } from "../../services";
import type { Product } from "../../services";
import { useAuth } from "../../context/AuthContext";

const fallbackProducts: Product[] = [
  {
    product_id: 1,
    name: "Mì gạo Chũ",
    price: 70000,
    image: "https://s3.evgcloud.net/dacsantuhuong/michu.png",
    description: "Sản xuất từ gạo tẻ ngon nguyên chất, không phụ gia.",
    unit: "1kg",
    badge: { label: "Best Seller", type: "bestseller" as const },
  },
  {
    product_id: 2,
    name: "Mật ong rừng Sơn Động",
    price: 50000,
    image: "https://s3.evgcloud.net/dacsantuhuong/matong.png",
    description: "Mật ong tự nhiên 100% từ rừng nguyên sinh, hương vị đậm đà.",
    unit: "500ml",
    badge: { label: "Best Seller", type: "bestseller" as const },
  },
];

export const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [addingId, setAddingId] = useState<string | number | null>(null);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info";
  }>({
    open: false,
    message: "",
    severity: "success",
  });
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000000]);
  const [sortBy, setSortBy] = useState<string>("featured");

  const { isAuthenticated, refreshCartCount } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await productService.getProducts();
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          setProducts(fallbackProducts);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (product: Product) => {
    if (!isAuthenticated) {
      setSnackbar({
        open: true,
        message: "Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.",
        severity: "info",
      });
      setTimeout(() => navigate("/auth/login"), 1500);
      return;
    }

    const prodId = Number(product.product_id || product.id);
    setAddingId(prodId);

    try {
      await cartService.addToCart({
        product_id: prodId,
        productId: prodId,
        quantity: 1,
      });
      await refreshCartCount();
      setSnackbar({
        open: true,
        message: `Đã thêm "${product.name || product.title}" vào giỏ hàng!`,
        severity: "success",
      });
    } catch (err) {
      console.error("Add to cart error:", err);
      setSnackbar({
        open: true,
        message: "Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại.",
        severity: "error",
      });
    } finally {
      setAddingId(null);
    }
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by price
    result = result.filter((p) => {
      const pPrice =
        typeof p.price === "number"
          ? p.price
          : parseFloat(p.price as string) || 0;
      return pPrice >= priceRange[0] && pPrice <= priceRange[1];
    });

    // Sort
    if (sortBy === "low-to-high") {
      result.sort((a, b) => {
        const priceA =
          typeof a.price === "number"
            ? a.price
            : parseFloat(a.price as string) || 0;
        const priceB =
          typeof b.price === "number"
            ? b.price
            : parseFloat(b.price as string) || 0;
        return priceA - priceB;
      });
    } else if (sortBy === "high-to-low") {
      result.sort((a, b) => {
        const priceA =
          typeof a.price === "number"
            ? a.price
            : parseFloat(a.price as string) || 0;
        const priceB =
          typeof b.price === "number"
            ? b.price
            : parseFloat(b.price as string) || 0;
        return priceB - priceA;
      });
    }

    return result;
  }, [products, priceRange, sortBy]);
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 10 }}>
      {/* Editorial Header */}
      {/* <section>
        <Container maxWidth="xl" sx={{ mb: 10 }}>
          <Grid container spacing={4} alignItems="flex-end">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                  display: "block",
                  mb: 2,
                }}
              >
                Tinh Hoa Đất Việt
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "3rem", md: "4.5rem" },
                  lineHeight: 1.1,
                  mb: { xs: 4, md: 0 },
                }}
              >
                Tư Hường Food - Mật Ong & Mì Chũ Bắc Giang
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  borderLeft: "2px solid",
                  borderColor: "primary.light",
                  pl: 3,
                  py: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: "text.secondary",
                    fontFamily: '"Be Vietnam Pro", sans-serif',
                  }}
                >
                  "Mỗi giọt mật, mỗi sợi mì đều là kết tinh của sự kiên nhẫn,
                  lòng trân quý thiên nhiên và đôi bàn tay khéo léo của người
                  nghệ nhân Bắc Giang."
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section> */}

      {/* Main Content Grid */}
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Sidebar Filter */}
          <Grid
            size={{ xs: 12, lg: 3 }}
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            <Box
              sx={{
                backgroundColor: "surfaceContainerLow",
                p: 4,
                borderRadius: "16px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  borderBottom: "1px solid",
                  borderColor: "outlineVariant",
                  pb: 1,
                }}
              >
                Danh mục
              </Typography>
              <List sx={{ mb: 6 }}>
                <ListItem disableGutters sx={{ py: 1 }}>
                  <ListItemText
                    primary="Tất cả sản phẩm"
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: 500,
                        color: "text.secondary",
                      },
                    }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      mr: 2,
                    }}
                  />
                  <ListItemText
                    primary="Mật ong rừng"
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: 700,
                        color: "primary.main",
                      },
                    }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 1 }}>
                  <ListItemText
                    primary="Mì Chũ truyền thống"
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: 500,
                        color: "text.secondary",
                      },
                    }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ py: 1 }}>
                  <ListItemText
                    primary="Bộ quà tặng Wellness"
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: 500,
                        color: "text.secondary",
                      },
                    }}
                  />
                </ListItem>
              </List>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  borderBottom: "1px solid",
                  borderColor: "outlineVariant",
                  pb: 1,
                }}
              >
                Khoảng giá
              </Typography>
              <Box sx={{ px: 1 }}>
                <Slider
                  value={priceRange}
                  onChange={(_, val) => setPriceRange(val as number[])}
                  min={0}
                  max={1000000}
                  step={20000}
                  sx={{ color: "primary.main" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    {priceRange[0].toLocaleString("vi-VN")}đ
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    {priceRange[1].toLocaleString("vi-VN")}đ
                  </Typography>
                </Box>
              </Box>

              <Button
                fullWidth
                variant="contained"
                onClick={() => setPriceRange([0, 1000000])}
                sx={{
                  mt: 4,
                  backgroundColor: "surfaceContainerHighest",
                  color: "text.primary",
                  py: 1.5,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                  "&:hover": { backgroundColor: "primary.light" },
                }}
              >
                ĐẶT LẠI BỘ LỌC
              </Button>
            </Box>
          </Grid>

          {/* Product Grid Area */}
          <Grid size={{ xs: 12, lg: 9 }}>
            {/* Sorting Bar */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { sm: "center" },
                mb: 6,
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", color: "text.secondary" }}
              >
                Hiển thị {filteredAndSortedProducts.length} sản phẩm tinh tuyển
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "surfaceContainerLow",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "outline",
                    letterSpacing: "0.1em",
                  }}
                >
                  Sắp xếp:
                </Typography>
                <FormControl variant="standard" sx={{ minWidth: 150 }}>
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "primary.main",
                      "&:before, &:after": { display: "none" },
                    }}
                  >
                    <MenuItem value="featured">Nổi bật nhất</MenuItem>
                    <MenuItem value="low-to-high">Giá: Thấp đến Cao</MenuItem>
                    <MenuItem value="high-to-low">Giá: Cao đến Thấp</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            {/* Grid */}
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
                <CircularProgress color="primary" />
              </Box>
            ) : filteredAndSortedProducts.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  Không tìm thấy sản phẩm nào trong khoảng giá này.
                </Typography>
              </Box>
            ) : (
              <Grid container spacing={4}>
                {filteredAndSortedProducts.map((product, index) => {
                  const prodId = product.product_id || product.id || index;
                  return (
                    <Grid key={prodId} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                      <ProductCard
                        image={productService.getImageUrl(
                          product.image,
                          matong,
                        )}
                        title={product.name || product.title || "Sản phẩm"}
                        description={
                          product.description ||
                          "Đặc sản truyền thống từ thiên nhiên."
                        }
                        price={productService.formatPrice(product.price)}
                        unit={
                          product.unit ||
                          (product.quantity
                            ? `${product.quantity} sản phẩm`
                            : "Hộp")
                        }
                        badge={
                          product.badge || {
                            label: "Đặc sản",
                            type: "bestseller",
                          }
                        }
                        actionType="add"
                        loading={
                          addingId === (product.product_id || product.id)
                        }
                        onAddToCart={() => handleAddToCart(product)}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            )}

            {/* Load More */}
            <Box
              sx={{
                mt: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "outlineVariant",
                  opacity: 0.2,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  color: "outlineVariant",
                }}
              >
                Hiển thị {filteredAndSortedProducts.length} sản phẩm
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

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
    </Box>
  );
};
