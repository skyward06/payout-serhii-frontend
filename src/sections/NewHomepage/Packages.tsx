import { m } from 'framer-motion';
import { useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { PACKAGES } from 'src/consts';
import { common } from 'src/theme/core';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

export function Packages() {
  const navigate = useNavigate();

  const goToJoin = (packageId: string) => {
    navigate(`${paths.pages.intro.root}#sign-up`, { state: { packageId } });
  };

  return (
    <Box py={8} bgcolor="background.default">
      <Container component={MotionViewport}>
        <Stack textAlign="center" mb={8}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" fontWeight={700}>
              3 Packages to Choose From
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={4} justifyContent="center">
          <Grid xl={4} md={6} xs={12}>
            <m.div variants={varFade().inUp}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: (theme) => theme.customShadows.z20,
                    borderColor: alpha(common.primary, 0.24),
                  },
                }}
              >
                <Stack spacing={3}>
                  <Stack direction="row" justifyContent="space-between">
                    <Stack>
                      <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        Single
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                        Perfect to start your mining journey
                      </Typography>
                    </Stack>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 1.5,
                        bgcolor: alpha(common.primary, 0.12),
                      }}
                    >
                      <Iconify
                        icon="mynaui:layers-one-solid"
                        color="common.primary"
                        width={32}
                        height={32}
                      />
                    </Box>
                  </Stack>
                  <Typography variant="h2" sx={{ fontWeight: 700 }}>
                    $995
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    one-time fee
                  </Typography>
                  <Divider />
                  <Stack spacing={1.5}>
                    <DescriptionItem value="100 megahash mining power" />
                    <DescriptionItem value="One affiliate tracking center" />
                    <DescriptionItem value="Unique tracking code & URL" />
                    <DescriptionItem value="Back-office training & tools" />
                    <DescriptionItem value="Dedicated Customer Support" />
                    <DescriptionItem value="Unlimited hosting & electricity" />
                  </Stack>
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    color="info"
                    endIcon={<Iconify icon="pajamas:long-arrow" />}
                    onClick={() => goToJoin(PACKAGES[0])}
                    sx={{ mt: 2, bgcolor: common.primary }}
                  >
                    Get Started Now
                  </Button>
                </Stack>
              </Card>
            </m.div>
          </Grid>
          <Grid xl={4} md={6} xs={12}>
            <m.div variants={varFade().inUp}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  position: 'relative',
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: `2px solid ${common.primary}`,
                  boxShadow: common.primary,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: (theme) => theme.customShadows.z24,
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Stack spacing={3}>
                  <Stack direction="row" justifyContent="space-between">
                    <Stack>
                      <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        TRIPLE Play
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                        Best value for serious miners
                      </Typography>
                    </Stack>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 1.5,
                        bgcolor: alpha(common.primary, 0.12),
                      }}
                    >
                      <Iconify
                        icon="fa6-solid:layer-group"
                        color="common.primary"
                        width={32}
                        height={32}
                      />
                    </Box>
                  </Stack>
                  <Typography variant="h2" sx={{ fontWeight: 700 }}>
                    $2985
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    one-time fee
                  </Typography>
                  <Divider />
                  <Stack spacing={1.5}>
                    <DescriptionItem value="300 megahash mining power" />
                    <DescriptionItem value="One affiliate tracking center" />
                    <DescriptionItem value="Unique tracking code & URL" />
                    <DescriptionItem value="Back-office training & tools" />
                    <DescriptionItem value="Dedicated Customer Support" />
                    <DescriptionItem value="Unlimited hosting & electricity" />
                  </Stack>
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    color="info"
                    endIcon={<Iconify icon="pajamas:long-arrow" />}
                    onClick={() => goToJoin(PACKAGES[1])}
                    sx={{ mt: 2, bgcolor: common.primary }}
                  >
                    Triple Your Output
                  </Button>
                </Stack>
              </Card>
            </m.div>
          </Grid>
          <Grid xl={4} md={6} xs={12}>
            <m.div variants={varFade().inUp}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: (theme) => theme.customShadows.z20,
                    borderColor: alpha(common.primary, 0.24),
                  },
                }}
              >
                <Stack spacing={3}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack>
                      <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        BUILDER Plan
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                        Build your mining empire
                      </Typography>
                    </Stack>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 1.5,
                        bgcolor: alpha(common.primary, 0.12),
                      }}
                    >
                      <Iconify
                        icon="ic:round-query-builder"
                        color="common.primary"
                        width={32}
                        height={32}
                      />
                    </Box>
                  </Stack>
                  <Typography variant="h2" sx={{ fontWeight: 700 }}>
                    $8955
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    one-time fee
                  </Typography>
                  <Divider />
                  <Stack spacing={1.5}>
                    <DescriptionItem value="900 megahash mining power" />
                    <DescriptionItem value="Three affiliate tracking center" />
                    <DescriptionItem value="Unique tracking code & URL" />
                    <DescriptionItem value="Back-office training & tools" />
                    <DescriptionItem value="Dedicated Customer Support" />
                    <DescriptionItem value="Unlimited hosting & electricity" />
                  </Stack>
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    endIcon={<Iconify icon="pajamas:long-arrow" />}
                    color="info"
                    onClick={() => goToJoin(PACKAGES[2])}
                    sx={{ mt: 2, bgcolor: common.primary }}
                  >
                    Build Your Network
                  </Button>
                </Stack>
              </Card>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

interface Props {
  value: string;
}

function DescriptionItem({ value }: Props) {
  return (
    <Typography variant="body2" display="flex" alignItems="center">
      <Iconify icon="eva:checkmark-circle-2-fill" color="common.primary" sx={{ mr: 1 }} />
      {value}
    </Typography>
  );
}
