import { Box, Typography, Button, Chip } from '@mui/material';
import { Icon } from '../assets/icon';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  unit: string;
  badge?: {
    label: string;
    type: 'organic' | 'gift' | 'bestseller';
  };
  actionType?: 'add' | 'view';
}

export const ProductCard = ({ image, title, description, price, unit, badge, actionType = 'add' }: ProductCardProps) => {
  const getBadgeColor = () => {
    switch (badge?.type) {
      case 'organic': return 'tertiary.main';
      case 'gift': return 'primary.main';
      case 'bestseller': return 'tertiary.main'; // or some other variant
      default: return 'primary.main';
    }
  };

  return (
    <Box
      className="product-card"
      sx={{
        backgroundColor: 'surfaceContainerHighest',
        borderRadius: '12px',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ position: 'relative', pt: '125%', overflow: 'hidden', backgroundColor: 'surfaceDim' }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            '.product-card:hover &': {
              transform: 'scale(1.1) sepia(0.2)',
            }
          }}
        />

        {/* Quick Action Overlay */}
        <Box
          className="quick-action"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
          }}
        >
          <Button
            fullWidth
            variant="contained"
            startIcon={actionType === 'add' ? <Icon.ShoppingBasket sx={{ fontSize: '1.2rem' }} /> : <Icon.Visibility sx={{ fontSize: '1.2rem' }} />}
            sx={{
              backgroundColor: '#ffffff',
              color: 'text.primary',
              fontWeight: 700,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'primary.light',
              }
            }}
          >
            {actionType === 'add' ? 'Thêm vào giỏ' : 'Xem nhanh'}
          </Button>
        </Box>

        {/* Badge */}
        {badge && (
          <Chip
            label={badge.label}
            size="small"
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              backgroundColor: getBadgeColor(),
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              borderRadius: 'full',
            }}
          />
        )}
      </Box>

      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Be Vietnam Pro", sans-serif',
            fontWeight: 700,
            color: 'text.primary',
            mb: 1,
            lineHeight: 1.2
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            lineClamp: 2,
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            fontSize: '0.875rem'
          }}
        >
          {description}
        </Typography>
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            {price}
          </Typography>
          <Typography variant="caption" sx={{ color: 'outline', fontWeight: 500 }}>
            {unit}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
