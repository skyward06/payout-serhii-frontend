import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { _socials } from 'src/_mock';
import { varAlpha } from 'src/theme/styles';
import { ComingSoonIllustration } from 'src/assets/illustrations';

import { SocialIcon } from 'src/components/Iconify';

// ----------------------------------------------------------------------

export function ComingSoonView() {
  return (
    <Container>
      <Box textAlign="center" py={2}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Coming soon!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          We are currently working hard on this page!
        </Typography>

        <ComingSoonIllustration sx={{ my: { xs: 5, sm: 10 } }} />

        <TextField
          fullWidth
          placeholder="Enter your email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" size="large">
                  Notify me
                </Button>
              </InputAdornment>
            ),
            sx: {
              pr: 0.5,
              [`&.${outlinedInputClasses.focused}`]: {
                boxShadow: (theme) => theme.customShadows.z20,
                transition: (theme) =>
                  theme.transitions.create(['box-shadow'], {
                    duration: theme.transitions.duration.shorter,
                  }),
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                  border: (theme) =>
                    `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.32)}`,
                },
              },
            },
          }}
          sx={{ my: 5 }}
        />

        <Stack spacing={1} alignItems="center" justifyContent="center" direction="row">
          {_socials.map((social) => (
            <IconButton
              key={social.name}
              onClick={() => {
                window.open(social.path);
              }}
            >
              <SocialIcon icon={social.name} />
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
