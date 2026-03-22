import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import { Icon } from '../assets/icon';

export const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        size="medium"
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: { xs: 96, md: 40 },
          right: { xs: 24, md: 40 },
          backgroundColor: 'primary.main',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'primary.dark',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s',
        }}
      >
        <Icon.ArrowUpward />
      </Fab>
    </Zoom>
  );
};
