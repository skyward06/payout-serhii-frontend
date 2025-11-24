import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/useBoolean';
import { useScrollOffSetTop } from 'src/hooks/use-scroll-offset-top';

import { HELP_MINETXC } from 'src/consts';
import { bgBlur, varAlpha } from 'src/theme/styles';
import { LayoutSection } from 'src/layouts/core/layout-section';

import { Iconify } from 'src/components/Iconify';
import DarkLogo from 'src/components/logo/dark-logo';
import { NavBasicMobile, NavBasicDesktop } from 'src/components/NavBasic';

import { Footer } from 'src/sections/NewHomepage/Footer';
import { JoinNowButton } from 'src/sections/NewHomepage/components';

import { Main } from '../main';

// ----------------------------------------------------------------------

interface Props {
  children?: React.ReactNode;
}

export function NavBasic({ children }: Props) {
  const theme = useTheme();
  const mobileOpen = useBoolean();
  const token = localStorage.getItem('token');

  const { offsetTop } = useScrollOffSetTop();

  const NAV_ITEMS = [
    {
      title: 'Rapid Rewards',
      path: paths.pages.rapidRewards.root,
    },
    {
      title: 'Contact',
      path: paths.pages.contact.root,
    },
    {
      title: 'Dashboard',
      path: token ? paths.dashboard.overview.root : paths.pages.statistics.root,
    },
    {
      title: 'Communities',
      path: '#',
      children: [
        {
          title: 'Silverbugs',
          path: paths.pages.silverGuarantee.root,
        },
      ],
    },
    {
      title: 'TEXITcoin.org',
      path: 'https://texitcoin.org/',
    },
    {
      title: 'Help',
      path: HELP_MINETXC,
    },
  ];

  return (
    <LayoutSection
      headerSection={
        <AppBar
          position="sticky"
          sx={{ zIndex: 'var(--layout-header-zIndex)' }}
          className="layout__header"
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: 'auto',
              height: 'var(--layout-header-mobile-height)',
              transition: theme.transitions.create(['height', 'background-color'], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),
              boxShadow: offsetTop ? theme.customShadows.z8 : 'none',
              [theme.breakpoints.up('sm')]: {
                minHeight: 'auto',
              },
              [theme.breakpoints.up('md')]: {
                height: 'var(--layout-header-desktop-height)',
              },
              ...(offsetTop && {
                ...bgBlur({ color: varAlpha(theme.vars.palette.background.defaultChannel, 0.8) }),
              }),
            }}
          >
            <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
              <Box display="flex" flex="1 1 auto" justifyContent="space-between">
                <IconButton
                  onClick={mobileOpen.onTrue}
                  sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                  <Iconify icon="heroicons-solid:menu-alt-1" />
                </IconButton>

                <DarkLogo sx={{ width: { xs: 40, md: 60 }, height: { xs: 40, md: 60 } }} />

                <Stack direction="row" alignItems="center" spacing={6}>
                  <NavBasicDesktop
                    data={NAV_ITEMS}
                    cssVars={{
                      '--nav-item-gap': '50px',
                    }}
                    slotProps={{
                      rootItem: {
                        sx: {},
                        icon: {},
                        texts: {},
                        title: {},
                        caption: {},
                        arrow: {},
                      },
                      subItem: {
                        sx: {},
                        icon: {},
                        texts: {},
                        title: {},
                        caption: {},
                        arrow: {},
                      },
                      paper: {},
                    }}
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                  />

                  <JoinNowButton />
                </Stack>
              </Box>

              <Drawer
                open={mobileOpen.value}
                onClose={mobileOpen.onFalse}
                PaperProps={{ sx: { width: 280 } }}
              >
                <Box sx={{ pl: 2.5, py: 2 }}>
                  <DarkLogo />
                </Box>

                <NavBasicMobile
                  sx={{ px: 1.5 }}
                  data={NAV_ITEMS}
                  cssVars={{
                    '--nav-item-gap': '8px',
                  }}
                  slotProps={{
                    rootItem: {
                      sx: {},
                      icon: {},
                      texts: {},
                      title: {
                        // typography: 'subtitle1',
                        // fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                      },
                      caption: {},
                      info: {},
                      arrow: {},
                    },
                    subItem: {
                      sx: {},
                      icon: {},
                      texts: {},
                      title: {},
                      caption: {},
                      info: {},
                      arrow: {},
                    },
                    paper: {},
                  }}
                />
              </Drawer>
            </Container>
          </Toolbar>
        </AppBar>
      }
      footerSection={<Footer />}
    >
      <Main>{children}</Main>
    </LayoutSection>
  );
}
