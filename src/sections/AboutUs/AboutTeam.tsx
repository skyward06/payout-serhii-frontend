import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';
import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { Carousel, useCarousel, CarouselArrowFloatButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Bobby Gray',
    role: 'Founder',
    avatarUrl: `${CONFIG.site.basePath}/assets/members/bobby.jpg`,
  },
  {
    id: '2',
    name: 'Kira Gray',
    role: 'Events',
    avatarUrl: `${CONFIG.site.basePath}/assets/members/kira.jpg`,
  },
  {
    id: '3',
    name: 'Bohdan Shlikhutka',
    role: 'Application Architect',
    avatarUrl: `${CONFIG.site.basePath}/assets/members/bohdan.jpg`,
  },
  {
    id: '4',
    name: 'Eddie Allen',
    role: 'Currency Director',
    avatarUrl: `${CONFIG.site.basePath}/assets/members/eddie.jpg`,
  },
  {
    id: '5',
    name: 'McKaylin Coffman',
    role: 'Miner Services',
    avatarUrl: `${CONFIG.site.basePath}/assets/members/mckaylin.jpg`,
  },
  {
    id: '6',
    name: 'Wit Olszewski',
    role: 'Art Director',
    avatarUrl: `${CONFIG.site.basePath}/assets/members/wit.jpg`,
  },
];

export function AboutTeam() {
  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2, md: 3, lg: 4 },
  });

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Our Team
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Built by passionate Texans
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ mx: 'auto', maxWidth: 640, color: 'text.secondary' }}>
          Our team combines decades of experience in blockchain technology, alternative currencies,
          and community building to create a cryptocurrency that truly serves the people of Texas
          and beyond.
        </Typography>
      </m.div>

      <Stack sx={{ position: 'relative' }}>
        <CarouselArrowFloatButtons
          {...carousel.arrows}
          options={carousel.options}
          slotProps={{
            prevBtn: { sx: { left: { xs: -8, md: -40 } } },
            nextBtn: { sx: { right: { xs: -8, md: -40 } } },
          }}
        />

        <Carousel carousel={carousel} sx={{ px: 0.5 }}>
          {teamMembers.map((member) => (
            <Box
              key={member.id}
              component={m.div}
              variants={varFade().in}
              sx={{ py: { xs: 8, md: 10 } }}
            >
              <MemberCard member={member} />
            </Box>
          ))}
        </Carousel>
      </Stack>

      <Button
        size="large"
        color="inherit"
        variant="outlined"
        endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={24} />}
        sx={{ mx: 'auto' }}
      >
        All members
      </Button>
    </Container>
  );
}

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: TeamMember;
};

function MemberCard({ member }: MemberCardProps) {
  return (
    <Card>
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
        {member.name}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary' }}>
        {member.role}
      </Typography>

      <Box sx={{ px: 1, mb: 1 }}>
        <Image alt={member.name} src={member.avatarUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>
    </Card>
  );
}
