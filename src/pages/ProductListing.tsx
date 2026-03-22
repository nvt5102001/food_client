import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Slider, Button, Select, MenuItem, FormControl } from '@mui/material';
import { ProductCard } from './ProductCard';

const products = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArvitEdnMIiLeqA_1txs6B9OOvX6DJRFp3Shdk1e8Ip6uGxXbnlvCCSPRSGWVlXYtGFprWQ5-lPtF9xU088sM4RyeRZtaKVlBXsmUnRbE4y78J0w-Wjljp5lgXYjbzeNzMvr8eDOyLn-9OBgIrnWztniTYPRfbOqrPmezUenEjx7rOrYa22rtKWlMp-3KX7tx6rN8GIO_euw6wEbxOi6_QGsCW7oI91MIVM2Xu0Q-y8DQNK8OweUdVHUmUUnwFx0zjXW5gmZcH5sM",
    title: "Mật Ong Rừng Già",
    description: "Thu hoạch từ những bầy ong tự nhiên sâu trong rừng già Bắc Giang.",
    price: "450.000đ",
    unit: "500ml",
    badge: { label: "Organic", type: "organic" as const },
    actionType: "add" as const
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpl8EKgyGM_3K9M8kqZU3wf36j8pusDxJ7UJXV9s_0KznbXOeHtOhx1MDpi-bCt2QEL0tEO1OHjsheE90yLFNIzeq0DCT-IHULKviyF9rcHn1ygIa3NkP7iETwXa844EziRW2tySOMwJbV-b3s4cnglz_7KOKS2TRGQ28Ix2RwOzxb6CVMhho8kpn47Acpcpi0g5H4nHTQ6JFSWJ5IT3GDdgpgM5Edte40UClOwTEHZ3gA_3BiTvIqug3AzmVerPuGq3mLVSCG_Gs",
    title: "Mì Chũ Truyền Thống",
    description: "Làm từ gạo Bao Thai Hồng, phơi nắng tự nhiên trên phên tre.",
    price: "85.000đ",
    unit: "1kg",
    actionType: "view" as const
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx9vtAcRHSQhfyuvmSc6tsS7hdN8JRPGnYOqXp3JfnDqGtzPEp-7LVNN0XB8RjHH4nQsd_theaHsSjoMuVNweox4zhXgHURAeaF2GSeRufbwsoEY8IEBczKM-Y8Ha93s09wt5-i0WPeIRN8Hzdn_yREdAXZUXjltclRJvhgY14dbLFZ0I7F-vK1yu48MD63nVMFrek4L37Vx8m5d3MU6LYkpWR0OCJQMdLk2UYcLHAAAaa9ch9XEwARIqH9TohHQyreJeOozRBfAI",
    title: "Artisanal Duo Set",
    description: "Sự kết hợp hoàn hảo giữa mật ong bạc hà và trà hoa cúc.",
    price: "1.250.000đ",
    unit: "Limited Edition",
    badge: { label: "Quà tặng", type: "gift" as const },
    actionType: "add" as const
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiOn2PAjdo5rNgfC0Kz7SZYBnKUiVr5EqS6f6e0K18bdBv9Ha4jct9l6OhbIljhSTci2Sd9WuSqKEbfnna5q-UIiFjqqgV5-rlCAeJT3UsR95t4dlJwe27O7ULyjiuUrg4OKJs1IxYZ6tlzf3OA2io6RDXpRNVU8LAiRf3vGi6QMWCVRAMPquXo0s-eiosm77Sksegj8lVMSdQL0NXmgMV7ad9iefncuVfThQhRZB3WyW3WdKbiRnaTyyXKL-X-ekCKGhX8O9l47w",
    title: "Mật Ong Bạc Hà",
    description: "Hương vị thanh mát đặc trưng của vùng cao nguyên đá.",
    price: "620.000đ",
    unit: "500ml",
    badge: { label: "Best Seller", type: "bestseller" as const }
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB4_ufUXTffHqM1PpSikAtqRUekh7vE6S79gC5kLZR_L0ClbaUkWQkjgJnuSuhSx6lGU7OTUvMTvz9o2oQxhO7nvtwRztvgxrHD78VIlVQdGP3oHAPZs0jQjF5KVOR2UsjiguQnzOWTzzGJz8cOzQj8LQkfydQNsF5YeE5VY5XVO0FRp2APlMMaIf5amS6tDlwJCKuXdh0AtVSR3B7xP-zi2b4sOZh9YYopyH4XNjKQLoGxM2BW_ZXH3gQX2CVQADTTAUCBfW3q0Y",
    title: "Mì Chũ Gạo Lứt",
    description: "Giàu chất xơ và dinh dưỡng, phù hợp cho chế độ ăn lành mạnh.",
    price: "110.000đ",
    unit: "1kg"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwGxwoL3ZTZRc2wYIR6RMqJZCLWFeLO_Ia_c3OB8kC6QKHhIX2XSHW7wS6eAR3ZqqWkSZi2z94DMa786mQVm-qYNnVeK_cgzH6-69C19cKaVNLW91ku1J-nVdViZO02BRILATb4UescUUKCNpInGG_g0qFnkPZ661hSRmkyRqWgX7A2XgTOED075d3BqrFIC1OmlxwvsS5EQ9scbEzk_X_t_REZrCVBqAkcXqI7mjKvAxj8pSI2fCDI35HHaCvf5Q9MH6WRD_4Y6A",
    title: "Mì Chũ Cải Bó Xôi",
    description: "Màu xanh tự nhiên từ cải tươi, thơm ngon và bắt mắt.",
    price: "125.000đ",
    unit: "1kg"
  }
];

export const ProductListing = () => {
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 10 }}>
      {/* Editorial Header */}
      <section>
        <Container maxWidth="xl" sx={{ mb: 10 }}>
          <Grid container spacing={4} alignItems="flex-end">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  letterSpacing: '0.2em',
                  fontWeight: 700,
                  display: 'block',
                  mb: 2
                }}
              >
                Tinh Hoa Đất Việt
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  lineHeight: 1.1,
                  mb: { xs: 4, md: 0 }
                }}
              >
                Hổ Phách Artisanal
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ borderLeft: '2px solid', borderColor: 'primary.light', pl: 3, py: 1 }}>
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary', fontFamily: '"Be Vietnam Pro", sans-serif' }}>
                  "Mỗi giọt mật, mỗi sợi mì đều là kết tinh của sự kiên nhẫn, lòng trân quý thiên nhiên và đôi bàn tay khéo léo của người nghệ nhân Bắc Giang."
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Main Content Grid */}
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Sidebar Filter */}
          <Grid size={{ xs: 12, lg: 3 }} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box sx={{ backgroundColor: 'surfaceContainerLow', p: 4, borderRadius: '16px' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, borderBottom: '1px solid', borderColor: 'outlineVariant', pb: 1 }}>
                Danh mục
              </Typography>
              <List sx={{ mb: 6 }}>
                <ListItem disableGutters sx={{ py: 1 }}>
                  <ListItemText primary="Tất cả sản phẩm" sx={{ '& .MuiTypography-root': { fontWeight: 500, color: 'text.secondary' } }} />
                </ListItem>
                <ListItem disableGutters sx={{ py: 1 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'primary.main', mr: 2 }} />
                  <ListItemText primary="Mật ong rừng" sx={{ '& .MuiTypography-root': { fontWeight: 700, color: 'primary.main' } }} />
                </ListItem>
                <ListItem disableGutters sx={{ py: 1 }}>
                  <ListItemText primary="Mì Chũ truyền thống" sx={{ '& .MuiTypography-root': { fontWeight: 500, color: 'text.secondary' } }} />
                </ListItem>
                <ListItem disableGutters sx={{ py: 1 }}>
                  <ListItemText primary="Bộ quà tặng Wellness" sx={{ '& .MuiTypography-root': { fontWeight: 500, color: 'text.secondary' } }} />
                </ListItem>
              </List>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, borderBottom: '1px solid', borderColor: 'outlineVariant', pb: 1 }}>
                Khoảng giá
              </Typography>
              <Box sx={{ px: 1 }}>
                <Slider
                  defaultValue={[100000, 2000000]}
                  min={100000}
                  max={2000000}
                  step={50000}
                  sx={{ color: 'primary.main' }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>100.000đ</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>2.000.000đ</Typography>
                </Box>
              </Box>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 4,
                  backgroundColor: 'surfaceContainerHighest',
                  color: 'text.primary',
                  py: 1.5,
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  '&:hover': { backgroundColor: 'primary.light' }
                }}
              >
                ÁP DỤNG LỌC
              </Button>
            </Box>
          </Grid>

          {/* Product Grid Area */}
          <Grid size={{ xs: 12, lg: 9 }}>
            {/* Sorting Bar */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { sm: 'center' }, mb: 6, gap: 2 }}>
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                Hiển thị 10 sản phẩm tinh tuyển
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, backgroundColor: 'surfaceContainerLow', px: 2, py: 1, borderRadius: '8px' }}>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', fontWeight: 700, color: 'outline', letterSpacing: '0.1em' }}>Sắp xếp:</Typography>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                  <Select
                    defaultValue="featured"
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: 'primary.main',
                      '&:before, &:after': { display: 'none' }
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
                <Grid key={index} size={{ xs: 12, sm: 6, xl: 4 }}>
                  <ProductCard {...product} />
                </Grid>
              ))}
            </Grid>

            {/* Load More */}
            <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <Box sx={{ width: '100%', height: '1px', backgroundColor: 'outlineVariant', opacity: 0.2 }} />
              <Button
                variant="outlined"
                sx={{
                  px: 6,
                  py: 2,
                  borderWidth: '2px',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  '&:hover': { borderWidth: '2px', backgroundColor: 'primary.main', color: '#ffffff' }
                }}
              >
                XEM THÊM SẢN PHẨM
              </Button>
              <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'outlineVariant' }}>
                Bạn đã xem 6 trên 24 sản phẩm
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
