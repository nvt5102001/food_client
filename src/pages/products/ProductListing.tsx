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
} from "@mui/material";
import { ProductCard } from "./ProductCard";
import michu from "../../assets/images/products/michu.png";
import matong from "../../assets/images/products/matong.png";
const products = [
  {
    title: "Mỳ gạo Chũ ",
    price: "70.000đ",
    image: michu,
    tag: "BÁN CHẠY",
    description: "Sản xuất từ gạo tẻ ngon nguyên chất, không phụ gia.",
    unit: "1kg",
    badge: { label: "Best Seller", type: "bestseller" as const },
    actionType: "add" as const,
  },
  {
    title: "Mật ong rừng Sơn Động",
    price: "50.000đ",
    image: matong,
    description: "Mật ong tự nhiên 100% từ rừng nguyên sinh, hương vị đậm đà.",
    unit: "500ml",
    badge: { label: "Best Seller", type: "bestseller" as const },
    actionType: "add" as const,
  },
];

export const ProductListing = () => {
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
                  defaultValue={[100000, 2000000]}
                  min={100000}
                  max={2000000}
                  step={50000}
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
                    100.000đ
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    2.000.000đ
                  </Typography>
                </Box>
              </Box>

              <Button
                fullWidth
                variant="contained"
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
                ÁP DỤNG LỌC
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
                Hiển thị 10 sản phẩm tinh tuyển
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
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                  <Select
                    defaultValue="featured"
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
            <Grid container spacing={4}>
              {products.map((product, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                  <ProductCard {...product} />
                </Grid>
              ))}
            </Grid>

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
              <Button
                variant="outlined"
                sx={{
                  px: 6,
                  py: 2,
                  borderWidth: "2px",
                  borderColor: "primary.main",
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  "&:hover": {
                    borderWidth: "2px",
                    backgroundColor: "primary.main",
                    color: "#ffffff",
                  },
                }}
              >
                XEM THÊM SẢN PHẨM
              </Button>
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  color: "outlineVariant",
                }}
              >
                Bạn đã xem 6 trên 24 sản phẩm
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
