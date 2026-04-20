import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { Icon } from "../../assets/icon";

const makers = [
  {
    name: "Chú Hùng",
    role: "Nghệ nhân nuôi ong",
    quote: "Mật ong là linh hồn của núi rừng, ta phải nâng niu từng giọt.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKSqr2rR129e_gEbyyd4ScZG0jZlThgEu766R6hixh-FGW4Y4ZTTwX9jYgNcUVzHUp9XN8Uwd67_YBqXc4yIetJZJUh_ejEoafXYtxoicFkXlQwB9AWnjD5Y67et-73maeloTzZptUWPKSwVrKh4qqJXTCCL_PZhvP5L6UkqN48tXLj3218BQKUeE_3H-GWMOILnG7gEPyTXdri_DgAjzz9xLuCy4C3vMR2U9seQRLiIgOGPa1KE9Mt5IVd0Y0NrjUH0u1gh6tKw8",
  },
  {
    name: "Cô Lan",
    role: "Nghệ nhân làm Mì Chũ",
    quote: "Mì ngon nhờ nắng, nhờ gió và nhờ cái tâm người làm.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqfE99JJv8p1XONIy5ekKVuVp9d93qn9xCofIlnOU_BwuOtImgdl2uN-Rhj6D8L0ZKiOX68vqQNvmezbEkmJTiCAvsb5QylGFEvCCUgfYepu0UI8Mqt9hJKF33BU0SF1xde3woad0qBVkbE8TZ4MGUlrk9KFMTWjrVDWkqF81H8PBWMB9vlsSx1xSNo0R0KBZkRGeAS_54ZdSj34T_qOJCPSbeinrXm-kDdLytvahfm3oQkJFfPkLgnOkN86ltpd6fuBgS403zxGg",
  },
  {
    name: "Chị Thắm",
    role: "Kiểm định chất lượng",
    quote:
      "Không có sự sai sót nào được phép hiện diện trong sản phẩm Hổ Phách.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDV6uVV9lHc72-REE4JfJfXZhJaNyVqaidHx-tgObCiB59x6cSIYBH6if-yepmajMn0haWlLy8U4kiH_5MB9qYBBgsaRoJYFpV5G6Im_bODekfdQUL9MDOOwGplRgbPr7kHpaSBcDOU-tOEkL7NxHKoGq9duKcHalGsVG5AkAUE87L8NjqKOAzKRor7jmvgrXfFQb3JcIC4aVSJv4dLF3nuWk8e3fa-2BevAJpcjFXdrx1xVEXA1Vgi-mKqosqed4JOY2xE_9W5s9c",
  },
  {
    name: "Bác Ba",
    role: "Giữ giống bản địa",
    quote: "Gìn giữ hạt giống là gìn giữ tương lai của bản làng.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLqZJrpEkK8LvcjeFKOoLeOHupn2HB4MFmwJHUrR9bDkS8cQTQT8RQTuUyKiqLlUQ4GB0g_vp4SnTfnQNxmXNqAiiVdn14Y8imE6oH-UO8_pVJORrFSWtL5XZTEIPHddGC9FxVGOrtIFlyl2NTWIk6ymrSJYkY7sQhsxxiSkHnQNjXBghMtfD-6emNQsx9v0QGTq7h4hjjQQC-KEx0BcMEEXbQ1FJjKV9Ggk3LZXWZsFNrlEO25UJRyKLIr2QDA33ljfv10ZLaYzU",
  },
];

export const AboutUs = () => {
  return (
    <Box sx={{ bgcolor: "background.default", pt: { xs: 12, md: 16 } }}>
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ mb: { xs: 10, lg: 15 } }}>
        <Grid container spacing={6} alignItems="flex-end">
          <Grid size={{ xs: 12, lg: 7 }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: "0.2em",
                display: "block",
                mb: 2,
              }}
            >
              Về Chúng Tôi
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", md: "4.5rem", lg: "5.5rem" },
                lineHeight: 1.1,
                mb: 4,
              }}
            >
              Gói trọn tinh hoa <br />
              <Box
                component="span"
                sx={{ color: "primary.main", fontStyle: "italic" }}
              >
                Hổ Phách
              </Box>{" "}
              Việt.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }} sx={{ pb: 2 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "text.secondary",
                maxWidth: 460,
                ml: { lg: "auto" },
                lineHeight: 1.6,
              }}
            >
              Chúng tôi không chỉ bán thực phẩm, chúng tôi gìn giữ những giá trị
              văn hóa ẩm thực truyền thống từ vùng đất Bắc Giang màu mỡ.
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 8,
            position: "relative",
            aspectRatio: "21/9",
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            component="img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9dwZYSMTNp4ILRmwMaXDMoyMuxnSW6WknxMPSNcgmwa-7Tu81gxYopiFXi-ohPAE8CrfXCdVZFLDR_XlUyOELPvqipOifUkCekhNVA8h2tfxt-72kQsfSi-xfMsKX8GeZT8E6LMZC00NJGp7cFCGu-utdtC4NI5vzrhWE68s5zkoU7_qRru0kO3HmLr7Je9duikWZ3dyFOsNEDQ9lFs5WghBsCJ_KRr2xHuCmri83P-Dv8opdmCW9sGxzFnNG3_MxIF5SjmwDtE0"
            alt="Bắc Giang landscape"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(30, 28, 14, 0.4), transparent)",
            }}
          />
        </Box>
      </Container>

      {/* Our Story Section */}
      <Box sx={{ bgcolor: "surfaceContainerLow", py: { xs: 10, lg: 15 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={10} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }} sx={{ order: { xs: 2, lg: 1 } }}>
              <Typography variant="h3" sx={{ mb: 4 }}>
                Câu chuyện của chúng tôi
              </Typography>
              <Box
                sx={{
                  color: "text.secondary",
                  "& p": { mb: 3, fontSize: "1.1rem", lineHeight: 1.8 },
                }}
              >
                <Typography variant="body1">
                  Khởi nguồn từ những sườn đồi đầy nắng tại Bắc Giang, nơi những
                  giọt mật ong rừng nguyên chất mang màu hổ phách óng ả và những
                  sợi Mì Chũ trắng ngần được làm nên từ đôi bàn tay khéo léo của
                  người nghệ nhân.
                </Typography>
                <Typography variant="body1">
                  Hổ Phách Artisanal ra đời với sứ mệnh mang những thức quà quý
                  giá này từ bản làng xa xôi đến với bàn ăn của mọi gia đình,
                  giữ trọn vẹn hương vị mộc mạc và tinh khiết nhất của đất trời.
                </Typography>
              </Box>
              <Button
                variant="contained"
                className="honey-gradient"
                endIcon={<Icon.ArrowForwardIcon />}
                sx={{ mt: 2, px: 4, py: 1.5, borderRadius: 2, fontWeight: 700 }}
              >
                Xem thêm hành trình
              </Button>
            </Grid>
            <Grid
              size={{ xs: 12, lg: 6 }}
              sx={{ order: { xs: 1, lg: 2 }, position: "relative" }}
            >
              <Box
                sx={{
                  aspectRatio: "4/5",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transform: "rotate(2deg)",
                }}
              >
                <Box
                  component="img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPIcLJ96v2cVHlvoxrZNCFEYLVtU38_2muDhJ8TUZA2391n_N8Ayryevwn5OajxzwWra40wq4jc3vse5Fjs1lTJfRPm556bweyLGE_XCJVNoG2Gt9SF-OIuBSPlyh6INd9kP28Ng7UqcufLQXviZtgXE4d2RFS80xqiE2RT8Bq0zf7p01vZ6PtLjJQzoAiOARiCLU-zAfpInJVfALmHnH0fbSU2yCxiM6JPprT6X_3OFdU8IhsddUpk0kVVrU7tBg9FxJltnHvt4E"
                  alt="Honey harvesting"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: -40,
                  left: -40,
                  width: "60%",
                  aspectRatio: "1/1",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  border: "8px solid",
                  borderColor: "background.default",
                  transform: "rotate(-3deg)",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Box
                  component="img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD36mIhLru0DY2F6Tf9z8dama-n7af92hUV62_Cm4nvIpSGpIq1d-Z5Lg41uDwFqKQnDfjEyXFUOLlxopwllkUR3V7M5nuIHPtwrUuk4AqPDXA3ZXeGqDKYxE3DNohgSWz2wD9_NMM_2Q7jH5UAnEfloQ9EO_DoDvzWlUOB3E2bBqGYElBoqEQ9S2Av27XftvfkKsf75hgBKZF87VaCvl-M19QmvQl2DEAQoaWHxNwNrlgBzmuHeAoiXTdMjAXQWcPG3xJQ9_qfEHo"
                  alt="Traditional noodle making"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 10, lg: 15 } }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Sứ mệnh & Tầm nhìn
          </Typography>
          <Box
            sx={{
              width: 64,
              height: 4,
              bgcolor: "primary.main",
              mx: "auto",
              borderRadius: "full",
            }}
          />
        </Box>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                bgcolor: "surfaceContainerHighest",
                p: 5,
                borderRadius: 4,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  bgcolor: "rgba(140, 222, 134, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <Icon.EcoIcon sx={{ color: "tertiary.main" }} />
              </Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                100% Tự Nhiên
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                Sản phẩm hoàn toàn không chứa chất bảo quản, giữ nguyên dưỡng
                chất và hương vị gốc từ thiên nhiên.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                bgcolor: "surfaceContainerHighest",
                p: 5,
                borderRadius: 4,
                height: "100%",
                transform: { md: "translateY(32px)" },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  bgcolor: "rgba(255, 193, 7, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <Icon.VerifiedUserIcon sx={{ color: "primary.main" }} />
              </Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                Hỗ Trợ Nông Dân
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                Chúng tôi trực tiếp hợp tác và đảm bảo sinh kế công bằng cho hơn
                500 hộ nông dân địa phương.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                bgcolor: "surfaceContainerHighest",
                p: 5,
                borderRadius: 4,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  bgcolor: "rgba(254, 211, 199, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <Icon.StarIcon sx={{ color: "secondary.main" }} />
              </Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                Chất Lượng Thượng Hạng
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                Kiểm soát nghiêm ngặt từ khâu thu mua đến đóng gói để mang tới
                trải nghiệm ẩm thực cao cấp nhất.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Counter Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          py: 10,
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -96,
            left: -96,
            width: 384,
            height: 384,
            borderRadius: "50%",
            border: "40px solid rgba(255,255,255,0.1)",
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} sx={{ textAlign: "center" }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>
                10+
              </Typography>
              <Typography
                variant="overline"
                sx={{ letterSpacing: "0.2em", opacity: 0.8 }}
              >
                Năm kinh nghiệm
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>
                500+
              </Typography>
              <Typography
                variant="overline"
                sx={{ letterSpacing: "0.2em", opacity: 0.8 }}
              >
                Hộ nông dân
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>
                10.000+
              </Typography>
              <Typography
                variant="overline"
                sx={{ letterSpacing: "0.2em", opacity: 0.8 }}
              >
                Khách hàng tin dùng
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Production Process Timeline */}
      <Container maxWidth="xl" sx={{ py: { xs: 10, lg: 15 } }}>
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.2em",
              display: "block",
              mb: 1,
            }}
          >
            Minh bạch & Tận tâm
          </Typography>
          <Typography variant="h3">Quy trình sản xuất</Typography>
        </Box>
        <Grid container spacing={8} sx={{ position: "relative" }}>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 32,
              left: 0,
              right: 0,
              height: 2,
              bgcolor: "outlineVariant",
              opacity: 0.3,
              zIndex: 0,
            }}
          />
          {[
            {
              step: "01",
              title: "Nguồn nguyên liệu",
              desc: "Lựa chọn trực tiếp tại vườn và xưởng của bà con Bắc Giang, đảm bảo tiêu chuẩn hữu cơ.",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBeP2gKxE37hauFiwV8jeu2Tenxdj86kQxKedbyaqBeqCE5N_5kYnrBgWEUlQRDaLzxmsPoEMIglAZNSMG0FPUA0KDL2GWNVuVbf_SCvHAVz3cONvOJRHusdJ2XyWQ8UDv2hLNuzSEGGrkZQjv2Q8AVCiEKlV4CSfTIUKniv16qtEBRyUVwKZX-Ugsq9-uvHhAQCsAyhqzjIpMei2LDN0z-DCY8pPz04T-DOfP81XKnNuuhF-d1eVcgB2CLcX6rKtHPNkPv-KrRjrs",
            },
            {
              step: "02",
              title: "Chế biến thủ công",
              desc: "Áp dụng phương pháp truyền thống kết hợp với tiêu chuẩn vệ sinh an toàn hiện đại.",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD2bar528BtSH8IHgxWODQKdQfi0w9EtKf2Ad3mHcXtOBJ_6w8_7kMnCEzv21kkSrM_z008jaYwGQSJ9i6M7MFVpZdH3rILS7rV2izUna09m1cuQvKV18ZcnqwJMyVbAtHusNLrHRlwgqbd7BaJRuSJX7SgxYI0ULNceGmi40impXZRNZtYTLdVDY2MaQ56ufn68C4NjeugaHFExu3HGaBsJQqmLQHFgyAAMMq0JmGLktfdCUy9DM3kjdsGnd-dMCrjXs8kLKzyDTM",
            },
            {
              step: "03",
              title: "Đóng gói nghệ thuật",
              desc: "Mỗi sản phẩm được đóng gói tỉ mỉ, mang phong cách tinh tế của một món quà quý.",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCZC2u2RRXfCv8PYVQSUl5S4wnpLYeyhiKpV9cotNiXXCA81Gj48EPYfcoDBNfXaQtrLLaOyJVdYmOvOU_J45tXL8fIcz0_WRR6FqCeUOxVJ0DPVL6fSNdu84TjysUhnENMoKlqDSmOMM3BR3Ou3Wm8ByGSS-5sg_ASRQ2Y6qzMdKyJxTf8lCgyfvjjZkPECxXQfKx-_eno6WsyenJDciZm7to9eTGAY8TIpb4YiqULKHT7beYZzC3cu7597c8aMCdRF-YXCnT-_s4",
            },
          ].map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, md: 4 }}
              sx={{ position: "relative", zIndex: 1 }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  bgcolor: "surfaceContainer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "primary.main",
                  border: "4px solid",
                  borderColor: "background.default",
                  mb: 3,
                  transition: "all 0.3s",
                  "&:hover": { bgcolor: "primary.main", color: "white" },
                }}
              >
                {item.step}
              </Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6 }}
              >
                {item.desc}
              </Typography>
              <Box
                sx={{
                  aspectRatio: "16/9",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Meet the Makers Section */}
      <Box sx={{ bgcolor: "surfaceContainer", py: { xs: 10, lg: 15 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "flex-end",
              mb: 10,
              gap: 4,
            }}
          >
            <Box sx={{ maxWidth: 600 }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                Gặp gỡ những nghệ nhân
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Đằng sau mỗi hũ mật, mỗi bó mì là cuộc đời và tâm huyết của
                những người con vùng đất Bắc Giang.
              </Typography>
            </Box>
            <Button
              component="a"
              href="#"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                "&:hover": { textDecoration: "underline" },
              }}
              endIcon={<Icon.ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
            >
              Xem tất cả câu chuyện
            </Button>
          </Box>
          <Grid container spacing={4}>
            {makers.map((maker, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ group: "true", textAlign: "left" }}>
                  <Box
                    sx={{
                      aspectRatio: "3/4",
                      borderRadius: 4,
                      overflow: "hidden",
                      mb: 3,
                      filter: "grayscale(100%)",
                      transition: "all 0.5s",
                      "&:hover": {
                        filter: "grayscale(0%)",
                        transform: "translateY(-8px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={maker.image}
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {maker.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "tertiary.main",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "block",
                      mb: 2,
                    }}
                  >
                    {maker.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    "{maker.quote}"
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
