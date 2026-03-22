import './App.css'
import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent, Chip, IconButton, TextField, Avatar, MenuItem } from '@mui/material'
import "./themes/style.css"

import { HeaderApp } from './layouts/Header'
import { TopBarApp } from './layouts/TopBar'
import { FooterApp } from './layouts/Footer'
import { Icon } from './assets/icon'



const testimonials = [
  {
    name: "Chị Thu Hằng",
    initials: "TH",
    content:
      "Mật ong rừng rất thơm, đúng chuẩn mật tự nhiên. Tôi hay dùng để pha trà mỗi sáng, cảm thấy sức khỏe cải thiện rõ rệt."
  },
  {
    name: "Anh Minh",
    initials: "AM",
    content:
      "Mì chũ ở đây sợi dai, không bị nát như mua ở siêu thị. Nhà mình bọn trẻ con rất thích ăn mì xào bằng mì chũ này."
  },
  {
    name: "Chị Phương Linh",
    initials: "PL",
    content:
      "Đóng gói rất chuyên nghiệp và sang trọng, làm quà biếu đối tác cực kỳ hợp lý. Sẽ còn ủng hộ shop dài lâu."
  }];

function App() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <TopBarApp />
      <HeaderApp />

      <main>
        {/* Hero Section */}
        <Box
          sx={{
            pt: { xs: 15, md: 20 },
            pb: { xs: 10, md: 15 },
            position: 'relative',
            overflow: 'hidden',
            bgcolor: 'background.default'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: 0.4,
              zIndex: 0
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfu4Q8fjKBkYxmdyng8f6u7WM3lwhe8qOVc6K8g1sM0CwspENCLfdP5TiFhLumjNLhhg8AlTlvV4mrBgEPWLk7hO2vaDHFXOZjjSfqz98tCzL55D3B-BMcS9MfZd7zMo-X3BfqQ7fz_mJxOSYtQT7VZLTgYS5NToEYv9B5RXJHjmImoy_BwnFFiigRjZ2WNj70oTDjCB0aXdpUG19Qjtp8pO9HdbmmR7GzfdYjPJkiJeJhChCWYQ2oe8tG1iPCkZUZNiM2vPGi9vc"
              alt="Hero Background"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
            />
          </Box>

          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <Chip
              label="TINH HOA ĐẤT VIỆT"
              sx={{
                bgcolor: 'tertiary.light',
                color: 'tertiary.contrastText',
                fontWeight: 700,
                letterSpacing: '0.1em',
                mb: 3,
                px: 1
              }}
            />
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 3, color: 'text.primary' }}>
              Đặc sản thiên nhiên<br />
              <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic' }}>Mật ong & Mì Chũ sạch</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.1rem', maxWidth: '600px', mx: 'auto' }}>
              Tinh hoa từ thiên nhiên, an toàn cho mọi gia đình. Mang hương vị truyền thống từ Bắc Giang đến gian bếp hiện đại.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button
                variant="contained"
                size="large"
                className="honey-gradient"
                endIcon={<Icon.ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                Mua ngay
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  bgcolor: 'surfaceContainerHighest',
                  borderColor: 'transparent',
                  color: 'text.primary',
                  '&:hover': { bgcolor: 'surfaceContainerHigh', borderColor: 'transparent' }
                }}
              >
                Khám phá thêm
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Benefits Bento Grid */}
        <Container maxWidth="xl" sx={{ py: 12 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ bgcolor: 'surfaceContainerLow', p: 5, borderRadius: 6, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Icon.EcoIcon sx={{ color: 'primary.main', fontSize: 40, mb: 4 }} />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>100% tự nhiên</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>Sản phẩm hoàn toàn từ thiên nhiên, không pha tạp, giữ trọn dưỡng chất tinh khiết nhất.</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box sx={{ bgcolor: 'rgba(27, 109, 36, 0.1)', p: 5, borderRadius: 6, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Icon.VerifiedUserIcon sx={{ color: 'tertiary.main', fontSize: 40, mb: 4 }} />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>Không chất bảo quản</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Quy trình đóng gói truyền thống, đảm bảo vệ sinh an toàn thực phẩm.</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box sx={{ bgcolor: 'rgba(255, 223, 158, 0.2)', p: 5, borderRadius: 6, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Icon.LocalShippingIcon sx={{ color: 'primary.main', fontSize: 40, mb: 4 }} />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>Giao hàng toàn quốc</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Vận chuyển nhanh chóng, đóng gói cẩn thận đến tận tay khách hàng.</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ py: 10 }}>
              <Box sx={{ bgcolor: 'surfaceContainerHighest', p: { xs: 5, md: 8 }, borderRadius: 6, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6 }}>
                <Box sx={{ flex: 1 }}>
                  <Icon.AgricultureIcon sx={{ color: 'primary.main', fontSize: 40, mb: 3 }} />
                  <Typography variant="h4" sx={{ mb: 2 }}>Trực tiếp từ nhà nông</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>Chúng tôi kết nối trực tiếp với những người nông dân tại Bắc Giang để mang đến giá trị thực và chất lượng tốt nhất.</Typography>
                </Box>
                <Box sx={{ width: { xs: '100%', md: 300 }, height: 240, borderRadius: 4, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2yd5p-pPMVzfYdIgVF8z1H1yr06Sc4YIto6kciR9Y83hjTHv4Jf7zaUUi6_ryq3J6ReORX3dAoRiiKeSGGQ-D_zpJtFj2O1Is2qaz7KEG4u1_n5QfiwNcddNEfrtrutHtVr6LulfcDQ_LE0UwCI54or55OJqVTb8Xl1Q4syU9aiA275fzlIWRrHaMrsuugNYf1E2KkuwXf0DPpEQYOxksXItbUnPb56XoCGpiHzkmD0wM8CWMgZUlAt_1uAqbfSiPTulNj_3yjNk" alt="Farming" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Product Section */}
        <Box id="products" sx={{ bgcolor: 'surfaceContainerLow', py: 12 }}>
          <Container maxWidth="xl">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 8 }}>
              <Box sx={{ maxWidth: 600 }}>
                <Typography variant="h3" sx={{ mb: 2 }}>Danh mục sản phẩm</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>Những thức quà tinh túy từ làng quê Việt Nam, được chọn lọc và đóng gói với sự tỉ mỉ cao nhất.</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ bgcolor: 'surfaceContainerHighest' }}><Icon.ChevronLeftIcon /></IconButton>
                <IconButton sx={{ bgcolor: 'surfaceContainerHighest' }}><Icon.ChevronRightIcon /></IconButton>
              </Box>
            </Box>

            <Grid container spacing={4}>
              {[
                {
                  title: 'Mật ong rừng',
                  price: '250.000đ',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_1NSYQ6Kv2M_iDneabYySlh5m7II4g8pkEmizAhtbwOy04zEwVt5efd1lnqxx0nDAdf4kDb48bTvMi2ez4QCy1zmdSVYvz1D-IHeaQChEiuzSVQIndMPl8i9R95Wb2tq5z3xJmqeUhH5MrfOh7Wf_dQRKqv5kflWHHnEUFxm0DhGyTzw3WAHvNurho2ovB9l0-SZr9Fc9Mbb6FmZd4c6zRar_fAMITwAEsSpnEXAGT6zmRAH5m0P1p5YkpbmWqPuf4lZcZSpwjs',
                  tag: 'BÁN CHẠY',
                  desc: 'Mật ong tự nhiên 100% từ rừng nguyên sinh, hương vị đậm đà.'
                },
                {
                  title: 'Mật ong hoa nhãn',
                  price: '220.000đ',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPyMT4qqeiejv9C3c5-niLp0eeZst1pEpFcl71fREJCQBal_ssNRovskq55Ss7bE1p3OoSFwm4nDbo51ZRXee63vZWjj5d1gU4SHyll-asZgHrtgvwzHfpuSWfiGKzQFkZVb64HS7_U48sjL6Mtal5yis9FoS4TWHE1XbQBSY8og00tM4Lxo1Kn1zW9bZzdEOO3UXJoR6aLIDHRuGwngbv-5jvXXL9Ka3292E91H6RVqWG_EZPr6t262ddItLAAIgDORZiGsUUUb8',
                  desc: 'Mật ong thu hoạch từ các vườn nhãn cổ thụ, màu hổ phách.'
                },
                {
                  title: 'Mì chũ truyền thống',
                  price: '65.000đ',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjTKP8DQ_WYsFVf9qYWy17WFjy5St13Cy1JUpY41p2fMwf_bRebOlyaF55dcSyRggdNHvc04GVZKIXxTK4GzkiJ8Yqe23fLDrUVIa3mL1dAD7bQ5214FXJuDHLCwHbeG1PX8fMi2tUDxpwqoEClyQeVtD9XtzdxVq2w6fFzx1YrAjEznBFEzAuMEsYkyWhaTgoDIQreSbQldPPLjRrMjWZy3Ne1eB14sGH_gxMPr-9UILXkqBKKrCuoSbTR3-xpgflWENUmsiy-T0',
                  desc: 'Sợi mì dai ngon, trắng tinh khiết từ gạo ngon vùng Chũ.'
                },
                {
                  title: 'Mì chũ khô cao cấp',
                  price: '85.000đ',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbIx67PUHPP12WH0qu5pOd0nvk8zFzCHFn91113gYMJ2MjDEogQVIUBIVOt5x6OhuxUOWgwpwZFjVhjU3XPz6RAIbNzQQM_FrcC06ihrcXwHgxMzDGcl29Chb9rhDv6Sf3TY8PBOW-UQPVo-vdp4skWotjzuT2RLMuypWV7hrRCLgsrQrevBGHWklHUQTZDhhpDscJsks5ugNrm60fVCPgeP1pkIn6Bd29AbJhWYzLbLbhDDP3rlSQexNi_KFPUFpatdQp2T22Hqs',
                  desc: 'Sản phẩm xuất khẩu, sấy lạnh giữ nguyên hương vị.'
                }
              ].map((product, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 'none', bgcolor: 'surfaceContainerLowest', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia component="img" height="280" image={product.image} alt={product.title} />
                      {product.tag && (
                        <Chip label={product.tag} size="small" sx={{ position: 'absolute', top: 16, left: 16, bgcolor: 'tertiary.light', color: 'tertiary.contrastText', fontWeight: 700, fontSize: '10px' }} />
                      )}
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ mb: 1 }}>{product.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {product.desc}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>{product.price}</Typography>
                        <IconButton size="small" sx={{ bgcolor: 'surfaceContainerHighest', '&:hover': { bgcolor: 'primary.main', color: 'white' } }}>
                          <Icon.AddShoppingCartIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* About Section */}
        <Container id="about" maxWidth="xl" sx={{ py: 15 }}>
          <Grid container spacing={10} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 30px 60px rgba(120, 89, 0, 0.15)' }}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCqbHl2TkA8mnyPKzhrWYYzjdpB5FvQKcxKWmko5exA0Cj77Kq_L2iT85RSQI6fBK5JIIQ4IbEVxeeKraR8rXe-ybrhlD64t0bwyMT387qODtPClCKLoytlxDiHyXriX5Ln09vQv4Hb516aa_PMFZw9RJXRgkrCjYy_NbBxky_Q2buYeEZjgdf72cegA4GWdLphKzN4on2_lfIZqcy7v1fFKv4RCHqYWxFmhlzfF71Zlu9lWtfRtE-UJdyBf7MCAncjo0GEU2zbaU" alt="About" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -32,
                    right: -32,
                    bgcolor: 'primary.main',
                    p: 4,
                    borderRadius: 4,
                    maxWidth: 240,
                    display: { xs: 'none', md: 'block' }
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white', lineHeight: 1.3 }}>
                    Gần 20 năm kinh nghiệm gìn giữ và phát triển đặc sản quê hương.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: '0.2em', mb: 2, display: 'block' }}>
                CÂU CHUYỆN CỦA CHÚNG TÔI
              </Typography>
              <Typography variant="h3" sx={{ mb: 4, lineHeight: 1.2 }}>
                Chúng tôi cung cấp đặc sản sạch từ vùng quê Việt Nam...
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Hổ Phách Artisanal được ra đời với khát vọng đưa những giá trị ẩm thực truyền thống Việt Nam vươn xa. Chúng tôi không chỉ bán sản phẩm, chúng tôi kể câu chuyện về sự cần cù của người nông dân Bắc Giang và sự tinh túy của đất trời.
              </Typography>
              <Grid container spacing={4}>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="h4" sx={{ color: 'primary.main', mb: 1 }}>100+</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Hộ nông dân liên kết</Typography>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="h4" sx={{ color: 'primary.main', mb: 1 }}>5000+</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Khách hàng tin dùng</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        {/* Testimonials */}
        <Box sx={{ py: 12, bgcolor: "#f5f5f4" }}>
          <Container maxWidth="lg">
            <Box textAlign="center" mb={8}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Khách hàng nói gì?
              </Typography>
              <Typography color="text.secondary">
                Hàng ngàn gia đình đã tin dùng sản phẩm của chúng tôi mỗi ngày.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {testimonials.map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Card sx={{ borderRadius: 4, boxShadow: 2 }}>
                    <CardContent>
                      {/* Stars */}
                      <Box mb={2}>
                        {"★★★★★"}
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{ fontStyle: "italic", mb: 3 }}
                        color="text.secondary"
                      >
                        "{item.content}"
                      </Typography>

                      <Box display="flex" alignItems="center" gap={2}>
                        <Avatar>{item.initials}</Avatar>
                        <Typography fontWeight="bold">
                          {item.name}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Order Form */}
        <Box sx={{ py: 16, px: 2 }} id="contact">
          <Container maxWidth="md">
            <Box
              sx={{
                p: { xs: 4, md: 8 },
                borderRadius: "40px",
                boxShadow: 5,
                bgcolor: "#fafafa"
              }}
            >
              <Box textAlign="center" mb={6}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Đặt hàng ngay hôm nay
                </Typography>
                <Typography color="text.secondary">
                  Để lại thông tin, chúng tôi sẽ liên hệ tư vấn và giao hàng tận nơi.
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Họ và tên"
                    placeholder="Nguyễn Văn A"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    placeholder="0123 456 789"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Địa chỉ giao hàng"
                    placeholder="Số nhà, tên đường..."
                  />
                </Grid>

                <Grid size={{ xs: 12 }} >
                  <TextField select fullWidth label="Chọn sản phẩm">
                    <MenuItem value="honey1">Mật ong rừng</MenuItem>
                    <MenuItem value="honey2">Mật ong hoa nhãn</MenuItem>
                    <MenuItem value="noodle1">Mì chũ truyền thống</MenuItem>
                    <MenuItem value="noodle2">Mì chũ khô cao cấp</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      py: 2,
                      borderRadius: 3,
                      fontWeight: "bold"
                    }}
                  >
                    Xác nhận đặt hàng
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        {/* Scroll to top */}
        <Button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          sx={{
            position: "fixed",
            bottom: 40,
            right: 40,
            borderRadius: "50%",
            minWidth: 50,
            height: 50
          }}
          variant="contained"
        >
          ↑
        </Button>

      </main>

      <FooterApp />
    </Box>
  )
}

export default App
