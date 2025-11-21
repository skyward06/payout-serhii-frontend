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

import { bgBlur, varAlpha } from 'src/theme/styles';
import { LayoutSection } from 'src/layouts/core/layout-section';

import { Iconify } from 'src/components/Iconify';
import DarkLogo from 'src/components/logo/dark-logo';
import { NavBasicMobile, NavBasicDesktop } from 'src/components/NavBasic';

import { Footer } from 'src/sections/newHomepage/Footer';
import { JoinNowButton } from 'src/sections/Introduction/components/JoinNowButton';

import { Main } from '../main';

// ----------------------------------------------------------------------

interface Props {
  children?: React.ReactNode;
}

export function NewNavBasic({ children }: Props) {
  const theme = useTheme();
  const mobileOpen = useBoolean();

  const { offsetTop } = useScrollOffSetTop();

  const NAV_ITEMS = [
    {
      title: 'About',
      path: '#',
      children: [
        { title: 'Meet the Team', path: paths.comingSoon },
        { title: 'News & Events', path: 'https://texitcoin.org/Events.html' },
        { title: 'Contact Us', path: paths.comingSoon },
      ],
    },
    {
      title: 'Resources',
      path: '#',
      children: [
        { title: 'Texitcoin.org', path: 'https://texitcoin.org' },
        { title: 'Web Wallet', path: 'https://wallet.texitcoin.org' },
        { title: 'Coin Market Cap', path: 'https://coinmarketcap.com/currencies/texitcoin/' },
        { title: 'Wrapped TXC', path: 'https://wtxc.texitcoin.org/' },
        { title: 'Exchange', path: 'https://coinmarketcap.com/currencies/texitcoin/#Markets' },
        { title: 'Swag', path: 'https://shoptxc.com/' },
      ],
    },
    {
      title: 'Proof',
      path: '#',
      children: [
        { title: 'The Mine', path: paths.comingSoon },
        { title: 'Promotion', path: paths.comingSoon },
        { title: 'Community', path: paths.comingSoon },
      ],
    },
    {
      title: 'Sign In',
      path: paths.auth.signIn,
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
