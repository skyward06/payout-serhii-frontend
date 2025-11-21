import { m } from 'framer-motion';
import MediaPlayer from 'react-player';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';

export function Quick() {
  return (
    <Box
      py={{ xs: 8, md: 10 }}
      textAlign="center"
      sx={{
        background: (theme) =>
          `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.03)} 0%, ${varAlpha(theme.vars.palette.primary.darkChannel, 0.06)} 100%)`,
      }}
      component={MotionViewport}
    >
      <Container>
        <m.div variants={varFade().inDown}>
          <Typography variant="h2" fontWeight={700} mb={2}>
            A Quick Introduction...
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Box display="flex" justifyContent="center">
            <MediaPlayer url="https://www.youtube.com/watch?v=-XP4JzOFYFI" controls />
          </Box>
        </m.div>
      </Container>
    </Box>
  );
}
