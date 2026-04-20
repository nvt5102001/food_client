import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Icon } from "../../assets/icon"

const faqItems = [
    {
        question: "Sản phẩm có nguồn gốc từ đâu?",
        answer: "Tất cả sản phẩm Mì Chũ và Mật Ong của Hổ Phách đều được thu hoạch và sản xuất trực tiếp tại các làng nghề truyền thống ở Bắc Giang, đảm bảo quy trình thủ công 100%."
    },
    {
        question: "Thời gian giao hàng là bao lâu?",
        answer: "Chúng tôi giao hàng toàn quốc. Nội thành Hà Nội nhận hàng trong 24h, các tỉnh thành khác từ 2-4 ngày làm việc tùy khu vực địa lý."
    },
    {
        question: "Có chính sách đổi trả không?",
        answer: "Hổ Phách cam kết đổi trả 1-1 nếu sản phẩm có lỗi từ nhà sản xuất hoặc hư hỏng trong quá trình vận chuyển. Quý khách vui lòng quay video khi mở hộp."
    },
    {
        question: "Làm sao để nhận biết mật ong thật?",
        answer: "Mật ong Hổ Phách là mật ong rừng nguyên chất, có mùi thơm đặc trưng của hoa rừng Bắc Giang, không bị đóng đường và giữ được hương vị tự nhiên nhất."
    }
];

export const FAQSection = () => {
    return (
        <Box component="section" sx={{ py: 12, px: 3 }}>
            <Box sx={{ maxWidth: '896px', mx: 'auto' }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2 }}>
                        Câu hỏi thường gặp
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Giải đáp những thắc mắc của bạn về sản phẩm và dịch vụ.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {faqItems.map((item, index) => (
                        <Accordion
                            key={index}
                            elevation={0}
                            sx={{
                                bgcolor: 'surfaceContainer',
                                borderRadius: '12px !important',
                                border: 'none',
                                '&:before': { display: 'none' },
                                overflow: 'hidden'
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<Icon.ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
                                sx={{ px: 3, py: 1 }}
                            >
                                <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700 }}>
                                    {item.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                    {item.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};